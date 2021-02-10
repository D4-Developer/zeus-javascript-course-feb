'use strict';

let isGameOn; // boolean
let diceNumber;
let currentPlayer;
let firstCurrent = 0, secondCurrent = 0;
let firstTotal = 0, secondTotal = 0;

const target = 50;

const diceImg = document.querySelector('.dice');

const currentObj1 = document.querySelector('#current--0');
const currentObj2 = document.querySelector('#current--1');
const totalObj1 = document.querySelector('#score--0');
const totalObj2 = document.querySelector('#score--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// buttons....
const newGameBtnObj = document.querySelector('.btn--new');
const rolldiceBtnObj = document.querySelector('.btn--roll');
const holdBtnObj = document.querySelector('.btn--hold');

function initializeGame() {
    isGameOn = true;
    currentPlayer = 0
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

function getNumber() {
    return Math.trunc(Math.random() * 6 + 1);
}

function updateCurrentScore() {
    if (currentPlayer == 0) {
        firstCurrent += diceNumber;
        currentObj1.textContent = firstCurrent;
    }
    else {
        secondCurrent += diceNumber;
        currentObj2.textContent = secondCurrent;
    }
}

function updateDiceImg() {
    diceImg.classList.remove('hide');
    // diceImg.setAttributesrc', `dice-${diceNumber}.png`);
    diceImg.src = `dice-${diceNumber}.png`;
}

function resetCurrentScore() {
    if (currentPlayer == 0) {
        firstCurrent = 0;
        currentObj1.textContent = firstCurrent;
    }
    else {
        secondCurrent = 0;
        currentObj2.textContent = secondCurrent;
    }
}

function changeActivePlayer() {
    if (currentPlayer == 0) currentPlayer = 1;
    else currentPlayer = 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

function switchPlayer() {
    // reset the currentScore of currentPlayer....
    resetCurrentScore();
    changeActivePlayer();
}

function rolldice() {
    diceNumber = getNumber();
    updateDiceImg();
    if (diceNumber == 1) switchPlayer();
    else updateCurrentScore();
}

function announceWinner() {


}

function holdAction() {
    if (currentPlayer == 0) {
        firstTotal += firstCurrent;
        totalObj1.textContent = firstTotal;

    // check for is firstPlayer wins or not...
        if (firstTotal >= target)
            announceWinner(0);
        else switchPlayer();
    }
    else {
        secondTotal += secondCurrent;
        totalObj2.textContent = secondTotal;
        
    // check for is secondPlayer wins or not...
        if (secondTotal >= target)
            announceWinner(1);
        else switchPlayer();
    }
}

newGameBtnObj.addEventListener('click', initializeGame);
rolldiceBtnObj.addEventListener('click', rolldice);
holdBtnObj.addEventListener('click', holdAction);

