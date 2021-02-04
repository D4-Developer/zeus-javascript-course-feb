'use strict'; // strict mode for this whole js file

// const private = '123' // throw an error because of strict mode


// // function declaration....
// logger('water') // no error
// function logger(item) {
//     console.log(`i am drinking ${item}`) // return console.log = undefined...
//     return `now what next after ${arguments[0]}?....`
// }
// console.log(logger('milk')) // no error

// function expression....
// const age1 = calcAge(2000); // will not work ... error
// const calcAge = function (birthYear) {
//     return 2020 - birthYear
// }
// const age2 = calcAge(2000); // work
// console.log(age2);

// // single parameter Arrow function
// const calcAge1 = calculateY => 2020 - calculateY
// console.log(calcAge1(2000))

// // multi-parameter Arrow function
// const calcAge2 = (calculateY, current) => {
//     // other calculations...
//     return current - calculateY 
// }
// console.log(calcAge1(2000))

// //objects....
// const darshan = {
//     firstName: 'darshan',
//     lastName: 'rathod',
//     birthYear: 1991,
//     job: 'Software Engineer',
//     friends: ['Tirth', 'Mayur', 'mohit', 'chintu', 'divyesh'],
//     hasDrivingLicense: false,
//     calcAge: function () {
//         // return 2020 - birthYear;
//         this.age = 2020 - this.birthYear;
//         return this.age; // can be possible
//     },// function expression
//     calcAge1: (birthYear) => { return 2020 - birthYear } // arrow function
//     // arrow function don't have this. member access
// }

// //dot notation (only member access)
// console.log(darshan.calcAge());
// // bracket notation (calculated member access)
// console.log(darshan['calcAge' + 1](darshan.birthYear));
// console.table(darshan);
// console.warn("warning formet text");
// console.error("error formet text");

const calcTempAmplitude = function(t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; ++i) {
        const currTemp = temps[i];
        if (typeof currTemp != 'number') continue;

        if (currTemp > max) max = currTemp;
        if (currTemp < min) min = currTemp;
    }
    console.log(max, min);
    return max - min;
}

const ampitude = calcTempAmplitude([3,5,1], [9,4,5]);
console.log(ampitude);