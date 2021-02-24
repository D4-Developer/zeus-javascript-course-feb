'use-strict'

/*
// #1
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
*/


/*
// #2
const dog20 = [5,2,4,1,15,8,3];
const dog21 = [16,6,10,5,6,1,4];

function calcAverageHumanAge(dogs) {
    /// map returns the new array, & does not mutate the original one
    humanAges = dogs.map(function (ele) {
        if (ele <= 2)
            return 2 * ele;
        else
            return 16 + ele * 4;
    });
    console.log(humanAges);

    const adultHumanAges = humanAges.filter(function (ele) {
        return ele >= 18;
    });
    console.log(adultHumanAges);

    const averageAges1 = adultHumanAges.reduce(function (pre, curr) {
        return pre + curr;
    }, 0) / adultHumanAges.length; // approach-1
    const averageAges2 = adultHumanAges.reduce(function (pre, curr,i, arr) {
        return pre + curr / arr.length;
    }, 0) ; // // approach-1

    console.log(averageAges1);
    console.log(averageAges2);

}
calcAverageHumanAge(dog20);
calcAverageHumanAge(dog21);
*/


/*
// #3
function calcAverageHumanAge_chaining(dogs) {
    const average = dogs.map( (age) => {
            if (age <= 2)
                return 2 * age;
            else
                return 16 + age * 4;
    })
    .filter ( (age) => age >= 18)
    .reduce ( (acc, age, i, arr) => acc + age /arr.length , 0);

    return average;
}

console.log(calcAverageHumanAge_chaining(dog20));
console.log(calcAverageHumanAge_chaining(dog21));
*/



// #4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1)
dogs.map( (dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
    return dog;
});

// 2)
console.log(dogs);
const dogSarah = dogs.find( (dog) => dog.owners.includes('Sarah') );
console.log(dogSarah);

const r = dogSarah.recommendedFood;
const strSarahDog = dogSarah.curFood > r
    ? 'too much' 
    : dogSarah.curFood < r
    ? 'too little' : 'Okay';

console.log(dogSarah.curFood, dogSarah.recommendedFood);
console.log(strSarahDog);

// 3)
const tooLittleOwners = dogs
    .filter( (dog) => dog.curFood < dog.recommendedFood)
    .map( (dog) => dog.owners).flat();

console.log("tooLittle:",tooLittleOwners);

const tooMuchOwners = dogs
    .filter( (dog) => dog.curFood > dog.recommendedFood)
    .map( (dog) => dog.owners).flat();

console.log("tooMuch",tooMuchOwners);

// 4)
console.log(`${tooLittleOwners.join(' and ')}'s dogs eat too little!`);
console.log(`${tooMuchOwners.join(' and ')}'s dogs eat too much!`);

// 5)
console.log(dogs.some( (dog) => dog.curFood == dog.recommendedFood));

// 6)
const checkEatingOkay = (dog) => 
dog.curFood > dog.recommendedFood * 0.9 
&& dog.curFood < dog.recommendedFood * 1.1 ;
console.log(dogs.some(checkEatingOkay));

// 7)
console.log(dogs.filter(checkEatingOkay));

// 8)
const sortedDogs = Array.from(dogs)
    .sort( (dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log(sortedDogs);