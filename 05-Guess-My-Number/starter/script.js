'use strict';
let myNumber = Math.floor(Math.random() * 20) + 1;

let highScore = 0;
let score = 10;

const inputObject = document.querySelector('.guess');
const checkObject = document.querySelector('.check');
const msgObject = document.querySelector('.message');
const scoreObject = document.querySelector('.score');
const highscoreObject = document.querySelector('.highscore');
const resetGameObject = document.querySelector('.again');
const numberObject = document.querySelector('.number');

function changeScore() {
    if (score > 1)  
        --score;
    else {
        // handle game over....
        myNumber = -1; // for 3 line performance increase
        scoreObject.textContent = 0;
        msgObject.textContent = 'Game Over!!! Play again';
        changeBackground('#ff1111');
        return;
    }
    scoreObject.textContent = score;
}

function changeTitle(title) {
    numberObject.textContent = title;
}

function changeHighScore() {
    if (score > highScore) {
        highScore = score;
        highscoreObject.textContent = highScore;
    }
}

function changeBackground(bgColor) {
    document.body.style.backgroundColor = bgColor;
    console.log('change background');
}

function completeGame() {
    msgObject.textContent = 'Correct Number!';
    changeHighScore();
    changeTitle(myNumber);
    changeBackground('#60b347');
    myNumber = -1;
}

function restartGame() {
    inputObject.value = '';
    msgObject.textContent = 'Start guessing...';
    score = 10;
    scoreObject.textContent = score;
    myNumber = Math.floor(Math.random() * 20) + 1;
    changeTitle('?');
    changeBackground('#222');
    console.log('Game reseted');
}

function gameFunction(){
    if (myNumber == -1) return;

    const inputNumber = Number(inputObject.value);
    console.log(myNumber, inputNumber);
    
    if (myNumber == inputNumber) {
        changeScore();
        completeGame();
    }
    else if (myNumber > inputNumber) {
        msgObject.textContent = 'Too low!';
        changeScore();
    }
    else {
        msgObject.textContent = 'Too high!';
        changeScore();
    }
}

checkObject.addEventListener('click', gameFunction);

resetGameObject.addEventListener('click', restartGame);