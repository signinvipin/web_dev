'use strict';

// Data needed for a later exercise
const flights =  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
/*
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

// Recognizes four values/responses only
// for true - 0 , '' 
// for false - null, undefined 

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
*/
/*
// for - of Loop

const starterFood = restaurant.starterMenu;
console.log(starterFood);

// for item only
for (const starter of starterFood){
	console.log(starter);
}

// for arrays having index no and item
for (const starter of starterFood.entries()){
	console.log(starter);
}
*/
/*
// Enhanced Template Literals

// Prevously
const userId = {
	firstName:'Jonas',
	lastName:'Schmedtman',
	introLog: function () {
		console.log(`My name is ${this.firstName} ${this.lastName}.`);
	}
}
userId.introLog();

// After - enables us to compute property name manually or literally

const detailId = {
	name:'Jonas',
	age: 32,
}

const userIdEnhanced = {
	detailId,
	introLog () {
		console.log(`My name is ${detailId.name} and age is`+' '+(detailId.age)+'.');
	},
}

userIdEnhanced.introLog();

// example
const catMenu = restaurant.categories;
const weekDay = ['mon','tue','wed','thu','fri','sat','sun'];

const newCatMenu = {
	[weekDay[0]]: (catMenu[0]),
}

console.log(newCatMenu);
*/
/*
// Optional Chaining '?.'

// normally

// const mondayOpen = restaurant.openingHours.mon.open;
// console.log(mondayOpen);

// const mondayOpen1 = restaurant.openingHours.mon;
// console.log(mondayOpen1);

const mondayOpen2 = restaurant.openingHours;
console.log(mondayOpen2);

// after Optional Chaining ?.

// Syntax
// obj.val?.prop
// obj.val?.[expr]
// obj.func?.(args)

// when value is null or undefined or not present, it returns 'undefined' instead of throwing an error

const mondayOpen3 = restaurant.openingHours?.mon?.open;
console.log(mondayOpen3);

// example

const ageDetails = [{name:'Jonas', age:32}, {name:'Matilda', age:10},];
console.log(ageDetails[0]?.name??'no entries available');
console.log(ageDetails[2]?.name??'no entries available');
*/
/*
// Destructuring Objects for Looping

// using Object.keys(obj or prop)
const keyLoop = Object.keys(restaurant);
console.log(keyLoop);

const keyLoop1 = Object.keys(restaurant.openingHours);
console.log(keyLoop1);

// using Object.values(prop)
const valLoop = Object.values(restaurant);
console.log(valLoop);

const valLoop1 = Object.values(restaurant.mainMenu);
console.log('Main Menu - '+valLoop1);

// using Object.entries(obj or prop)
// It outputs item with index number in array
const entryLoop = Object.entries(restaurant);
console.log(entryLoop);

const entryLoop1 = Object.entries(restaurant.mainMenu);
console.log(entryLoop1);
*/
/*
// Set  
// keep and count only unique copy of item in array
const foodItems = new Set(['biscuit', 'cookies', 'cake', 'pizza', 'pasta','pizza','biscuit', 'cake',]);
console.log(foodItems);

// create new set
const foodOne = new Set();
console.log(foodOne);

// add items to the set
foodOne.add('biscuit');
foodOne.add('cake');
foodOne.add('pizza');
console.log(foodOne);

// read or check presence of an item in a set
const pastaThere = foodOne.has('pasta');
console.log('pastaInFoodOne = '+pastaThere);

const cakeThere = foodOne.has('cake');
console.log('cakeInFoodOne = '+cakeThere);

// delete an item in a set
foodItems.delete('biscuit');

const biscuitIsThere = foodItems.has('biscuit');
console.log('biscuitInFoodItems = '+biscuitIsThere);

// check the size of the set
console.log(foodOne.size);

// clear all elements in set
console.log('foodOne has - '+[...foodOne]);
foodOne.clear();
console.log('foodOne has - '+[...foodOne]);
*/
/*
// Maps
// have key-value pair, key can be string or number or any other type

// create the map
const mapOne = new Map();

// creating map 'array of arrays' way
const mapTwo = new Map([[1, 'Dog'], ['two', 'Cat'], [true, 'God'], [false, 'Deamon'], ['car', 8972]]);
console.log(mapOne);
console.log(mapTwo);

// add/set key-value pair to map
mapOne.set('car', 'Tata');
mapOne.set(2, 'Jonas');
mapOne.set(true, 'GOD');
mapOne.set('', 'Empty');

console.log(mapOne);

// check size 
console.log('mapOne size - '+mapOne.size);

// check presence
console.log('mapOne has 2 - '+mapOne.has(2));
console.log('mapTwo has false - '+mapTwo.has(false));

// read or get value of key from map
console.log('valueOfKey false - '+mapTwo.get(false));
console.log('valueOfKey true - '+mapTwo.get(true));
console.log('valueOfKey 1 - '+mapTwo.get(1));

// delete pair from map
mapOne.delete(2);
mapOne.delete('');
console.log(mapOne);

// clear all pairs in map
mapOne.clear();
console.log(mapOne);
*/

