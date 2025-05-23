const restartButton = document.querySelector('.restart-button');
const startScreen = document.querySelector('.start-screen');
const scoreElement = document.querySelector('.score-board p');
const coin = document.querySelector('.coin');

let score = 0;
let gameOver = false;
let gameStarted = false;
let gameLoop = null;
let isCoinCollected = false;

function init() {
    window.animationController.pipe.style.animation = 'none';
    coin.style.animation = 'none';
    restartButton.style.display = 'none';
    
    document.addEventListener('keydown', handleGameInput);
    restartButton.addEventListener('click', resetGame);
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        startScreen.style.display = 'none';
        window.animationController.startPipeAnimation();
        coin.style.animation = 'coin-animation 4s infinite linear';
        gameLoop = setInterval(checkCollisions, 10);
        window.soundController.playBackgroundMusic();
    }
}

function resetGame() {
    gameOver = false;
    gameStarted = true;
    score = 0;
    isCoinCollected = false;
    scoreElement.textContent = `Pontuação: ${String(score).padStart(2, '0')}`;
    
    window.animationController.startPipeAnimation();
    window.animationController.pipe.style.left = '';
    window.animationController.resetMarioAnimation();
    
    coin.style.animation = 'coin-animation 4s infinite linear';
    coin.style.right = '-60px';
    coin.classList.remove('collected');
    
    restartButton.style.display = 'none';
    
    gameLoop = setInterval(checkCollisions, 10);
    window.soundController.playBackgroundMusic();
}

function checkCollisions() {
    if (!gameStarted) return;
    
    const pipePosition = window.animationController.pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(window.animationController.mario).bottom.replace('px', '');
    const coinPosition = coin.offsetLeft;
    const marioLeft = window.animationController.mario.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        gameOver = true;
        window.animationController.stopAnimations();
        window.animationController.pipe.style.left = `${pipePosition}px`;
        window.animationController.mario.style.bottom = `${marioPosition}px`;
        window.animationController.setGameOverMario();
        window.soundController.stopBackgroundMusic();
        coin.style.animation = 'none';

        clearInterval(gameLoop);
        restartButton.style.display = 'block';
    }

    if (!isCoinCollected && coinPosition <= marioLeft + 120 && coinPosition >= marioLeft - 40 && marioPosition > 150) {
        isCoinCollected = true;
        score++;
        scoreElement.textContent = `Pontuação: ${String(score).padStart(2, '0')}`;
        window.soundController.playScoreSound();
        coin.classList.add('collected');
        
        setTimeout(() => {
            if (!gameOver) {
                coin.style.right = '-60px';
                coin.classList.remove('collected');
                isCoinCollected = false;
            }
        }, 300);
    }
}

function handleGameInput() {
    if (!gameStarted) {
        startGame();
    }
    
    if (!window.animationController.isJumping && !gameOver) {
        window.animationController.handleJump();
    }
}

document.addEventListener('DOMContentLoaded', init); 