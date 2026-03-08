const fs = require('fs');

let ludoHtml = fs.readFileSync('index.html', 'utf8');
let ludoCss = fs.readFileSync('style.css', 'utf8');
let ludoJs = fs.readFileSync('script.js', 'utf8');

ludoHtml = ludoHtml.replace('<link rel="stylesheet" href="style.css">', `<style>\n${ludoCss}\n</style>`);
ludoHtml = ludoHtml.replace('<script src="script.js"></script>', `<script>\n${ludoJs}\n</script>`);
ludoHtml = ludoHtml.replace(/window\.location\.href='snakes\.html'/g, "window.parent.postMessage('load_snakes', '*')");

let snakeHtml = fs.readFileSync('snakes.html', 'utf8');
let snakeCss = fs.readFileSync('snakes.css', 'utf8');
let snakeJs = fs.readFileSync('snakes.js', 'utf8');

snakeHtml = snakeHtml.replace('<link rel="stylesheet" href="snakes.css">', `<style>\n${snakeCss}\n</style>`);
snakeHtml = snakeHtml.replace('<script src="snakes.js"></script>', `<script>\n${snakeJs}\n</script>`);
snakeHtml = snakeHtml.replace(/window\.location\.href='index\.html'/g, "window.parent.postMessage('load_ludo', '*')");

// Safely serialize HTML into JS strings, making sure to escape closing script tags
const ludoStr = JSON.stringify(ludoHtml).replace(/<\/(script)/ig, "<\\/$1");
const snakeStr = JSON.stringify(snakeHtml).replace(/<\/(script)/ig, "<\\/$1");

const masterHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Ludo & Saanp Seedi Master</title>
    <style>
        body, html { margin: 0; padding: 0; width: 100vw; height: 100vh; background: #000; overflow: hidden; }
        iframe { width: 100vw; height: 100vh; border: none; display: block; }
    </style>
</head>
<body>
    <iframe id="game-frame" sandbox="allow-scripts allow-same-origin"></iframe>
    <script>
        const ludoSrc = ${ludoStr};
        const snakeSrc = ${snakeStr};
        
        window.addEventListener('message', function(e) {
            if (e.data === 'load_snakes') document.getElementById('game-frame').srcdoc = snakeSrc;
            if (e.data === 'load_ludo') document.getElementById('game-frame').srcdoc = ludoSrc;
        });
        
        document.getElementById('game-frame').srcdoc = ludoSrc;
    </script>
</body>
</html>`;

fs.writeFileSync('Ludo_Saanp_Seedi_Master.html', masterHtml);
console.log('Successfully written to Ludo_Saanp_Seedi_Master.html');