// *** Working with Strings & Operations***
/*
// **how JavaScript works in background with Strings**

// converts string(primitive) to object
const stringJs = new String('jonas');
console.log(stringJs);
console.log(typeof stringJs);

// then converts it back to string and returns(primitive)
const asIs = 'yes';
console.log(asIs);
console.log(typeof asIs);

// **Operations with Strings**

const airLine = 'TATA Air India';
const airPlane = 'Boeing 737 Max';

// using indexOf('arg') to find the location of element
console.log(airPlane.indexOf('a'));
console.log(airPlane.indexOf('3'));

// using lastIndexOf('arg') to find last occurance of element
console.log(airPlane.indexOf('7')); //first occurance
console.log(airPlane.lastIndexOf('7')); //last occurance

// retrieve element with position of element in string
console.log('at position 12 - '+airPlane[12]);
console.log('at position 0 in Bus - '+'Bus'[0]);

// find length of string
console.log('length of airLine - '+airLine.length);
console.log('length of airPlane - '+airPlane.length);

// slice and take out part of string
console.log('airLine - '+airLine+', airPlane - '+airPlane);
// from beginning
console.log('Sliced 4 '+airLine.slice(4)); 
// from end
console.log('Sliced -2 '+airLine.slice(-2));
//from pos-2-pos R-L, starts from 7 to 9 but not 9th element
console.log('airPlane Index 7-9, but not 9th element = '+airPlane.slice(7,9));
console.log('Pos count-slice R-L = '+airPlane.slice(7,10));
// slice begin from R-count and end at count from L
console.log('Pos-cnt R&L slice = '+airPlane.slice(7, -4));
// slice count start and end from L-R
console.log('Pos-cnt L-R, Index -4 to -7 but not -7th element = '+airPlane.slice(-7, -4));

// trim, trimStart, trimEnd
const strLine = '  the flight was late \n ';
console.log(strLine);
// trim and remove whitespaces and newlines from start
console.log(strLine.trimStart());
// trim and clears whitespaces and newlines from end
console.log(strLine.trimStart());
//removed whitespaces and newline character at the either ends
console.log(strLine.trim());

// split - 
const splitLine = 'We are learning data structure and methods.';
console.log(splitLine);
// split from where provided element is present in 
console.log(splitLine.split(' '));

// replace 
const senTence = splitLine;
// replace only the first occurrence R-L
console.log(senTence.replace(' ', '_'));
console.log(senTence.replace('and', '&'));

// replace all occurrences 
console.log(senTence.replaceAll(' ', '_'));


// check if string includes an element
console.log('senTence includes-data = '+senTence.includes('data'));

// check if string startwith element
console.log('startswith- W = '+senTence.startsWith('W'));
console.log('startswith- a = '+senTence.startsWith('a'));

// check if string endsWith
console.log('endsWith- h = '+senTence.endsWith('h'));
console.log('endsWith- . = '+senTence.endsWith('.'));

// string to upper case
console.log('UpperCase - '+senTence.toUpperCase());
// string to lower case
console.log('LowerCase - '+senTence.toLowerCase());

// Padding

// .padStart(totalFinalLength, 'padwithelement')
// .padEnd(totalFinalLength, 'padwithelement')

// pad string at start with element
console.log(airLine.padStart(20, '->'));
// pad string at end with element
console.log(airLine.padEnd(20, '->'));

// Join strings with element/s in-between

// join strings in array with joining element
// arrayOfStrings.join('elementToJoinStrings')
const joinString = [airLine,airPlane];
console.log(joinString);
console.log(joinString.join(' - '));
*/
// can visit mdn for more methods on strings


// ***Coding Challenge***

// Coding Challenege #1

// Data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
	  'Pavard',
	  'Martinez',
	  'Alaba',
	  'Davies',
	  'Kimmich',
	  'Goretzka',
	  'Coman',
	  'Muller',
	  'Gnarby',
	  'Lewandowski',
	],
	[
	  'Burki',
	  'Schulz',
	  'Hummels',
	  'Akanji',
	  'Hakimi',
	  'Weigl',
	  'Witsel',
	  'Hazard',
	  'Brandt',
	  'Sancho',
	  'Gotze',
	],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
	team1: 1.33,
	x: 3.25,
	team2: 6.5,
  },
};

// Solution
/*
// task 1
const [players1,players2] = game.players;
console.log(players1, players2);
// task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
// task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// task 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// task 5
const {odds:{team1, x: draw, team2},} = game;

console.log(team1, draw, team2);
// task 6
function printGoals(...names){
	console.log('Scored - '+names);
	console.log('GameScore - '+game.score);
}
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// task 7
team1 < team2 && console.log('WinnerTeam team1 = '+team1);
*/

// Coding Challenge #2

// task 1
const gameScored = game.scored;
for (const nam of gameScored.entries()){
	console.log(`Goal ${nam[0]+1}: ${nam[1]}`);
}
// task 2
const gameOdds = game.odds;
const itrOdds = Object.values(gameOdds);

let a = 0;
let b = 0;
						
for (const odds of itrOdds){
	a = a + odds;
	b = b + 1;
	b === itrOdds.length && console.log('average - '+(a/b));
}
// task 3
for (let [team,odd] of Object.entries(game.odds)){
 team === 'x' ? team = 'draw' : team = `victory ${game[team]}`;
	console.log(`Odd of ${team}: ${odd}`);
}
// Bonus
const scorers = {};
for(let name of game.scored){
	scorers[name] ? scorers[name] = scorers[name] + 1 : scorers[name] = 1;
}
console.log(scorers);

// Coding Challenge #3

