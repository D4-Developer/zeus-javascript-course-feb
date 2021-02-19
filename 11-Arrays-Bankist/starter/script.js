'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Does NOT mutate
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

//  SPLICE(startIndex, noOfElementsWantToRemove)
// remove the element specified by given range 
// mutate the original array
// returns the removed elements....
console.log('SLICE');
// console.log(arr.splice(2)); // removes all element from index 2, from original array
console.log(arr.splice(2, 4)); // removes 4 elements from original arr, strting index 2
console.log(arr.splice(-1)); // removes the last element
console.log(arr.splice()); // removes all element


// REVERSE();
// mutates the array
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
// does not mutate array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same as above


// JOIN
// return the string
console.log(letters.join('-'));
*/


/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  forEach( function (element, index, array) {} );
// can't use break/continue with forEach();

movements.forEach(function (e) {
  e > 0 ? console.log('credit') : console.log('debit')
});

movements.forEach(function (e, index) {
  e > 0 ? console.log(`transaction ${index+1}: credit`) 
  : console.log(`transaction ${index}: debit`)
});
*/



// forEach on map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach( function (val, key, map) {
  console.log(`${key}: ${val}`);
}); 

// forEach on sets
// val = key in sets
const currenciesUnique = new Set(['INR', 'USD', 'GBP', 'EUR', 'INR']);
console.log('--sets--', currenciesUnique);
currenciesUnique.forEach( function (val, key, map) {
  console.log(`${key}: ${val}`);
});