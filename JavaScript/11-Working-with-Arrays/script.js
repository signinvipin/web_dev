'use strict';
/*
// auto-page reload
setTimeout(() => {
	window.location.reload();
}, 5000);
*/
//** Working with Arrays**
/*
// Slice
const arr = [ 'a', 'b', 'c', 'd', 'e'];
console.log(arr);
console.log(arr.slice(2));
console.log(arr.slice(2, -2));
console.log(arr.slice(-4, -1));
console.log(arr.slice(0, 3));
console.log(arr);

// Splice
const arr2 = [ 'A', 'B', 'C', 'D', 'E'];
console.log(arr2); // alters original array
// console.log(arr2.splice(2));
// console.log(arr2.splice(-2));
// console.log(arr2.splice(-4));
// console.log(arr2.splice(0, 3));
// console.log(arr2);


// Reverse
console.log(arr.reverse()); // alters array
console.log(arr2.reverse());

// At
console.log(arr.at(0)); // what is at(position)
console.log(arr.at(1));
console.log(arr.at(2));
console.log(arr.at(3));

// Concat
console.log(arr.concat(arr2));
console.log(arr2.concat(arr));

// Join
console.log(arr.join(' '));
console.log(arr2.join('-'));

// ForEach-Looping
let strA = '';
function logEach(a) {
   strA = strA+a
   console.log(strA);
}

arr.forEach(logEach);
arr2.forEach(logEach);

// Throw-away Variable '_'
function throwAway (x, _, z) {
	console.log(x,z);
}

throwAway('d',3,6);

// **Data Transformation**

// Map
function mapArray (arrayItem, index, array){
	return arrayItem.toUpperCase();
}
const mapAlpbt = arr.map(mapArray);
console.log(mapAlpbt);

// Filter
const arr3 = [1, 2, 3, 4, 5, 6];

function filterArray (arrayItem, index, array) {
   if (arrayItem > 2) return arrayItem;
}

const filterNumbers = arr3.filter(filterArray);
console.log(filterNumbers);

// Reduce
function reduceArray (acc, arrayItem, index, array){
	return acc + arrayItem;
}

const reduceValue = arr3.reduce(reduceArray,0);
console.log(reduceValue);


// find(condn fn)
// returns item in array which qualifies the condn fn.
const arr4 = [1, 2, 3, 4, 5, 6];
console.log(arr4.find((a) => a > 4)); // 5

// findIndex(cdn. fn)
// finds the index of qualifying item
console.log(arr4.findIndex((a) => a > 4)); // 4

// [].map(fn)
// map takes condn fn as arg and applies to every item
// and place them at previous respective positions in
// array
const arrMap = arr4.map((e,i,arr)=>e*2);
console.log(arrMap);

// [].filter(fn)
const arrFilter = arr4.filter((e,i,arr)=>e>3);
console.log('a > 3 = '+arrFilter);

// [].flat(depth no.)
const arrayNest3 = [1, 2, [3, [4, 5], 6], 7, 8];
console.log(arrayNest3);

const arrayFlat = arrayNest3.flat(); // default 1 level
console.log(arrayFlat);

const arrayFlatTwo = arrayNest3.flat(2);
console.log(arrayFlatTwo);

// [].flatMap(fn)
// un-nesting and apply map fn on un-nested array items
console.log(arrayNest3.flatMap((a)=>a)); // level 1 deep

// [].reduce(fn,accval)
// accVal - accumulate values on it using as base
// a - accumulator, e -element, i- index, arr - array
const arrReduce = arr4.reduce((a,e,i,arr)=> a = a+e , 0);
console.log(arrReduce);

// [].sort()
// sorts items in array 
const arraySort = [6, 2, 5, 7, 8, 4, 1, 3, 0];
console.log(arraySort.sort());

const arraySortOne = ['f', 'c', 'd', 'b', 'e', 'a', 'g', 'i', 'h'];
console.log(arraySortOne);
console.log(arraySortOne.sort());

// [].sort(fn)
const arraySortTwo = [-250, 433, -503, 956, 323, -198];
const arrSorted = arraySortTwo.sort();
console.log(arrSorted);

	// ascending
const srtaArr = arraySort.sort((a,b) => {
	if (a>b) return 1;
	if (b>a) return -1;
});
console.log(srtaArr);

	// descending
const sortdArr = arraySort.sort((a,b) => {
	if (a>b) return -1;
	if (b>a) return 1;
});
console.log(sortdArr);

// Simple Way
	// ascending
const srtSimpleA = arraySort.sort((a,b) => a-b);
console.log(srtSimpleA);

	// descending
const srtSimpleD = arraySort.sort((a,b) => b-a);
console.log(srtSimpleD);

// Creating and Filling Arrays*****

// Array.from([],fn)
const arrayFrom = Array.from({length:6}, (e,i) => 1);
console.log(arrayFrom);

const arrayFrom1 = Array.from(new Array(7), (e,i) => 1);
console.log(arrayFrom1);

const arrayFrom2 = Array.from({length:6}, (e,i) => i+1);
console.log(arrayFrom2);

/* *** const arrayFromDOM = Array.from((selectedDOMElement-iterable), fn. ops.);


// some(fn)
// returns boolean if any item matches the condn
const arraySome = arraySort.some((a)=>a===5);
console.log('a === 5 = '+arraySome);

// every(fn)
// returns boolean if all item pass the condn
const arrayEvery = arraySort.every((a)=>a<9);
console.log('a < 9 = '+arrayEvery);

// PreventDefault
// when href='#', page auto-acts by default 
/*
const precentAction = function (event){
	event.preventDefault();
}
// use fn with event handler


// fill(item)
// takes item to be filled to  empty array as arg 
const arrayFill = new Array(6);
arrayFill.map((a)=>5); // can't fill
console.log(arrayFill);

const arrayFilled = arrayFill.fill(5);
console.log(arrayFilled);

// 1 - item to be filled, 2 - start Pos, 4 - end Pos.
const arrayFilled1 = arrayFill.fill(1,2,4);
console.log(arrayFilled1);

// doesn't take function conditions
function arrFill (a,i){
	a = 0;
	return a+i;
}
// no fn input
// console.log(arrayFill.fill(arrFill));
*/

