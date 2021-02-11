'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear; // function--scope
    console.log(firstName); // np
    return age;
}

const firstName = 'darshan'; // global--scope
calcAge(2000);