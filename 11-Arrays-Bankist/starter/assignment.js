'use-strict'

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const juliaDataCorr = juliaData.splice(1,3);
console.log(juliaDataCorr);

function printFn(personData) {
    personData.forEach(function (ele, i) {
        if (ele < 3) 
            console.log(i, 'puppy');
        else
            console.log(i, 'adult');
    });
}

printFn(juliaDataCorr);
printFn(kateData);