// **Working with Numbers**
/*
// all numbers in JS are internally recognized as floats 
// as is the case in 64base2 - binary number system
console.log(23 === 23.0); // true

// with base2 it is improper when stating fraction values
// base2 0 to 1
// base10 0 to 9, is more good to work with
console.log(0.1+0.2); // 0.30000000000000004
console.log(0.1+0.2 === 0.3); // false

// Conversion to Number type
console.log(typeof(Number('36')));
console.log(+'78');

// ___Number___

// parseInt
// parse and return only integer from beginning
console.log(Number.parseInt('20rem')); //20
console.log(Number.parseInt('69px')); // 69
// can also take secondary argument - numbersystem
// binary-2, octal-8, decimal-10, hexadecimal-16
console.log(Number.parseInt('76px',16)); // 118
console.log(Number.parseInt('76px',10)); // 76
console.log(Number.parseInt('76px',8)); // 62



// parseFloat
// parse and return only float from beginning
console.log(Number.parseFloat('23.4px')); // 23.4
console.log(Number.parseFloat('46.8rem')); // 46.8

// isNaN check??
console.log(Number.isNaN(+'20px')); // false
console.log(Number.isNaN('28')); // false
console.log(Number.isNaN(34)); // false

// isFinite
console.log(24/0); // Infinity
console.log(Number.isFinite(24/0)); // false

// isInteger
console.log(Number.isInteger(24)); // true
console.log(Number.isInteger(2.3)); // false

// ___Math___

// Square Root
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8
// otherway
console.log(25**(1/2)); // 5

// Max Value
console.log(Math.max(1,5,2,6,8,3,9)); // 9

// Min Value
console.log(Math.min(1,5,3,7,4,5,2)); // 1

// Generate Random Value between 0-1
const rand = Math.random();
console.log(rand);

// Truncate Value
console.log(Math.trunc(rand));

// Round
// round-off value to next/previous stable non-decimal
// if above '.50' then next value
console.log(Math.round(23.56)); // 24
// if below '.50' then previous value
console.log(Math.round(23.17)); // 23

// Ceil
// round-off the Value to next upper stable non-decimal
// even if its 0.01 more
console.log(Math.ceil(29.01)); // 30

// Floor
// round-off the value to previous non-decimal stable
// even if it is 0.99 closer to next
console.log(Math.floor(43.99)); // 43

// Absolute value
console.log(Math.abs(-23)); // 23
console.log(Math.abs(23.0));  // 23

// Fixing Decimal Places to Float
console.log((12.345464778).toFixed(2)); // 12.35
console.log((12.345464778).toFixed()); // 12
console.log((12.345464778).toFixed(4)); // 12.3455

// Number Seperator
// console.log(1,00,000); // Not allowed
// for representation use '_' underscore
console.log(1_00_000); // 100000

// Remainder Operator (Modulus Operator)
// checks the remainder of division with condition,
// checks and returns true if remainder qualifies
console.log(24%2 === 0); // true

// BigInt
// primitive types
// 64-bit to store any number
// 0..<store number>...53...<store sign and decimal>...63

// BigInt JS can handle 
// 2 - base2, -1: starts from 0, 53 - space for number
console.log(2**53-1); // 9007199254740991

// Max BigInt
// console.log(MAX_BIGINT);

// Safe BigInt limit
console.log('Safe: +(2**53-1) to -(2**53-1)')

// Usage of BigInt

// Way One - use suffix 'n'
const intOne = 1536666512616717884844999181899n;
console.log(typeof intOne, intOne);

// Way Two - use bigInt()
const intTwo = BigInt(17263748502857398922881187465467352);
console.log(typeof intTwo, intTwo);

// Logical & Math Operations
// -, +, /, "*" possible on loose equality with auto type-coercion
// happens b/w same type only

console.log(10n + 20n); // 30n
console.log(30n - 10n); // 20n
console.log(20n*2n); // 40n
console.log(10n / 2n); // 5n
// console.log(10n - 10); // TypeError
console.log(20n == 20); // true - loose equality
console.log(20n === 20); // false - strict equality

console.log(10n+'10n'); // string 1010n
console.log(10n/3n); // 3n --no decimal roundoff
*/

