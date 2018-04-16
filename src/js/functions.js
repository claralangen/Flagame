const remainingTime = document.querySelector('.time span');
const gameOverScreen= document.querySelector('#game-over');
let countryName = document.querySelector('#game h2');
let flagDivs = document.querySelectorAll('.flag');
let flagImgs = document.querySelectorAll('.flag img');

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


    },10000);
}

function shuffle(tab_to_shuffle) {
    let temp, random;

    for (let i = 0; i < tab_to_shuffle.length; i++) {
        random = Math.floor( Math.random() * tab_to_shuffle.length );
        temp = tab_to_shuffle[i];
        tab_to_shuffle[i] = tab_to_shuffle[random];
        tab_to_shuffle[random] = temp;
    }

    return tab_to_shuffle;
}

function generateFlags() {


    let random = Math.floor(Math.random()* flags.length);
    let goodFlag = flags[random];

    let remainFlags = flags.filter(function(flag) {
        return flag.name !== goodFlag.name;
    });

    let colorFilter = remainFlags.filter(function(flag){
            return flag.colors[0] === goodFlag.colors[0];

    });
    console.log(colorFilter);
    let colorFilter2 = colorFilter.filter(function(flag){
        return flag.colors[1] || flag.colors[2] === goodFlag.colors[1];

    });
    console.log(colorFilter2);
    console.log(goodFlag);

    let allFlags = colorFilter2.splice(0,3);
    allFlags.push(goodFlag);
    allFlags = shuffle(allFlags);
    console.log(allFlags);

    countryName.textContent = goodFlag.name;

    for (let i = 0; i < allFlags.length; i++) {
        let code = allFlags[i].code.toLowerCase();
        flagImgs[i].src = './assets/flags/' + code + '.svg';

        flagDivs[i].classList.remove('is-active');
    }

}

function startGame() {
    timer();
    generateFlags();
}


