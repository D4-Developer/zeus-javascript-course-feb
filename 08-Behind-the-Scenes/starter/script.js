'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear; // function--scope
    // console.log(firstName); // np
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`; // np inherites the parent's scope
        console.log(output);
        if (birthYear >= 1996 && birthYear <= 2006) {
            const ot = `oh you are millenial, ${firstName}`;
            console.log(ot);
        }
        console.log(ot); // -- error --
    }


    printAge();
    return age;
}

const firstName = 'darshan'; // global--scope
calcAge(2000);

// lexical error :) ReferenceError: can't access lexical declaration 'firstName' before initialization....
//// calcAge(2000); // this will generate the -- error -- 
//// const firstName = 'darshan';
