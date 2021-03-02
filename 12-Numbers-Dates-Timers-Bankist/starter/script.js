'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2020-12-18T21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-02T09:15:04.904Z',
    '2021-01-08T10:17:24.185Z',
    '2021-02-08T14:11:59.604Z',
    '2021-02-24T17:01:17.194Z',
    '2021-02-26T23:36:17.929Z',
    '2021-02-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// bank Functions


let isLoggedIn = false;
let currentUser;
let needSort = false;

function login(e) {
  // form element's default behaviour is to submit the page
  // Prevent form for submitting
  e.preventDefault();
  
  const inputUserName = inputLoginUsername.value;
  const requestedLogin = accounts.find ((acc) => acc.userName == inputUserName);
  
  if (requestedLogin == undefined) {
    console.log('No user with given username');
    /// reset the page to login page
    currentUser = null;
  }
  else {
    resetPage();
    console.log('user found');
    if (requestedLogin.pin == inputLoginPin.value) {
      console.log('login success');
      containerApp.style.opacity = 100;
      currentUser = requestedLogin;
      setupLoggedInPage();
      isLoggedIn = true;
    }
    else {
      console.log('but, wrong pin');
      currentUser = null;
    }
  }
}

function resetPage() {
  labelWelcome.textContent ='Login to get started';
  containerApp.style.opacity = 0;
  isLoggedIn = false;
  needSort = false;
  containerMovements.innerHTML = '';
}

function setupLoggedInPage() {
  if (isLoggedIn) return;
  labelWelcome.textContent = `Welcome back, ${currentUser.owner.split(' ')[0]}`;
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  labelDate.textContent = calcDate(new Date());
  displayTransactions(currentUser);
  calcDisplaySummary(currentUser.movements);
  calcBalances();
}

function calcDate(date, isTimeNeeded = false) {

  const day = `${date.getDate()}`.padStart(2,0);
  const month = `${date.getMonth() + 1}`.padStart(2,0);
  const year = date.getFullYear();
  const hour = `${date.getHours()}`.padStart(2,0);
  const min = `${date.getMinutes()}`.padStart(2,0);

  if (isTimeNeeded)
    return `${day}/${month}/${year}, ${hour}:${min}`;
  
  const calcDaysPassed = (d1, d2) => Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);

  const daysPassed = Math.floor(calcDaysPassed(new Date(), date));
  if (daysPassed == 0) return 'Today';
  else if (daysPassed == 1) return 'Yesterday'
  else if (daysPassed <= 7) return `${daysPassed} days ago`;

  console.log(daysPassed);
  return `${day}/${month}/${year}`;
}

