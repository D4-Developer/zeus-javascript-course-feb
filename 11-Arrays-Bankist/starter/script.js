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

function login() {

}

function displayTransaction (acc) {
  
  acc.forEach( function (trans, i) {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    
    const transTag = `<div class="movements__row">
      <div class="movements__type movements__type--${transType}">${i + 1} ${transType}</div>
      <div class="movements__date">X days ago</div>
      <div class="movements__value">${trans}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', transTag);
  });
}

displayTransaction(account1.movements);

function createUserNames () {
  accounts.forEach( function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ')
      .map((name) => name[0])
      .join('');
  });
}

createUserNames();

function calcBalances() {
  accounts.forEach( function (acc) {
    acc.balance = acc.movements.reduce( function (pre, current){
      return pre + current;
    },  0);
  });
}

calcBalances();

// console.log(account1);
// console.log(account2);

function calcDisplaySummary(movements) {
  const incomes = movements
    .filter( (mov) => mov > 0)
    .reduce( ((acc, mov) => acc + mov) ,0);

  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter( (mov) => mov < 0)
    .reduce( (acc, mov) => acc + mov ,0);
  
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter( (mov) => mov > 0)
    .map ( (deposit) => (deposit * 1.2) / 100 )
    .filter ( (int, arr) => int > 1) // less than 1 interest will be discarded
    .reduce ( (acc, interest) => acc + interest , 0);
  labelSumInterest.textContent = `${interest}€`
}

calcDisplaySummary(account1.movements);



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


/*
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
*/



/*
// map : array
// returns the new array of all elements,
// with performing specified action on each elemets....

console.log('orginal:', account1.movements);
function multiPyByN (n) {
  return account1.movements.map( (e) => e * n);
}

const movements = multiPyByN(2);

multiPyByN(2);
console.log('Multiplied by 2:',movements);


// filter : array
function filterDeposits() {
  return movements.filter( function (e) {
    return e > 0;
  });
}

const deposits = filterDeposits();
console.log('deposits:', deposits);

function filterWithdrawals () {
  return movements.filter( function (e) {
    return e < 0;
  });
}

const withdrawals = filterWithdrawals();
console.log('withdrawals:', withdrawals);


// reduce : array
// syntax: reduce ( fn(pre, curr, i, arr) {  }, initializedPreVal);

function calcBalance() {
  return movements.reduce( function (pre, current){
    return pre + current;
  },  0);
}

const accBalance = calcBalance();
console.log('accBalance: ', accBalance);

function maxUsingReduce() {
  return movements.reduce(function(pre, current) {
    if (pre > current) return pre;
    else return current
  }, movements[0]);
};

console.log('max:', maxUsingReduce());
*/


/*
/// Pipeline ( chainig of array-methods )
const euroToUsd = 1.1;
// console.log(account1.movements);

// ex of pipeline 
const totalDepositsUSD = account1.movements
  .filter(mov => mov > 0)
  .map((mov,i,arr) => mov * euroToUsd)
  .reduce( (pre, curr) => pre + curr, 0);

console.log(totalDepositsUSD);
*/


// find () return the first element that satisfies given condition
// only returns 1 element
const firstWithDrawal = account1.movements.find(mov => mov < 0);
console.log(firstWithDrawal);

const str = ['d', 'a', 'r', 's', 'h', 'a', 'n'];
console.log(str.find( (ele)=> ele == 'a')); // a
console.log(str.find( (ele)=> ele == 'b')); // undefined

const account = accounts.find( (acc) => acc.owner == 'Jessica Davis');
console.log(account); // object 