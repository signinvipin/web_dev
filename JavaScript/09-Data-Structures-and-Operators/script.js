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

/*
// Destructuring Arrays
// use of square brackets []

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
*/

// Destructuring Objects
// use of curly braces
/*
console.log(location); // 'location' is a reserved keyword for url 

const { name, categories, mainMenu } = restaurant;
const { name: Name, categories: Categories } = restaurant;
console.log('name = '+name);
console.log('categories = '+categories);
// +', Location = '+location);
console.log('Name = '+Name);
console.log('Categories = '+Categories);


// Swaping variables
let a = 11;
let b = 12;
console.log('a = '+a+',b = '+b);
const swapObject = {a:12, b:15, c:16};
({a, b} = swapObject); // must put in bracket
console.log('swap-a = '+a+',swap-b = '+b);

// Retrieve values from nested object
const {openingHours:{thu:{open, close}}} = restaurant;
console.log('thu-open = '+open+', thu-close = '+close);

// assign different variable names to values retrieved
const {openingHours:{fri:{open:O, close:C}}} = restaurant;
console.log('fri-open = '+O+', fri-close = '+C);

// Using object to keep multiple arguments and use it in function
// function objectAsArgument(object){            Or,
function objectAsArgument({name, categories, mainMenu}){
	console.log(name);
	// console.log(location);
	console.log(categories);
	console.log(mainMenu);
}
// objectAsArgument(restaurant);
objectAsArgument({categories, name, mainMenu});
*/

// The Spread Operator

// spread array in array and extend it
const arrOne = [4, 5, 6];
const arrTwo = [1,2,3,...arrOne]; // always on rightside
console.log(arrTwo);

// take array from object and expand an array
const objectOne = {
	arrOne:[4, 5, 6],
	arrTwo:[1,2,3],
}
const arrThree = [...objectOne.arrTwo,...objectOne.arrOne];
console.log(arrThree);

// with strings
const str = 'jonas';
console.log(...str);

// use as arguments to function
function addNum (a,b,c){
	console.log(a,b,c);
}
addNum(...arrOne);

// The Rest Operator

// with arrays
const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest); // always on leftside

// with functions
function multiplyOne (...restItems){
	console.log(restItems+', Run loop to perform multiplication');
}
multiplyOne(1,2,3,4,5,6,7,8,9);

// skipping values
const [c,,e,...restOnes] = [1, 2, 3, 4, 5, 6];
console.log('c = '+c+', e = '+e+', restOnes = '+restOnes);

// The SHORT-CIRCUITING

// AND Operator
// short-circuits with first false or last true value
console.log(0 && 48); // 0 is considered as false in JS.
console.log(43 && 'last true '+7);

// OR Operator 
// short-circuits with first true or last false value
const firstTrue = 'firstTrue';
const lastTrue = 'secondTrue';
console.log(firstTrue || lastTrue);

const firstFalse = '';
const lastFalse = 0;
console.log(firstFalse || lastFalse);

// AND Assignment Operator
let headCount = 4;
// headCount = headCount && 'last true - Four';
headCount &&= 'last true - Four';
console.log(headCount);

let hatCount = 0;
// hatCount = hatCount && 4;
hatCount &&= 4;
console.log('first false - '+hatCount);

// OR Assignment Operator
let numbPerson = 0;
// numbPerson = numbPerson || 10;
numbPerson ||= 10;
console.log('first true '+numbPerson);

let numbPerson2 = '';
// numbPerson2 = numbPerson2 || 0;
numbPerson2 ||= 0;
console.log('last false '+numbPerson2);

// Nullish Coalescing Operator

// assumes 0 and '' as true
let shipCount = 0;
// let shipCount = '';
console.log('shipCount is '+shipCount ?? '4 ships');

shipCount = undefined;
console.log(shipCount ?? 'No ships');


// Nullish Assigment Operator
// let boatCount = null;
let boatCount = undefined;
// console.log(typeof(boatCount));
// let boatCount = '';
// boatCount = boatCount ?? '4 Boats';
boatCount ??= '4 Boats';
console.log('boatCount is '+boatCount);

