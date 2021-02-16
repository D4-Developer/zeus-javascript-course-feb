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

  // // Destructuring object keys in function arguments....
  orderDelivery: function({starterIndex, mainIndex, time = '10:00', address}) {
    console.log(`order received: ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },

  // // Destructuring Array args in function using spread operator;
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicios pasta with,
     ${ing1} ${ing2} ${ing3}`);
  },

  // // rest - operator in function arguments;
  orderPizza: function(coldDrink, ...pizzaIngredients) {
    console.log('your coldDrink = ' + coldDrink);
    console.log('pizza ingredients = '+ pizzaIngredients);
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
// const [x,y,z] = arr; // first destructure & then assign on left side variable based on index;
// console.log(x, y, z);

// // #2
// const [first, second] = restaurant.categories;
// console.log(first, second);

// // #3 leave a hole in destructing operator;
// let [f, ,third] = restaurant.categories;
// console.log(f, third);

// // #4 switching/swaping variables;
// // traditional way using a new temp variable;
// const temp = f;
// f = third;
// third = temp;
// console.log(f, third);

// // swap using destructing operator;
// [f, third] = [third, f];
// console.log(f, third);

// Receive 2 value(array) from a function && destuctured it;
// const [starter, main] = restaurant.order(3, 2);
// console.log(starter, main);

// // Nested Destructuring;
// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
// const [ii, ,[jj, kk]] = nested;
// console.log(ii, jj, kk); 

// // set Default value in Destructuring;
// let [p = 0, q = 1, r = 2, s] = [4, 5, 6];
// console.log(p, q, r, s);
// [p = 0, q = 1, r = 2, s] = [4, ,5, 6];
// console.log(p, q, r, s);

//////////////////////////// Object Destucturing :: operator = {}
// // need to specify which actual keys of restaurant object is needed & it also stores in that variables;
// const { name, openingHours, starterMenu } = restaurant; 
// console.log(name, openingHours, starterMenu);

// // explicitly change the variable name of retriving object keys;
// const { 
//   name: newName,
//   openingHours: open,
//   starterMenu: starter
// } = restaurant;
// console.log(newName, open, starter);

// // set Default value in object - destucturing;
// const {city = '-1', state ,starterMenu: menu = []} = restaurant;
// console.log(city);
// console.log(state);
// console.log(menu);

// // Muteting variable;
// let a = 111;
// let b = 999;
// const obj = { a: 23, b:7, c: 14 };
// // {a, b} = obj; // -- error -- can't assign value to a code block;
// ({a,b } = obj);
// console.log(a,b);

// // Nested objects destructuring && explicitly set key(variable) name;
// const { fri: {open : ope, close: cls} } = restaurant.openingHours;
// console.log(ope, cls);


// // Destructing object keys in function arguments....
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'city, state....',
//   mainIndex: 2,
//   starterIndex: 3
// });

// // set Default value in function arguments in object kays destructuring;
// restaurant.orderDelivery({
//   address: 'city, state....',
//   mainIndex: 2,
//   starterIndex: 3
// });



// // :::::::::::::::::::::::::: array spread operator ...
// used on right hand side of = sign;
// const arr = [3, 4, 5];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const goodArr = [1, 2, ...arr]; // better approach
// console.log(goodArr);
// console.log([1, 2, arr]);

// console.log(3, 4, 5);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // merge array
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);


//// :::::::::::: Iterables : array, string, maps, sets
//// :::::::::::: not on Object;

// const firstName = 'Rathod';
// const lastName = 'Darshan';
// const fullName = [...firstName, ...lastName];
// console.log(fullName);
// console.log(`${...firstName}`); // -- error --


// // Array spread operator in function arguments;
// const ingredients = [prompt("Lets's make Pasta! Ingredient1"),prompt("Lets's make Pasta! Ingredient2"),prompt("Lets's make Pasta! Ingredient3")];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


// :::::objects with restriction in spreas operator

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'founder-name'
// };
// console.log(newRestaurant);

// // copy object
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'New-name';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// // ::::::::::::::: rest-pattern;
// // reverse of spread oprator;
// // left-hand side of = oprator;
// // rest must be in last position of Destructuring;
// // only 1 rest is allowed

