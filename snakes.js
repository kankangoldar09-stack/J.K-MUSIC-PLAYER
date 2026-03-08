// --- AUDIO ENGINE ---
class AudioEngine {
    constructor() { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
    init() { if (this.ctx.state === 'suspended') this.ctx.resume(); }
    playTone(freq, type, duration, vol) {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + duration);
    }
    playClick() { this.playTone(800, 'sine', 0.05, 0.4); }
    playDiceRoll() { this.playTone(300, 'square', 0.1, 0.2); setTimeout(() => this.playTone(400, 'sine', 0.1, 0.3), 100); }
    playMove() { this.playTone(500, 'sine', 0.1, 0.2); }
    playLadder() { [400, 500, 600, 700].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.1, 0.3), i * 100)); }
    playSnake() { [600, 500, 400, 300].forEach((f, i) => setTimeout(() => this.playTone(f, 'sawtooth', 0.1, 0.4), i * 150)); }
    playWin() { for (let i = 0; i < 8; i++) setTimeout(() => this.playTone(400 + Math.random() * 400, 'square', 0.2, 0.4), i * 150); }
}
const audio = new AudioEngine();

// UI interactions
let selectedMode = 'computer';

function openPlayerSelect(mode) {
    audio.init(); audio.playClick();
    selectedMode = mode;
    document.getElementById('player-modal').classList.add('active');
}

function closePlayerSelect() {
    audio.playClick();
    document.getElementById('player-modal').classList.remove('active');
}

function startGame(count) {
    audio.playClick();
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('player-modal').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    initGameConfig(selectedMode, count);
}

// GAME LOGIC
const COLORS = ['yellow', 'blue', 'red', 'green'];
// Image mappings: 
// panel-0 = Yellow (Middle Left)
// panel-1 = Blue (Middle Right)
// panel-2 = Red (Bottom Right)
// panel-3 = Green (Bottom Left) -> Has dice first in the image, so green should start perhaps? Let's just keep turn 0.

let gameMode = 'computer';
let numPlayers = 4;
let isAI = [false, true, true, true];
let activePlayers = [0, 1, 2, 3];

// Realistic 10x10 Snakes and Ladders
const LADDERS = { 4: 25, 21: 39, 29: 74, 43: 76, 63: 80, 71: 89 };
const SNAKES = { 30: 7, 47: 15, 56: 19, 73: 51, 82: 42, 92: 75, 98: 55 };

// Snake colors from image loosely
const SNAKE_COLORS = { 30: '#4CAF50', 47: '#F44336', 56: '#8BC34A', 73: '#03A9F4', 82: '#F44336', 92: '#4CAF50', 98: '#FF5722' };

let tokens = [];
let currentPlayer = 3; // Start with green (panel-3 at bottom left as shown in image)
let hasRolled = false;
let extraReroll = false;
let diceValue = 1;

const boardEl = document.getElementById('board');
const overlayEl = document.getElementById('overlay');
const diceWrapper = document.getElementById('dice-wrapper');
const diceEl = document.getElementById('dice');
const toastEl = document.getElementById('toast');

const CELL_CLASSES = ['bg-yellow', 'bg-white', 'bg-red', 'bg-blue', 'bg-green'];

function showMsg(msg) {
    if (toastEl.classList.contains('show')) {
        toastEl.classList.remove('show');
        setTimeout(() => { toastEl.innerText = msg; toastEl.classList.add('show'); }, 100);
    } else {
        toastEl.innerText = msg; toastEl.classList.add('show');
    }
    clearTimeout(toastEl.timeout);
    toastEl.timeout = setTimeout(() => toastEl.classList.remove('show'), 2000);
}

function initGameConfig(mode, count) {
    gameMode = mode; numPlayers = count;

    // In 2 player mode, Green vs Blue (3 vs 1)
    if (numPlayers === 2) activePlayers = [3, 1];
    else if (numPlayers === 3) activePlayers = [3, 0, 1];  // Green, Yellow, Blue
    else activePlayers = [3, 0, 1, 2]; // Green, Yellow, Blue, Red

    currentPlayer = activePlayers[0];

    for (let i = 0; i < 4; i++) {
        const panel = document.getElementById(`panel-${i}`);
        if (!activePlayers.includes(i)) {
            panel.style.display = 'none';
            isAI[i] = true;
        } else {
            panel.classList.remove('inactive');
            if (i === activePlayers[0]) {
                isAI[i] = false;
            } else {
                if (gameMode === 'computer') isAI[i] = true;
                else isAI[i] = false;
            }
        }
    }

    initBoard();
    initTokens();
    drawSnakesAndLadders();
    setTimeout(() => setTurn(currentPlayer), 500);
}

