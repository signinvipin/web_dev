'use strict';

//** Working with Arrays**

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
function logEach(a) {
   console.log(a);
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


