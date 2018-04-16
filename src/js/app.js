const startButton= document.querySelector('#game-start button');
const startScreen= document.querySelector('#game-start');
const restartButton= document.querySelector('#game-over button');

startButton.addEventListener('click',function(){
    startScreen.classList.remove('is-open');
    startGame();
});

restartButton.addEventListener('click',function(){
    gameOverScreen.classList.remove('is-open');
    startGame();
});

