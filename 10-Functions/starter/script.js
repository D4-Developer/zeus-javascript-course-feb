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

