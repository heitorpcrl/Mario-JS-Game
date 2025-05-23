const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isJumping = false;

function handleJump() {
    if (isJumping) return;
    
    isJumping = true;
    mario.classList.add('jump');
    window.soundController.playJumpSound();

    setTimeout(() => {
        mario.classList.remove('jump');
        isJumping = false;
    }, 1100);
}

function stopAnimations() {
    pipe.style.animation = 'none';
    mario.style.animation = 'none';
}

function startPipeAnimation() {
    pipe.style.animation = 'pipe-animation 4s infinite linear';
}

function setGameOverMario() {
    mario.src = '/IMG/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
    window.soundController.playGameOverSound();
}

function resetMarioAnimation() {
    mario.src = '/IMG/mario.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '';
    mario.style.animation = '';
    mario.style.bottom = '0';
}

window.animationController = {
    mario,
    pipe,
    isJumping,
    handleJump,
    stopAnimations,
    startPipeAnimation,
    setGameOverMario,
    resetMarioAnimation
};




