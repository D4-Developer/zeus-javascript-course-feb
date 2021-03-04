'use strict';

const Person = function (firstName, birthYear) {
    console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this for class methods
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
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



// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
}

jonas.calcAge();
darshan.calcAge();
tirth.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // True

console.log(Person.prototype.isPrototypeOf(jonas)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False


// adding new property to .prototype
Person.prototype.newProperty = 'new on prototype';
console.log(jonas.newProperty, darshan.newProperty); // new on prototype;

console.log(jonas.hasOwnProperty('firstName')); // True
console.log(jonas.hasOwnProperty('newProperty')); // False




console.log(jonas.__proto__); // Person.prototype 
// Object.prototype (top of the protoype chain)
console.log(jonas.__proto__.__proto__);// Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor);

const arr = [1,2,2,5,10,6,5,6]; // === new Array();
console.log(arr.__proto__ === Array.prototype); // True

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__); // null


// THIS IS INSANE
// From now all array can use this .unique method 
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x+1);