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
    playCapture() { this.playTone(100, 'sawtooth', 0.3, 0.6); }
    playUnlock() { this.playTone(800, 'sine', 0.1, 0.4); setTimeout(() => this.playTone(1200, 'sine', 0.2, 0.4), 100); }
    playHome() { [523, 659, 783, 1046].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.2, 0.4), i * 100)); }
    playWin() { for (let i = 0; i < 8; i++) setTimeout(() => this.playTone(400 + Math.random() * 400, 'square', 0.2, 0.4), i * 150); }
}
const audio = new AudioEngine();

setTimeout(() => {
    document.getElementById('loading-screen').classList.remove('active');
    document.getElementById('home-screen').classList.add('active');
}, 2500);

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

// Ludo Star layout mapping
// 0: Yellow (Bottom-Left)
// 1: Blue (Top-Left)
// 2: Red (Top-Right)
// 3: Green (Bottom-Right)
const COLORS = ['yellow', 'blue', 'red', 'green'];
let gameMode = 'computer';
let numPlayers = 4;
let isAI = [false, true, true, true];
let activePlayers = [0, 1, 2, 3];

function initGameConfig(mode, count) {
    gameMode = mode; numPlayers = count;

    // In 2 player mode, opposite colors. Yellow vs Red (0 vs 2)
    if (numPlayers === 2) activePlayers = [0, 2];
    else if (numPlayers === 3) activePlayers = [0, 1, 2]; // Yellow, Blue, Red
    else activePlayers = [0, 1, 2, 3];

    for (let i = 0; i < 4; i++) {
        const panel = document.getElementById(`panel-${i}`);
        const nameEl = document.getElementById(`name-${i}`);
        const avatarEl = document.getElementById(`avatar-img-${i}`);

        if (!activePlayers.includes(i)) {
            panel.classList.add('inactive');
            isAI[i] = true;
        } else {
            panel.classList.remove('inactive');
            if (i === 0) {
                isAI[i] = false;
                nameEl.innerText = "You";
                avatarEl.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=You&backgroundColor=FBC02D";
            } else {
                if (gameMode === 'computer') {
                    isAI[i] = true;
                    nameEl.innerText = `Computer ${i + 1}`;
                    avatarEl.src = `https://api.dicebear.com/7.x/bottts/svg?seed=Comp${i}&backgroundColor=fff`;
                } else {
                    isAI[i] = false;
                    nameEl.innerText = `Player ${i + 1}`;
                    avatarEl.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=P${i}&backgroundColor=fff`;
                }
            }
        }
    }

    initBoard();
    initTokens();
    setTimeout(() => setTurn(activePlayers[0]), 500);
}

// Track coords clockwise
const mainTrack = [
    [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [5, 6], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6], // 0-10 Left arm -> top arm
    [0, 7], [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], // 11-17 Top turn -> down
    [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], // 18-23 Right arm right
    [7, 14], [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9], // 24-30 Right arm left
    [9, 8], [10, 8], [11, 8], [12, 8], [13, 8], [14, 8], // 31-36 Bottom down
    [14, 7], [14, 6], [13, 6], [12, 6], [11, 6], [10, 6], [9, 6], // 37-43 Bottom up
    [8, 5], [8, 4], [8, 3], [8, 2], [8, 1], [8, 0], [7, 0] // 44-51 Left arm left
];
// start offset mapping:
// Yellow (0) starts at bottom arm left col pointing up => [13,6] => Index 39
// Blue (1) starts at left arm top row pointing right => [6,1] => Index 0
// Red (2) starts at top arm right col pointing down => [1,8] => Index 13
// Green (3) starts at right arm bottom row pointing left => [8,13] => Index 26
const startOffsets = [39, 0, 13, 26];

// Home paths
const homeTracks = [
    [[13, 7], [12, 7], [11, 7], [10, 7], [9, 7]], // Yellow (0)
    [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5]],     // Blue (1)
    [[1, 7], [2, 7], [3, 7], [4, 7], [5, 7]],     // Red (2)
    [[7, 13], [7, 12], [7, 11], [7, 10], [7, 9]]  // Green (3)
];

// Inner circle coords based on 15x15 board
// Bottom-Left base runs r:9..14, c:0..5. Exact centers roughly: r=10.5, 12.5; c=1.5, 3.5
const bases = [
    [[10.5, 1.5], [10.5, 3.5], [12.5, 1.5], [12.5, 3.5]], // Yellow
    [[1.5, 1.5], [1.5, 3.5], [3.5, 1.5], [3.5, 3.5]],  // Blue
    [[1.5, 10.5], [1.5, 12.5], [3.5, 10.5], [3.5, 12.5]], // Red
    [[10.5, 10.5], [10.5, 12.5], [12.5, 10.5], [12.5, 12.5]] // Green
];

// Start spots + Star spots
const safeZones = [0, 8, 13, 21, 26, 34, 39, 47];

let tokens = [];
let currentPlayer = 0;
let hasRolled = false;
let extraReroll = false;
let diceValue = 1;

const boardEl = document.getElementById('board');
const diceWrapper = document.getElementById('dice-wrapper');
const diceEl = document.getElementById('dice');
const toastEl = document.getElementById('toast');

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

function initBoard() {
    boardEl.innerHTML = '';

    // Create base 6x6 containers explicitly via grid layout
    const createBase = (colorClass, r, c) => {
        const base = document.createElement('div');
        base.className = `base-container ${colorClass}`;
        base.style.gridArea = `${r} / ${c} / ${r + 6} / ${c + 6}`;
        base.innerHTML = `
            <div class="base-inner-box">
                 <div class="dark-spot"></div><div class="dark-spot"></div><div class="dark-spot"></div><div class="dark-spot"></div>
            </div>`;
        boardEl.appendChild(base);
    };

    for (let r = 0; r < 15; r++) {
        for (let c = 0; c < 15; c++) {

            // Render large base blocks
            if (r < 6 && c < 6) { if (r === 0 && c === 0) createBase('bg-blue', 1, 1); continue; }
            if (r < 6 && c > 8) { if (r === 0 && c === 9) createBase('bg-red', 1, 10); continue; }
            if (r > 8 && c < 6) { if (r === 9 && c === 0) createBase('bg-yellow', 10, 1); continue; }
            if (r > 8 && c > 8) { if (r === 9 && c === 9) createBase('bg-green', 10, 10); continue; }

            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.gridRow = r + 1;
            cell.style.gridColumn = c + 1;

            // Home tracks
            if (r === 7 && c > 0 && c < 6) cell.classList.add('path-blue');
            else if (c === 7 && r > 0 && r < 6) cell.classList.add('path-red');
            else if (r === 7 && c > 8 && c < 14) cell.classList.add('path-green');
            else if (c === 7 && r > 8 && r < 14) cell.classList.add('path-yellow');

            // Start arrows
            else if (r === 6 && c === 1) { cell.classList.add('path-blue', 'start-cell'); cell.innerHTML = '<div class="start-icon">▶</div>'; }
            else if (r === 1 && c === 8) { cell.classList.add('path-red', 'start-cell'); cell.innerHTML = '<div class="start-icon">▼</div>'; }
            else if (r === 8 && c === 13) { cell.classList.add('path-green', 'start-cell'); cell.innerHTML = '<div class="start-icon">◀</div>'; }
            else if (r === 13 && c === 6) { cell.classList.add('path-yellow', 'start-cell'); cell.innerHTML = '<div class="start-icon">▲</div>'; }

            // Stars
            const mainIdx = mainTrack.findIndex(pos => pos[0] === r && pos[1] === c);
            if (safeZones.includes(mainIdx) && !cell.classList.contains('start-cell') && !cell.classList.contains('path-blue') && !cell.classList.contains('path-red') && !cell.classList.contains('path-yellow') && !cell.classList.contains('path-green')) {
                cell.innerHTML = '<div class="safe-star">⭐</div>';
                cell.classList.add('safe-cell');
            }
            boardEl.appendChild(cell);
        }
    }
}

function initTokens() {
    tokens = [];
    document.querySelectorAll('.token').forEach(e => e.remove());
    for (let colorIdx = 0; colorIdx < 4; colorIdx++) {
        if (!activePlayers.includes(colorIdx)) continue;

        for (let id = 0; id < 4; id++) {
            const token = {
                id: `${COLORS[colorIdx]}-${id}`, colorIdx: colorIdx,
                element: document.createElement('div'),
                position: -1, isFinished: false
            };
            token.element.className = `token token-${COLORS[colorIdx]}`;
            token.element.innerHTML = '<div class="token-inner"></div>';
            token.element.addEventListener('click', () => handleTokenClick(token));
            boardEl.parentElement.appendChild(token.element);
            tokens.push(token);
        }
    }
    updateTokenPositions();
}

function getCoordinate(cIdx, pos, tIdx) {
    if (pos === -1) return bases[cIdx][tIdx];
    if (pos === 56) return [7.5, 7.5];
    if (pos > 50) return homeTracks[cIdx][pos - 51];
    return mainTrack[(pos + startOffsets[cIdx]) % 52];
}

function updateTokenPositions() {
    const counts = {}; const placements = [];
    tokens.forEach(t => {
        const c = getCoordinate(t.colorIdx, t.position, parseInt(t.id.split('-')[1]));
        const key = `${c[0]},${c[1]}`;
        if (!counts[key]) counts[key] = []; counts[key].push(t);
        placements.push({ t, c, key });
    });
    placements.forEach(({ t, c, key }) => {
        const stack = counts[key].length; const idx = counts[key].indexOf(t);
        let scale = 1, dx = 0, dy = 0;
        if (stack > 1 && t.position > -1 && t.position < 56) {
            scale = 0.7; const a = (idx / stack) * Math.PI * 2;
            dx = Math.cos(a) * 0.2; dy = Math.sin(a) * 0.2;
        } else if (t.position === 56) {
            scale = 0.4;
            dx = (Math.random() - 0.5) * 0.5; dy = (Math.random() - 0.5) * 0.5; // Jumble home safely
        }
        t.element.style.top = `${(c[0] + dy) * 100 / 15}%`;
        t.element.style.left = `${(c[1] + dx) * 100 / 15}%`;
        t.element.style.transform = `scale(${scale})`;
    });
}

function setTurn(playerIdx) {
    document.querySelectorAll('.player-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`panel-${playerIdx}`).classList.add('active');

    // Move dice to active player slot
    const slot = document.getElementById(`dice-slot-${playerIdx}`);
    if (slot) slot.appendChild(diceWrapper);
    diceEl.className = 'dice show-1';

    currentPlayer = playerIdx;
    hasRolled = false;
    extraReroll = false;
    tokens.forEach(t => t.element.classList.remove('playable'));

    const playerName = document.getElementById(`name-${playerIdx}`).innerText;

    if (!isAI[playerIdx]) {
        showMsg(`${playerName}'s Turn! Tap dice.`);
    } else {
        showMsg(`${playerName}'s Turn.`);
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
    const myTokens = tokens.filter(t => t.colorIdx === currentPlayer && !t.isFinished);
    const playableTokens = myTokens.filter(t => {
        if (t.position === -1 && diceValue === 6) return true;
        if (t.position > -1 && t.position + diceValue <= 56) return true;
        return false;
    });

    if (playableTokens.length === 0) {
        showMsg(`Rolled ${diceValue}. No moves.`);
        setTimeout(endTurn, 1000);
    } else {
        playableTokens.forEach(t => t.element.classList.add('playable'));

        if (isAI[currentPlayer]) {
            let pick = playableTokens.find(t => t.position === -1);
            if (!pick) pick = playableTokens.sort((a, b) => b.position - a.position)[0];
            setTimeout(() => handleTokenClick(pick), 800);
        } else if (playableTokens.length === 1 && playableTokens[0].position > -1 && !myTokens.some(t => t.position === -1 && diceValue === 6)) {
            showMsg("Auto-moving.");
            setTimeout(() => handleTokenClick(playableTokens[0]), 500);
        } else {
            showMsg(`Rolled ${diceValue}. Pick token.`);
        }
    }
}

function handleTokenClick(token) {
    if (!hasRolled || token.colorIdx !== currentPlayer || !token.element.classList.contains('playable')) return;
    tokens.forEach(t => t.element.classList.remove('playable'));

    if (token.position === -1) {
        token.position = 0;
        audio.playUnlock();
        updateTokenPositions();
        setTimeout(() => checkCapture(token), 400);
    } else {
        // Animate running step by step
        let stepsLeft = diceValue;

        function stepAnimation() {
            if (stepsLeft > 0) {
                token.position++;
                audio.playMove(); // Small step sound
                updateTokenPositions();
                stepsLeft--;
                setTimeout(stepAnimation, 250); // 250ms per square hop
            } else {
                // Done animating
                setTimeout(() => checkCapture(token), 300);
            }
        }

        stepAnimation();
    }
}

function checkCapture(movedToken) {
    let captured = false;
    if (movedToken.position === 56) {
        movedToken.isFinished = true; audio.playHome(); showMsg("Reached Home!");
        extraReroll = true;
    } else if (movedToken.position <= 50) {
        const cCoord = getCoordinate(movedToken.colorIdx, movedToken.position, 0);
        // Find which index in mainTrack the token is currently on (0 to 51)
        // Note: movedToken.position is 0 to 50 relative to path. 
        // We need the absolute index on the board to check against safeZones.
        const absoluteIdx = (movedToken.position + startOffsets[movedToken.colorIdx]) % 52;

        // Ensure index is NOT a safe zone
        if (!safeZones.includes(absoluteIdx)) {
            tokens.forEach(enemy => {
                if (enemy.colorIdx !== movedToken.colorIdx && enemy.position > -1 && enemy.position <= 50) {
                    const eCoord = getCoordinate(enemy.colorIdx, enemy.position, 0);
                    if (eCoord[0] === cCoord[0] && eCoord[1] === cCoord[1]) {
                        // Capture!
                        enemy.position = -1; captured = true;
                        audio.playCapture(); showMsg("Captured an opponent!");
                        extraReroll = true;
                    }
                }
            });
        }
    }

    if (!checkWin()) {
        setTimeout(endTurn, 1000);
    }
}

function endTurn() {
    if (extraReroll) {
        showMsg("Roll again!");
        hasRolled = false; extraReroll = false;
        if (isAI[currentPlayer]) setTimeout(rollDice, 1000);
    } else {
        let currentIndexInActive = activePlayers.indexOf(currentPlayer);
        let nextPlayerIndex = (currentIndexInActive + 1) % activePlayers.length;
        setTurn(activePlayers[nextPlayerIndex]);
    }
}

function checkWin() {
    if (tokens.filter(t => t.colorIdx === currentPlayer && t.isFinished).length === 4) {
        audio.playWin();
        const winTitle = document.getElementById('win-title');
        const winAvatar = document.getElementById('win-avatar');

        const playerName = document.getElementById(`name-${currentPlayer}`).innerText;
        winTitle.innerText = `${playerName} WINS!`;
        winAvatar.src = document.getElementById(`avatar-img-${currentPlayer}`).src;

        document.getElementById('win-screen').classList.add('active');
        return true;
    }
    return false;
}