let cellCoords = {};

function initBoard() {
    boardEl.innerHTML = '';
    cellCoords = {};

    let isRightToLeft = true;
    let colorIndex = 0;

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            // When isRightToLeft is true, 100 is at col 0, 91 is at col 9.
            // When false, 81 is at col 0, 90 is at col 9.
            const cellVal = isRightToLeft ? (100 - (row * 10) - col) : (100 - (row * 10) - 9 + col);

            // Apply vibrant background strictly alternating
            cell.className = `cell ${CELL_CLASSES[colorIndex]}`;
            colorIndex = (colorIndex + 1) % CELL_CLASSES.length;

            if (cellVal === 100) {
                cell.innerHTML = '<span style="color: gold; text-shadow: 0 0 5px black;">⭐</span> 100';
                cell.classList.add('cell-100');
            } else {
                cell.innerText = cellVal;
            }

            // HTML grid natively flows left-to-right, so actual structural col is just 'col'
            const cx = (col * 100) + 50;
            const cy = (row * 100) + 50;
            cellCoords[cellVal] = { x: cx, y: cy };

            boardEl.appendChild(cell);
        }
        isRightToLeft = !isRightToLeft;
    }
}

function drawSnakesAndLadders() {
    let svgContent = '';

    // Ladders (Light blue neon like image)
    for (const [start, end] of Object.entries(LADDERS)) {
        const p1 = cellCoords[start];
        const p2 = cellCoords[end];
        svgContent += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" class="ladder" />`;

        const steps = 8;
        const dx = (p2.x - p1.x) / steps;
        const dy = (p2.y - p1.y) / steps;
        const ang = Math.atan2(dy, dx);
        const w = 15;
        const ox = Math.sin(ang) * w;
        const oy = -Math.cos(ang) * w;

        for (let i = 1; i < steps; i++) {
            const cx = p1.x + (dx * i);
            const cy = p1.y + (dy * i);
            svgContent += `<line x1="${cx - ox}" y1="${cy - oy}" x2="${cx + ox}" y2="${cy + oy}" class="ladder-rung" />`;
        }
    }

    // Snakes
    for (const [start, end] of Object.entries(SNAKES)) {
        const p1 = cellCoords[start];
        const p2 = cellCoords[end];
        const col = SNAKE_COLORS[start] || '#F44336';

        const midX1 = p1.x + (p2.x - p1.x) * 0.3 + (Math.random() * 150 - 75);
        const midY1 = p1.y + (p2.y - p1.y) * 0.3;
        const midX2 = p1.x + (p2.x - p1.x) * 0.6 + (Math.random() * 150 - 75);
        const midY2 = p1.y + (p2.y - p1.y) * 0.6;

        svgContent += `<path d="M ${p1.x} ${p1.y} C ${midX1} ${midY1}, ${midX2} ${midY2}, ${p2.x} ${p2.y}" class="snake-body" stroke="${col}" />`;

        // Snake Head
        svgContent += `<circle cx="${p1.x}" cy="${p1.y}" r="25" fill="${col}" />`;
        // Snake Eyes
        svgContent += `<circle cx="${p1.x - 8}" cy="${p1.y - 8}" r="5" fill="white" />`;
        svgContent += `<circle cx="${p1.x + 8}" cy="${p1.y - 8}" r="5" fill="white" />`;
        svgContent += `<circle cx="${p1.x - 8}" cy="${p1.y - 8}" r="2" fill="black" />`;
        svgContent += `<circle cx="${p1.x + 8}" cy="${p1.y - 8}" r="2" fill="black" />`;
    }

    overlayEl.innerHTML = svgContent;
}

function initTokens() {
    document.querySelectorAll('.token').forEach(e => e.remove());
    tokens = [];
    for (let colorIdx = 0; colorIdx < 4; colorIdx++) {
        if (!activePlayers.includes(colorIdx)) continue;

        const token = {
            id: `snakes-${COLORS[colorIdx]}`, colorIdx: colorIdx,
            element: document.createElement('div'),
            boardPosition: 0
        };
        token.element.className = `token token-${COLORS[colorIdx]}`;
        // Add the map pin HTML
        token.element.innerHTML = `<div class="pin"><div class="pin-dot"></div></div>`;
        boardEl.parentElement.appendChild(token.element);
        tokens.push(token);
    }
    updateTokenPositions();
}

