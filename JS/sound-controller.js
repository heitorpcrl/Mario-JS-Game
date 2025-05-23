const sounds = {
    jump: new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3'),
    gameOver: new Audio('https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3'),
    background: new Audio('https://www.soundjay.com/misc/sounds/magic-chime-01.mp3'),
    score: new Audio('https://www.soundjay.com/misc/sounds/coin-01.mp3')
};

sounds.background.loop = true;
sounds.background.volume = 0.2;
sounds.jump.volume = 0.4;
sounds.gameOver.volume = 0.4;
sounds.score.volume = 0.3;

function playJumpSound() {
    sounds.jump.currentTime = 0;
    sounds.jump.play().catch(error => console.log('Erro ao tocar som:', error));
}

function playGameOverSound() {
    sounds.gameOver.currentTime = 0;
    sounds.gameOver.play().catch(error => console.log('Erro ao tocar som:', error));
}

function playBackgroundMusic() {
    sounds.background.currentTime = 0;
    sounds.background.play().catch(error => console.log('Erro ao tocar som:', error));
}

function playScoreSound() {
    sounds.score.currentTime = 0;
    sounds.score.play().catch(error => console.log('Erro ao tocar som:', error));
}

function stopBackgroundMusic() {
    sounds.background.pause();
    sounds.background.currentTime = 0;
}

window.soundController = {
    playJumpSound,
    playGameOverSound,
    playBackgroundMusic,
    playScoreSound,
    stopBackgroundMusic
}; 