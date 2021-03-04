'use strict';

const Person = function (firstName, birthYear) {
    console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this for class methods
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    }
}

// use new keyword to make a instance of class
const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function authmatically return {}

const darshan = new Person('Darshan', 2000);
const tirth = new Person('Tirth', 1999);
console.log(darshan, tirth);

const a = 'ABC';
// return True / False
console.log(a instanceof Person); // False