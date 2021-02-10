'use strict';

let isGameOn; // boolean
let firstCurrent = 0, secondCurrent = 0;
let firstTotal = 0, secondTotal = 0;

const diceImg = document.querySelector('.dice');

const currentObj1 = document.querySelector('#current--0');
const currentObj2 = document.querySelector('#current--1');
const totalObj1 = document.querySelector('#score--0');
const totalObj2 = document.querySelector('#score--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// buttons....
const newGameBtnObj = document.querySelector('btn--new');
const rolldiceBtnObj = document.querySelector('btn--roll');
const holdBtnObj = document.querySelector('btn--hold');

function initializeGame() {
    isGameOn = false;
    firstCurrent = 0, secondCurrent = 0;
    firstTotal = 0, secondCurrent = 0;
    diceImg.classList.add('hide');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    currentObj1.textContent = firstCurrent;
    totalObj1.textContent = firstTotal;
    currentObj2.textContent = secondCurrent;
    totalObj2.textContent = secondTotal;
}

initializeGame();

function rolldice() {
    
}

function holdAction() {
    
}

newGameBtnObj.addEventListener('click', initializeGame);
rolldiceBtnObj.addEventListener('click', rolldice);
holdBtnObj.addEventListener('click', holdAction);