// **Working with Date and Time**
/*
// Generate new date for creation moment
const dateNow = new Date();
console.log(dateNow);

// Parse Time from string
const dateParse = new Date('Wednesday, 26 April, 2023');
console.log(dateParse);

const dateParseOne = new Date('12/10/2023');
console.log(dateParseOne);

console.log(Date(dateNow)); // Wed Apr 26 2023 12:51:34 GMT+0530 (India Standard Time)


// TimeStamp
// TimeStamp starts from unix creation Jan 01, 1970.
// Create TimeStamp
// Way #1
const dateTimeStamp = dateNow.getTime(); 
console.log(dateTimeStamp);  // 1682496447172
// Way #2
const dateTimeStampOne = Number(dateNow);
console.log(dateTimeStampOne); // 1682496447172
// Way #3
console.log(Date.now()); // 1682496447188

// Retrieve Elements 
// Date
console.log(dateNow.getDate()); // 26 or at time of run
// Minutes
console.log(dateNow.getMinutes()); // 42
// Hour
console.log(dateNow.getHours()); // 12
// Seconds
console.log(dateNow.getSeconds()); // 51
// Day
console.log(dateNow.getDay()); // 3
// Month
console.log(dateNow.getMonth()); // 3, starts from 0
// Year
console.log(dateNow.getYear()); // 123
// Full Year
console.log(dateNow.getFullYear()); // 2023
// Convert to ISO Format
console.log(dateNow.toISOString()); // 2023-04-26T07:18:21.081Z

// Internationalization of dates 
// Internationalization API - DateTimeFormat

// new Intl.DateTimeFormat().format()

const optionsObj = {
	hour:'numeric',
	minute:'numeric',
	month:'long',
	year:'numeric',
	weekday:'long',
}

const intlDate = new Intl.DateTimeFormat('en-US', optionsObj).format(dateNow);
console.log(intlDate); // April 2023 Wednesday at 12:57 PM

// Internationalization of Number
// Internationalization API - NumberFormat

// new Intl.NumberFormat().format()

const optionsObjCur = {
	style:'currency',
	currency:'USD',
} 

const optionsObjSp = {
	style:'unit',
	unit: 'kilometer-per-hour',
}

// Access local language
const localLang = navigator.language;
console.log(localLang); // en-US

const intlNum = new Intl.NumberFormat('en-US',optionsObjCur).format(2535.78);
console.log(intlNum); // $2,535.78

const intlNumSpd = new Intl.NumberFormat(localLang, optionsObjSp).format(25.7);
console.log(intlNumSpd); // 25.7 km/h

// ***Intl - style - Find more?


// setTimeOut and setInterval
// Method setTimeout - happens one time only
const countDown = setTimeout(()=> console.log('yes'),4000);
// clear TimeOut timer
clearTimeout(countDown);

// Method setInterval - happens after each provided time gap
const interval = setInterval(()=>console.log('No'),1000);
// clear Interval timer
setTimeout(()=>clearInterval(interval),4000);
*/

// ****Coding Challenges****

