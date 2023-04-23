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

// Sort 

	// Ascending
const arr4 = arr3;
arr4.sort((a,b)=>{
	if (a > b) return 1;
	if (b > a) return -1;
});
console.log(arr4);

	// Descending
arr4.sort((a,b)=>{
	if (a > b) return -1;
	if (b > a) return 1;
});
console.log(arr4);

  // Simplified
	// Ascending
arr4.sort((a,b)=> a-b);
console.log(arr4);
	// Descending
arr4.sort((a,b)=> b-a);
console.log(arr4);


// From
// syntax - Array.from(iterable,function)
	// create new array with length and condn
const arrayFrom = Array.from({length:7}, ()=>1);
console.log(arrayFrom);

const arrayFromOne = Array.from(arrayFrom, (_, i) => i + 1);
console.log(arrayFromOne);

	// takes iterable and create array with data and condn
/*
const arrayFromIterable = Array.from(document.querySelector('.class'), ()=>{
	el=> el.replace('$','');
});
console.log(arrayFromIterable);
*/

/*
// Fill
// takes value to be filled as argument or
// takes value ,from pos ,to pos as argument
const fillArray = new Array (7); //create empty array
const fillOne = fillArray.fill('1');
const fillSelect = fillArray.fill(23,2,5); 
console.log(fillArray);

// Flat
// flat() takes no. of level of nest upto which unnesting is required as argument - Default is 1
// flattens one level down by default
const nestArray = [ 1, 2, [ 3, [ 4], 5], 6, 7, [ 9, 0]];
// const nestArr = nestArray.flat();
const nestArr = nestArray.flat(3);
console.log(nestArr);

// Flatmap
// flattens and maps one level deep only ; use flat() for more depth
function flatMapFn (a) {
	return a;
}
const flatmapResponse = nestArray.flatMap(flatMapFn);
console.log(flatmapResponse);

// Some(fn)
// checks if one item qualifies or not
// takes function for condn ; searches values' presence
function someFunction (a) {
	console.log(a, a > 4);
	return a;
}

const someValue = nestArray.some(someFunction);
console.log(someValue);

// Every
// checks if every item qualifies or not
function everyFunction (x){
	return x < 1;
}
const fillOneValue = fillOne.every(everyFunction);
console.log(fillOneValue);
*/

// PreventDefault
// when href='#', makes certain actions to prevent we do it
/*
const preventAction = function (event){
	event.preventDefault();
}
*/

// **Coding Challenges**


