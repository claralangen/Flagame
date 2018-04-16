const startButton= document.querySelector('#game-start button');
const startScreen= document.querySelector('#game-start');
const restartButton= document.querySelector('#game-over button');

startButton.addEventListener('click',function(){
    startScreen.classList.remove('is-open');
    startGame();
});

restartButton.addEventListener('click',function(){
    gameOverScreen.classList.remove('is-open');
    liveCounter = 3;

    for (let i = 0; i < lives.length; i++) {
        lives[i].classList.remove('is-active');
    }
    remainingTime.textContent = timeCounter;

    startGame();

});