// Challenge #1
/*
const dogsJuliaD1 = [3, 5, 2, 12, 7];
const dogsKateD1 = [4, 1, 15, 8, 3];

const dogsJuliaD2 = [9, 16, 6, 8, 3];
const dogsKateD2 = [10, 5, 6, 1, 4];

const checkDogs = function (arrayOne, arrayTwo) {
 // task #1
	const juliaArrayCopy = arrayOne;
	const newJuliaArray = juliaArrayCopy.slice(1,-2);
 // task #2
	const arrayDogAge = newJuliaArray.concat(arrayTwo);
 // task #3
	let a = 0;
	for (let dog of arrayDogAge){
		a++;
		let dogAdultPuppy = dog >= 3 ? `Dog number ${a} is an adult, and is ${dog} years old.` : `Dog number ${a} is still a puppy.`;
		console.log(dogAdultPuppy);
		}
}
 // task #4
checkDogs(dogsJuliaD1, dogsKateD1);
checkDogs(dogsJuliaD2, dogsKateD2);
*/

// Challenge #2
/*
const ageD1 = [5, 2, 4, 1, 15, 8, 3];
const ageD2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (arr) {
	// task #1
	const humanAge = arr.map((dogAge,i,arr) => dogAge <= 2 ? 2*dogAge : 16 + dogAge*4);	
	console.log(humanAge);
	
	//  task #2
	const adultAge = humanAge.filter((e,i,arr) => {
		if (e >= 18) return e; });
	console.log(adultAge);
	
	// task #3
	// way#1
	const addAge = adultAge.reduce((acc,e) =>	acc + e, 0);
	const avgAge = addAge/adultAge.length;

	// way#2
	// if [2,3],so divide each one by array length individually
	// then add like - (2/2 + 3/2)
		
	console.log(avgAge.toFixed(2));

	return avgAge.toFixed(2);
	
}
    // task #4
calcAverageHumanAge(ageD1);
calcAverageHumanAge(ageD2);
*/

// Challenge #3
/*
const ageDat1 = [5, 2, 4, 1, 15, 8, 3];
const ageDat2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (arr) => 
arr.map((dogAge) => dogAge <= 2 ? 2*dogAge : 16 + dogAge*4)
.filter((e) => e >= 18)
.reduce((acc,e,i,arr) => acc + (e/arr.length),0);

console.log(calcAverageHumanAge(ageDat1).toFixed(2));
console.log(calcAverageHumanAge(ageDat2).toFixed(2));
*/

// Challenge #4
/*
const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];

// task 1
dogs.forEach((obj,i)=>obj.recFood =
Math.trunc(obj.weight**0.75*28));

console.log(dogs);

// task 2
const arraySarah = dogs.filter((e,i,arr)=>(e.owners).includes('Sarah'));
const [{weight,curFood,recFood}] = arraySarah;
// console.log(weight,curFood,recFood);

function foodEating (recFood,curFood) {
	let okFood = recFood;
	const recFoodAbvLmt = okFood += okFood*0.10;
	const recFoodLwLmt = okFood -= okFood*0.10;
	// console.log(recFoodAbvLmt, recFoodLwLmt);

	if (curFood < recFoodLwLmt) {
		console.log('Eating is too little.');
	} else if (curFood > recFoodAbvLmt) {
		console.log('Eating is too much.');
	} else {
		console.log('Eating is Okay.');
	}
};
foodEating(recFood, curFood);


// task 3
const ownersEatTooMuch = dogs.filter((e) =>	e.curFood > e.recFood)
.map((e)=>e.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter((e)=> e.curFood < e.recFood)
.map((e)=>e.owners).flat();
console.log(ownersEatTooLittle);

// task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// task 5
const recFoodDog = dogs.some((e)=> e.curFood === e.recFood);
console.log(recFoodDog);

// task 6
const curFoodCheck = dogs.some((e)=> (e.curFood < (e.recFood + e.recFood*0.10)) && (e.curFood > (e.recFood - e.recFood*0.10)));
console.log(curFoodCheck);

// task 7
const okayFoodDogs = dogs.filter((e)=>
(e.curFood < (e.recFood + e.recFood*0.10)) && 
(e.curFood > (e.recFood - e.recFood*0.10)));

console.log(okayFoodDogs);

// task 8

const dogsCopy = Array.from(dogs, (e)=>e); // create copy
// console.log(dogsCopy);

const sortDogsAs = dogsCopy.sort((a,b)=>a.recFood - b.recFood);
console.log(sortDogsAs); // sort mutates original 'dogsCopy'

*/
