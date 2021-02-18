'use strict';
/*
const bookings = [];

function createBooking (flightNum, numPassengers = 1, price = 299 * numPassengers) { // ES6
    
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 999;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', undefined, 399);
createBooking('LH123', 4, 1200);

*/
// object vs. primitives data type in function args ,
// changing value of that may be lead to a completely different situation
/*

const flight = 'LH123';
const darshan = {
    name: 'darshan rathod',
    passport: 512141453
}

function checkIn (flightN, passeng) {
    flightN = 'LH999';
    passeng.name = 'Mr.' + passeng.name; // passeng is referece to darshan
    // so the name will be changed in darshan object

    if (passeng.passport === 512141453)
    alert('Checked in');
    else alert('wrong passport');
}

checkIn(flight, darshan); // checkIn
console.log(flight);
console.log(darshan);

// Is the same as dialog...
const flightNum = flight;
const passeng = darshan;

function newPassport(person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(darshan);
checkIn(flight, darshan); // wrong passport as 
// object.passport is changed inside newPassport function

*/

/*
// first-class functions
function oneWord(str) {
    // return the string without any spaces
    return str.replace(/ /g, '').toLowerCase();
}

function upperFirstWord(str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

// higher-order function
function transformer (str, fn) {
    console.log(`Orifginal string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is fun!', upperFirstWord);
transformer('Flutter is love!!!', oneWord);


// callback functions
// allows to do abstraction

function high5() {
    console.log('hiiii');
}

document.body.addEventListener('click', high5);

*/


/*
// 
function greet(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

// arrow implementation of above function declaration
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`); 

const greeterHey = greet('hey');

greeterHey('darshan');
greeterHey('tirth');

greet('hello')('mayur'); /// imp
greetArr('hey')('mayur');
*/


const ll = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}
    book(fNum, pName) {
        console.log(`${pName} booked a seat on ${this.airline} flight ${this.iataCode}${fNum}`);
        this.bookings.push({flight: `${this.iataCode}${fNum}`, pName});
    }
}

ll.book(240, 'Darshan Rathod');
ll.book(241, 'Tirthraj Zala');


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],   
}

const book = ll.book;

// Does not work
// book(123, 'darshan')// --error--

/*
// call method (all required function parameters separated by comma, )
// call method to explicitly tell value of this keyword
// call(objectThatWillPointTothis, parameter1, ...);
book.call(eurowings, 123, 'darshan');
console.log(eurowings);

book.call(ll, 144, 'Mayur');
console.log(ll);


// Apply method (all required function parameters in single array)
// apply(objectThatWillPointTothis, [parameter1, parameter2, ...]); 
const flightData = [154, 'mayur'];
book.apply(eurowings, [154, 'mayur']); // (euroWings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData); // (euroWings, 154, 'mayur')

*/

const swiss = {
    name: 'swiss',
    iataCode: 'EW',
    bookings: [],
}

// Bind method

const bookEw = book.bind(eurowings); // book method's this is bind to euroWings object
bookEw(23, 'new passanger'); 
// so when we call bookEw() it will refere this to euroWings everytime


const bookLH = book.bind(ll);
const bookSs = book.bind(swiss);

// define bind on object as well specific arguments already
const bookEw23 = book.bind(eurowings, 23);
bookEw23('name1 with 23');// seat alredy set as 23
bookEw23('name2 with 23');// so we need to only specify remaining args
bookEw23('name3 with 23');
// so bind syntax : bind(thisObject, param1, param2,..);

// with eventListenners
ll.planes = 300;
ll.buyPlane = function() {
    console.log(this); // will refere to button class .btn tag

    this.planes++;
    console.log(this.planes);
}

ll.buyPlane(); // okay
// document.querySelector('.buy')
    // .addEventListener('click', ll.buyPlane); //failed

document.querySelector('.buy')
    .addEventListener('click', ll.buyPlane.bind(ll)); // success


// partial application
// 1)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 100));

const addTaxIndia = addTax.bind(null ,5); // rate = 5 fix 
console.log(addTaxIndia(100)); // so we will only pass value argument

// 2) same as above functionality but a different without bind
const addT = function(rate) {
    return function(val) {
        return val + val * rate;
    }
}

const addTIndia = addT(.5);
console.log(addTIndia(100));
