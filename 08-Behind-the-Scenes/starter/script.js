'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear; // function--scope
    console.log(firstName); // np
    return age;
}

const firstName = 'darshan'; // global--scope
calcAge(2000);

// lexical error :) ReferenceError: can't access lexical declaration 'firstName' before initialization....
//// calcAge(2000); // this will generate the error:) 
//// const firstName = 'darshan';
