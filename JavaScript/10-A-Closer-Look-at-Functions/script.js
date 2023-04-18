'use strict';

// A Closer Look At Function

// Passing Default parameters to function
function groupDetail (groupName = 'Nogroup', numbPer=4) {
  console.log(`The ${groupName} group has ${numbPer} number of persons.`);
}
groupDetail('ada',43);
groupDetail('ada',); // using default for numbPer

// Calculating and passing Parameters Dynamically
function fruitPriceOne (fruitName, weight, price = 19*1) {
   console.log(`The price of ${fruitName} is ${price} Rupees per ${weight}kg in market.`);
}
fruitPriceOne('orange',1.5,15);
fruitPriceOne('orange by default',1,undefined);
fruitPriceOne('grapes',1.5,12);
fruitPriceOne('grapes by default',1,undefined);

// Passing and Using a Parameter to Calculate another Parameter Dynamically (i.e, weight)
function fruitPriceTwo (fruitName, weight=1, price = 19*weight) {
   console.log(`The price of ${fruitName} is ${price} Rupees per ${weight}kg in market.`);
}
fruitPriceTwo('banana',2); 
fruitPriceTwo('apple',14);

// Skipping parameter values to function
fruitPriceTwo('pomegranate',undefined) // weight - blank/undefined

// Passing Arguments by value and by reference
// by value
let firstArg = 'argument1';
let secondArg = firstArg; // value copied and assigned
function byValue () {
   firstArg = 'argument2'; 
   console.log('firstArg - '+firstArg); // value changed
   console.log('secondArg - '+secondArg); // copy remained
}
// by reference
const refObject = {
	name: 'Jack',
	age:27,
}
const refObjectTwo = refObject;

function nfunct (ObjTwo){
   refObjectTwo.age = refObjectTwo.age + 5;	// age change
}
nfunct(refObjectTwo);
console.log('refObject\'s age - '+refObject.age);

// First-Class Functions and Higher-order Functions

// Higher-order functions can take functions as argument and return function as well.
// First-Class Functions