function updateTokenPositions() {
    tokens.forEach(t => {
        if (t.boardPosition === 0) {
            t.element.style.top = '105%';
            t.element.style.left = `${10 + (t.colorIdx * 20)}%`;
            return;
        }

        const coord = cellCoords[t.boardPosition];
        if (coord) {
            const samePosTokens = tokens.filter(tok => tok.boardPosition === t.boardPosition);
            const idx = samePosTokens.indexOf(t);
            let dx = 0, dy = 0;
            if (samePosTokens.length > 1) {
                const ang = (idx / samePosTokens.length) * Math.PI * 2;
                dx = Math.cos(ang) * 15; dy = Math.sin(ang) * 15;
            }

            // Token is translated -50% -85% to be pinned exactly AT the coord
            t.element.style.top = `calc(${(coord.y / 1000) * 100}% + ${dy}px)`;
            t.element.style.left = `calc(${(coord.x / 1000) * 100}% + ${dx}px)`;
            t.element.style.transform = `scale(0.8) translate(-50%, -85%)`;
            t.element.style.zIndex = 20 + t.boardPosition; // Sort z-index so higher pieces are in front
        }
    });
}

function setTurn(playerIdx) {
    document.querySelectorAll('.player-tab').forEach(p => p.classList.remove('active'));
    document.getElementById(`panel-${playerIdx}`).classList.add('active');

    const slot = document.getElementById(`dice-slot-${playerIdx}`);
    if (slot) slot.appendChild(diceWrapper);
    diceEl.className = 'dice show-1';

    currentPlayer = playerIdx;
    hasRolled = false;
    extraReroll = false;

    if (!isAI[playerIdx]) showMsg(`Your Turn!`);
    else {
        showMsg(`Computer Turn`);
        setTimeout(rollDice, 1000);
    }
}

diceWrapper.addEventListener('click', () => {
    if (!isAI[currentPlayer] && !hasRolled) {
        audio.init();
        rollDice();
    }
});

function rollDice() {
    if (hasRolled) return;
    audio.playDiceRoll();
    diceEl.classList.add('rolling');
    hasRolled = true;

    setTimeout(() => {
        diceValue = Math.floor(Math.random() * 6) + 1;
        diceEl.classList.remove('rolling');
        diceEl.className = `dice show-${diceValue}`;
        if (diceValue === 6) extraReroll = true;

        processTurn();
    }, 600);
}

function processTurn() {
    const t = tokens.find(tok => tok.colorIdx === currentPlayer);

    // Start rule: Saanp Seedi often requires starting directly or needing 1/6
    // We allow direct movement from start (0) for fast play

    if (t.boardPosition + diceValue > 100) {
        showMsg(`Need exactly ${100 - t.boardPosition}!`);
        setTimeout(endTurn, 1500);
        return;
    }

    let stepsLeft = diceValue;
    function stepAnimation() {
        if (stepsLeft > 0) {
            t.boardPosition++;
            audio.playMove();
            updateTokenPositions();
            stepsLeft--;
            setTimeout(stepAnimation, 250);
        } else {
            checkTriggers(t);
        }
    }
    stepAnimation();
}

function checkTriggers(t) {
    if (t.boardPosition === 100) {
        audio.playWin();
        document.getElementById('win-title').innerText = `Color ${COLORS[currentPlayer].toUpperCase()} WINS!`;
        document.getElementById('win-screen').classList.add('active');
        return;
    }

    if (LADDERS[t.boardPosition]) {
        showMsg("LADDER!");
        audio.playLadder();
        setTimeout(() => {
            t.boardPosition = LADDERS[t.boardPosition];
            updateTokenPositions();
            setTimeout(endTurn, 1000);
        }, 500);
    } else if (SNAKES[t.boardPosition]) {
        showMsg("OH NO! SNAKE!");
        audio.playSnake();
        setTimeout(() => {
            t.boardPosition = SNAKES[t.boardPosition];
            updateTokenPositions();
            setTimeout(endTurn, 1000);
        }, 500);
    } else {
        setTimeout(endTurn, 1000);
    }
}

function endTurn() {
    if (extraReroll) {
        showMsg("Roll again (Got a 6)!");
        hasRolled = false; extraReroll = false;
        if (isAI[currentPlayer]) setTimeout(rollDice, 1000);
    } else {
        let currentIndexInActive = activePlayers.indexOf(currentPlayer);
        let nextPlayerIndex = (currentIndexInActive + 1) % activePlayers.length;
        setTurn(activePlayers[nextPlayerIndex]);
    }
}