function displayTransactions (acc) {
  // 
  containerMovements.innerHTML = '';

  const movs = needSort ? acc.movements.slice().sort( (a,b) => a - b) : acc.movements; 
  
  movs.forEach( function (trans, i) {
    const dateText = calcDate(new Date(acc.movementsDates[i]));
    // if (needSort) {
    //   acc.movementsDates.findIndex( (date))
    // }
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    
    const transTag = `<div class="movements__row">
      <div class="movements__type movements__type--${transType}">${i + 1} ${transType}</div>
      <div class="movements__date">${dateText}</div>
      <div class="movements__value">${trans}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', transTag);
  });
}

// displayTransaction(account1.movements);



function createUserNames () {
  accounts.forEach( function (acc) {
    acc.userName = acc.owner.toLowerCase().split(' ')
      .map((name) => name[0])
      .join('');
  });
}

createUserNames();

function calcBalances() {
  currentUser.balance = currentUser.movements
    .reduce( (acc, mov) => acc + mov, 0);
  
  labelBalance.textContent = `${currentUser.balance}€`;
}

// calcBalances();

// console.log(account1);
// console.log(account2);

function calcDisplaySummary(movements) {
  const intRate = currentUser.interestRate;;
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
    .map ( (deposit) => (deposit * intRate) / 100 )
    .filter ( (int, arr) => int > 1) // less than 1 interest will be discarded
    .reduce ( (acc, interest) => acc + interest , 0);
  labelSumInterest.textContent = `${interest}€`
}

// calcDisplaySummary(account1.movements);


btnLogin.addEventListener('click', login);

/// ::::::::::::::::::::::: Transfer functionality ::::::::::::::::::::::::

function transferMoney (e) {

  e.preventDefault();

  const recipientUserName = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);

  if (recipientUserName == currentUser.userName)
    return;

  const recipient = accounts.find( (acc) => acc.userName == recipientUserName );
  if (recipient && amount > 0) { /// THIS CAN BE Refactored: update recent, instead calculate All from start
    // deposit to recipient
    depositeMoney(recipient, amount);
    // withdrawal from currentUser
    withDrawalMoney(amount);
    // add new transaction in history 
    newTransaction(amount, 0);
    // re calculate summury ( in, out, interest )
    calcDisplaySummary(currentUser.movements);
    // re-calculate total balance
    calcBalances();
    // add timestamp of this new Transaction in currentUser as well recipientUser
    recipient.movementsDates.push(new Date().toISOString());
    currentUser.movementsDates.push(new Date().toISOString());
  }
  else console.log('No recipient userName found || -ve amount');

  clearTransferFormFields();
}

function depositeMoney (acc, amount) {
  acc.movements.push(amount);
}

function withDrawalMoney (amount) {
  if (!currentUser)
    return;
  currentUser.movements.push(0 - amount);
}

function newTransaction (amount, isDebit) {

  const dateText = calcDate(new Date());
  const transType = isDebit != 0 ? 'deposit' : 'withdrawal';
    
  const transTag = `<div class="movements__row">
    <div class="movements__type movements__type--${transType}">
      ${currentUser.movements.length} ${transType}
    </div>
    <div class="movements__date">${dateText}</div>
    <div class="movements__value">${amount}€</div>
  </div>`;
  console.log('new transaction');
  containerMovements.insertAdjacentHTML('afterbegin', transTag);
}

function clearTransferFormFields () {
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
}

btnTransfer.addEventListener('click', transferMoney);


//// :::::::::::::: Loan Request :::::::::::::::::: ////

function loanRequest (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount <= 0) return;
  const require = 10;

  const isEligible = currentUser.movements.some( (mov) => {
    return mov >= (require * loanAmount)/100;
  });

  if (isEligible) {
    depositeMoney(currentUser, loanAmount);
     // add new transaction in history 
     newTransaction(loanAmount, 1);
     // re calculate summury ( in, out, interest )
     calcDisplaySummary(currentUser.movements);
     // re-calculate total balance
     calcBalances();
     // add timestamp of this new Transaction to current user
    currentUser.movementsDates.push(new Date().toISOString());
    console.log('loan approved');
  }
  else console.log('You are not eligible for this loan amount');

  inputLoanAmount.value = '';

}

btnLoan.addEventListener('click', loanRequest);


// ::::::::::::::::::: Delete Account :::::::::::::::::::::::
function deleteAccount (e) {
  e.preventDefault();
  if (inputClosePin.value && inputCloseUsername.value) return;
  if (inputCloseUsername.value == currentUser.userName 
    && Number(inputClosePin.value) == currentUser.pin) {
    
    const index = accounts.findIndex( (acc) => acc.userName == currentUser.userName);
    if (index) {
      console.log( accounts.splice(index,1));
      logout();
    }
    else console.log('Something went wrong');
  }
  else console.log('No account found to be deleted...');
  clearCloseFormFields();
  
}

function logout () {
  resetPage();
  currentUser = null;
}

function clearCloseFormFields () {
  inputClosePin.value = '';
  inputCloseUsername.value = '';
}

btnClose.addEventListener('click', deleteAccount);

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  needSort = !needSort;
  displayTransactions(currentUser, 1);
});


//////////////////////////////////////////////////
/// Bankist OVER



/*
console.log(23 === 23.0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false


// numbers are stored in base 2::::
console.log(0.1 + 0.2); // wierd
console.log(0.1 + 0.2 == 0.3); // === also false

console.log(Number('23')); // number
console.log(+23); // number short-hand

// Parsing
// parseInt( _, base );
console.log(Number.parseInt(' 32px ')); // 32
console.log(Number.parseInt('abc123')); // NaN
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat(' 2.5rem   ')); // 2.5

// isNaN( ) :: checking if value is NaN
console.log('--- isNan() ---');
console.log(Number.isNaN(20)); // F
console.log(Number.isNaN('20')); // F
console.log(Number.isNaN(+'20x')); // T
console.log(Number.isNaN(23 / 0)); // F

// isFinite( ) :: checking if value is number
console.log('--- isFinite() ---'); 
console.log(Number.isFinite(20)); // F
console.log(Number.isFinite('20')); // F
console.log(Number.isFinite(+'20x')); // F
console.log(Number.isFinite(23 / 0)); // F

//  isInterger( ) :: checking if value is int
console.log('--- isInteger() ---'); 
console.log(Number.isInteger(23)); // T
console.log(Number.isInteger('23')); // F
console.log(Number.isInteger(+'23x')); // F
console.log(Number.isInteger(23 / 0)); // F
*/



/*
// Math.____();

// Math.sqrt(), ** : power
console.log(Math.sqrt(25));
console.log(25 ** (1/2)); // square root
console.log(8 ** (1/3)); // qube root

console.log('-- Math.max() --'); // no parsing
console.log(Math.max(5, 10, 15)); // 15
console.log(Math.max(5, 10, 15, '23')); // 23
console.log(Math.max(5, 10, 15, '23px')); // NaN

console.log('-- Math.min() --'); // no parsing
console.log(Math.min(5, 10, 15));
console.log(Math.min(5, 10, 15, '2')); // 2
console.log(Math.min('3px', 5, 10, 15, )); // NaN

console.log('-- Math.PI --');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log('-- Math.random() --');
console.log(Math.floor(Math.random() * 6 + 1));
// generalize random function to generate random between 2 value

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

console.log(getRand(10,20));

console.log('trunc: ', Math.trunc(23.3));
console.log('trunc: ', Math.trunc(23.9));
console.log('round: ', Math.round(23.3));
console.log('round: ', Math.round(23.9));
console.log('ceil: ', Math.ceil(23.3));
console.log('ceil: ', Math.ceil(23.9));
console.log('floor: ', Math.floor(23.9));
console.log('floor: ', Math.floor(-23.9));

// Rounding decimals : returns String
console.log('toFixed: ',(2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35 
console.log(+(2.345).toFixed(2)); // 2.35:Number
*/


/*
// BigInt

console.log(2 ** 53 - 1); // js can store less or equal to this into Number
console.log(Number.MAX_SAFE_INTEGER);

console.log(5464687468432513186576874646468476874);
console.log(5464687468432513186576874646468476874n); // n notation for BigInt
console.log(BigInt(5464687468432513186576874646468476874));
console.log(BigInt(1234));

// operations
console.log(1000n - 100n);
console.log(1000n * 100n);

const huge = 5464687468432513186576874646468476874n;
const small = 12;
// console.log(small + huge); // -- error --
// console.log(huge - small); // -- error --
// solution
console.log(huge - BigInt(small)); // solution return also the BigInt


console.log(20n > 15); // True
console.log(20n === 20); // False - because of different types(int, BigInt)
console.log(typeof 20n); // bigint
console.log(20n == '20'); // True

// console.log(Math.sqrt(16n)); // -- error --

// Divisions
// console.log(11n / 3); // -- error --
console.log(11n / 3n); // return the BigInt of truncated result
console.log(11 / 3);
*/



/*
// Dates in javascript

// create a date
const now = new Date(); // returns the system/device time,date
console.log(now);

console.log(new Date('Mon Mar 01 2021'));
console.log(new Date('December, 2021'));

console.log(new Date(2010, 10, 10, 10, 10, 10)); // month is 0 based start
console.log(new Date(2010, 10, 31)); // will become Dec, 1 instead of nov, 31

console.log(new Date(0)); // jan, 1, 1970
// 3 * 24 * 60 * 60 * 1000 is a timestamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // jan, 4


// working with dates
const future = new Date(2037, 10, 19, 15, 23)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); 'date.day'
console.log(future.getDay()); '0-7' // week 
console.log(future.getSeconds());
console.log(future.toISOString()); // Date format 

console.log(future.getTime()); // timestamp
console.log(new Date(future.getTime()));
console.log(Date.now()); // current timestamp

future.setFullYear(2020);
future.setMonth(0); 'jan'
future.setDate(31);
*/



// opeartions on Date
const dd = new Date(2037,10,19,15,23);
console.log(+dd);

const calcDaysPassed = (d1, d2) => Math.abs(d2 - d1);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);
console.log(days1 / (1000)); 'difference representation in seconds'
console.log(days1 / (1000 * 60)); 'difference representation in minutes'
console.log(days1 / (1000 * 60 * 60)); 'difference representation in hours'
console.log(days1 / (1000 * 60 * 60 * 24)); 'difference representation in days'

const days2 = calcDaysPassed(new Date(2037, 3, 14, 10, 10), new Date(2037, 3, 24));
console.log(days2 / (1000 * 60 * 60 * 24)); // wierd floating point output