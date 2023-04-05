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


// Destructuring Arrays

// taking out values in seperate variables and logging them 
const [x, y, z] = [1, 4, 7];
console.log(x, y, z);

// taking values in one variable and then logging values using bracket notation and range
const arrOne = [3, 6, 9];
console.log(arrOne[0], arrOne[1], arrOne[2]);

// taking out values by selection and skipping values
const [ s,, u] = [4, 7, 9];
console.log(s, u);

// taking out values and interchange them in variables
let [primary, secondary] = [56, 75];
console.log('primary = '+primary+', secondary = '+secondary);
[primary, secondary] = [secondary, primary];
console.log('primary = '+primary+', secondary = '+secondary);

// taking out values in seperate variables from nested array and logging them
const [a, b, [c, d]] = [3, 5, [7, 9]];
console.log('Nested a = '+a+', b = '+b+', c = '+c+', d = '+d);

// taking out values by selection and skipping from nested array
const [e,, [,h]] = [3, 5, [7, 9]];
console.log('Nested and skipped selection = '+e+', '+h);

// Providing/Setting-up default values while destructuring array
const [i=1, j=1, k=1] = [2,,7];
console.log('Using defaults i = '+i+', j = '+j+', k = '+k);

// Destructuring arrays in objects

// taking values to variables from array in object 
const [l, m, n] = restaurant.starterMenu;
console.log('From object = '+l+', '+m+', '+n);

// Selecting and taking values by skipping from array inside object
let [o,,q] = restaurant.starterMenu;
console.log('From object (skipped) o = '+o+', q = '+q);

// Switching values from array inside objects
[o, q] = [q, o];
console.log('Switched Variables o = '+o+', q = '+q);
