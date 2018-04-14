const startButton= document.querySelector('#game-start button');
const startScreen= document.querySelector('#game-start');

startButton.addEventListener('click',function(){
    startScreen.classList.remove('is-open');
});
