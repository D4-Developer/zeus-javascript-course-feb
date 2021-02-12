'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear; // function--scope
    // console.log(firstName); // np
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`; // np inherites the parent's scope
        
        console.log(ott); // even this is valid....
        
        if (birthYear >= 1996 && birthYear <= 2006) {
            const ot = `oh you are millenial, ${firstName}`; // const & let has block--scope
            console.log(ot);
            
            var ott = ot; // var has nearest function's -- scope
            function add(a,b) { // has block--scope if 'scrict-mode'
                return a+b;
            }
        }
        // console.log(ot); // -- error --
        console.log(ott); // np....

        console.log(add(2,3)); // --error-- ONLY in STRICT MODE
    }

    // printAge();
    return age;
}

const firstName = 'darshan'; // global--scope
calcAge(2000);

// lexical error :) ReferenceError: can't access lexical declaration 'firstName' before initialization....
//// calcAge(2000); // this will generate the -- error -- 
//// const firstName = 'darshan';

// #hoisting & TDZ (temporal dead zone)
// variables
console.log(a);
// console.log(b); // -- error --
// console.log(c); // -- error --

var a = 'var';
let b = 'let'; 
const c = 'const';

// functions
console.log(aa(2,3));
console.log(aaa(2,3)); // -- error --
console.log(aaaa(2,3));// -- error --

function aa(a, b) {
    return a+b;
}

const fn = function aaa(a, b){
    return a+b;
}

const aaaa = (a, b) => a+b;