// :: 1) Destructuring

// // :::: array - rest oprator
// // SPREAD, becasue of RIGHT side of =
// const arrr = [1,2, ...[3,4,5]];

// // REST, because of LEFT side of =
// const [ele1, ele2, ...ele3Arr] = arrr;
// console.log(ele1);
// console.log(ele2);
// console.log(ele3Arr);

// const [pizza, ,risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ];
// console.log(pizza, risotto);
// console.log(otherFood);

// //Objects - rest operator

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(sat);
// console.log(weekDays);

// // :: 2) Functions

// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; ++i)
//     sum += numbers[i];
  
//   console.log(sum);
// }

// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7);

// const xArr = [10, 20, 30, 40];
// add(...xArr);

// // 3) other edge cases;

// restaurant.orderPizza('coke', 'chesse', 'onion', 'Pepsicum');

// // :::: logical operator
// // use ANY data type, return ANY(truthy value) data type,
// // short-circuiting....
// // returns first truthy value or last value....
// // used to set default vaule ::::
// console.log('------ OR ------');
// console.log(4 || 'darshan');
// console.log(0 || 'zero');
// console.log('' || 'darshan');
// console.log(true || 'any');
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'darshan' || 23 || null);

// let guests1 = restaurant.numGuest || 10;
// console.log(guests1);
// restaurant.numGuest = 0; // now guests1 should be 0....but it's not
// guests1 = restaurant.numGuest || 10;
// console.log(guests1);

// console.log();
// console.log('------ AND ------');
// // opposite of OR 
// // return the first falsy value or last value ::::
// // used to execute the code if first value/fn/ exists ::::
// console.log(0 && 'darshan');
// console.log(5 && 'darshan');
// console.log('hello' && 23 && 0);

// // ex:
// if (restaurant.orderPizza) {
//   // if above function exists then this block will be executed;
//   restaurant.orderPizza('d1', 'e1', 'e2', 'e3');
// }
// // same as above if statement block;
// restaurant.orderPizza && restaurant.orderPizza('d1', 'e1', 'e2', 'e3');

// // :::::: nullish Coalescing operator ??
// // return the first value if first is not null/undefined , otherwise return second
// let guests1 = restaurant.numGuest ?? 10;
// console.log(guests1);
// restaurant.numGuest = 0; // now guests1 should be 0....but it's not
// guests1 = restaurant.numGuest ?? 10;
// console.log(guests1);

// const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of Menu) console.log(item);

// console.log(Menu.entries());
// console.log([...Menu.entries()]); // returns separate array for all entries

// // too confusing for loop
// for (const item of Menu.entries())
//   console.log(`${item[0] + 1}: ${item[1]}`);

// console.log();

// // Destructuring of entries elements one by one
// for (const [i, el] of Menu.entries())
//   console.log(`${i + 1}: ${el}`);



////// :::::::::::
// // Optional chaining.... ?.

// // hence mon is undefinded, so error:) 
// // console.log(restaurant.openingHours.mon.open); // -- error -- 
// if (restaurant.openingHours.mon) // openingHours or open may also be undefined....
//   console.log(restaurant.openingHours.mon.open);
// else
//   console.log('openingHours.mon is undefined');

// // same as above with optional chaining
// // .open will be only accessed if all left hand side propertied exists 
// console.log(restaurant.openingHours.mon?.open);
// // restuarant.openingHours.mon must be not undefined, null to be accessed open;
// console.log(restaurant.openingHours?.mon?.open);

// // very good ex of Nullish & Opetional Chaining operator ?? && ?.
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On, ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.reserve?.(0,1) ?? 'Method does not exist');

// // Arrays
// const users = [{
//   name: 'darshan', email: 'username@example.com'}
// ];
// console.log(users[0]?.email); // undefined
// console.log(users[1]?.email ?? 'users[1] does not exist'); // a handy message in log


///// ::::: Object.keys(); also known as properties;

// const properties = Object.keys(restaurant.openingHours);

// let openStr =  `We are open on ${properties.length} days: `;
// for (const day of properties) 
//   openStr += day + ', ';

// console.log(openStr);


///// ::::: Object.values();
const values = Object.values(restaurant.openingHours);
console.log(values);
