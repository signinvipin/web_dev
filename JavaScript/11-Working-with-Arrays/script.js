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
*/

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
const arrMap = arr4.map((e,i,arr)=>e * 2);
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
*/

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
*/

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


// **Coding Challenges**


