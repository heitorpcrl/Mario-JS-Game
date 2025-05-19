const mario = document.querySelector('.mario');
let isJumping = false;
let score = 0;
let scoreElement = document.querySelector('.score-board p');

const updateScore = () => {
    score++;
    scoreElement.textContent = `Pontuação: ${String(score).padStart(2, '0')}`;
}

setInterval(updateScore, 1500);

const jump = () => {
    if (isJumping) return;
    
    isJumping = true;
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
        isJumping = false;
    }, 900);
}

document.addEventListener('keydown', jump);




