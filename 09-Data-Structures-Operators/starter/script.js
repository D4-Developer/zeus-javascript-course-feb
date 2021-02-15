'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///////////////////////// Array - Destructuring .... operator = []
// // #1
// const arr = [1,2,3,4];
// const [x,y,z] = arr; // first destructure & then assign on left side variable based on index....
// console.log(x, y, z);

// // #2
// const [first, second] = restaurant.categories;
// console.log(first, second);

// // #3 leave a hole in destructing operator....
// let [f, ,third] = restaurant.categories;
// console.log(f, third);

// // #4 switching/swaping variables;
// // traditional way using a new temp variable....
// const temp = f;
// f = third;
// third = temp;
// console.log(f, third);

// // swap using destructing operator;
// [f, third] = [third, f];
// console.log(f, third);

// Receive 2 value(array) from a function && destuctured it....
const [starter, main] = restaurant.order(3, 2);
console.log(starter, main);