'use strict';

// function calcAge(birthYear) {
//     const age = 2021 - birthYear; // function--scope
//     // console.log(firstName); // np
    
//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`; // np inherites the parent's scope
        
//         console.log(ott); // even this is valid....
        
//         if (birthYear >= 1996 && birthYear <= 2006) {
//             const ot = `oh you are millenial, ${firstName}`; // const & let has block--scope
//             console.log(ot);
            
//             var ott = ot; // var has nearest function's -- scope
//             function add(a,b) { // has block--scope if 'scrict-mode'
//                 return a+b;
//             }
//         }
//         // console.log(ot); // -- error --
//         console.log(ott); // np....

//         console.log(add(2,3)); // --error-- ONLY in STRICT MODE
//     }

//     // printAge();
//     return age;
// }

// const firstName = 'darshan'; // global--scope
// calcAge(2000);

// lexical error :) ReferenceError: can't access lexical declaration 'firstName' before initialization....
//// calcAge(2000); // this will generate the -- error -- 
//// const firstName = 'darshan';

// #hoisting & TDZ (temporal dead zone)
// variables
// console.log(a);
// console.log(b); // -- error --
// console.log(c); // -- error --

// var a = 'var';
// let b = 'let'; 
// const c = 'const';

// // functions
// console.log(fnDeclaration(2,3));
// console.log(fnExpression(2,3)); // -- error --
// console.log(fnArrow(2,3));// -- error --

// function fnDeclaration(a, b) {
//     return a+b;
// }

// const fnExpression = function (a, b){
//     return a+b;
// }

// const fnArrow = (a, b) => a+b;

// console.log(fnExpression(2,3)); // -- error -- calling undefined(2,3)....
// console.log(fnArrow(2,3));// -- error-msg:) fnExpression/fnArrow is not a function

// var fnExpression = function (a, b){
//     return a+b;
// }

// var fnArrow = (a, b) => a+b;

// window object of current page....

// var x = 1; // var are defined in creation phase
// let y = 1; // const & let are actually created in execution phase
// const z = 1;

// // console.log(window);
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// // # this keyword.... not a STATIC value
// // special variable that is created for every context (every function)
// // this ketyword never point to a Function or a variable

// // console.log(this); // -- window object --

// function cAge(birthYear) {
//     // console.log(this); // -- window object --
//     console.log(2021 - birthYear);
// };  cAge(2000);
// const cAgeEx = function (birthYear) {
//     console.log(this); // -- undefined (strict-mode) -- otherwise window object

// };  cAgeEx(2000);
// const cAgeArr = birthYear => {
//     console.log(this); // arrow fn don't have this scope 
//     // => so it will use it's parent's this keyword.. in this it's window object
// };  cAgeArr(2020);

// const darshan = {
//     birthYear: 2000,
//     calcAge: function() {
//         console.log(2020 - this.birthYear);
//     }
// };
// darshan.calcAge();

// const tirth = {
//     birthYear: 1999
// };
// tirth.calcAge = darshan.calcAge; // method borrowing....
// tirth.calcAge();

// const f = darshan.calcAge;
// f(); // -- error -- because this keyword is undefined & this.birthYear throws the error

///////////////////////////////////////
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//       // console.log(this);
//       console.log(2037 - this.year);
  
//       // Solution 1
//       // const self = this; // self or that
//       // const isMillenial = function () {
//       //   console.log(self);
//       //   console.log(self.year >= 1981 && self.year <= 1996);
//       // };
  
//       // Solution 2
//       const isMillenial = () => {
//         console.log(this);
//         console.log(this.year >= 1981 && this.year <= 1996);
//       };
//       isMillenial();
//     },
  
//     greet: () => {
//       console.log(this);
//       console.log(`Hey ${this.firstName}`);
//     },
//   };
//   jonas.greet();
//   jonas.calcAge();

// // arguments keyword
// const fnExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// fnExpr(2, 5);
// fnExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // {name: 'Jonas', age: 27}
console.log('Me', me); // {name: 'Jonas', age: 27} //// same as friend

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);