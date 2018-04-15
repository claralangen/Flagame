
const remainingTime = document.querySelector('.time span');
let countryName = document.querySelector('#game h2');
let countryFlags = document.querySelectorAll('.flags');
export const gameOverScreen= document.querySelector('#game-over');

let timeCounter = 20;
let intervalId;

function gameOver() {
    gameOverScreen.classList.add('is-open');
    clearInterval(intervalId);
    timeCounter = 20;
}


function timer() {
    intervalId = setInterval(function(){

        if (timeCounter <= 0){
            gameOver();
        }
        timeCounter --;
        remainingTime.textContent = timeCounter;


    },100);
}


export function startGame() {
    timer();
}

