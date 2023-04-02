'use strict';
/*
// We can use a variable, which is created after declaring a function, in that function and the function can be called after this created variable used in function.

// function using variable created later in execution sequence
function calcAge(birthyear){
	const nameFirst = 'Jonas';
	console.log(`${nameFirst} ${lastName} is born in year ${birthyear} and is a teacher.`);
}

const lastName = 'Schmidtmann';
calcAge(1987);

// Scope chain 

// same variable name can be used in different function and block scopes with let and const
function variableName(){
	const firstName = 'Jonas';
	console.log('firstName variable: '+firstName);

	function uName(){
		const firstName = 'Matilda';
		console.log('firstName variable: '+firstName+', inside function block');
	}
	uName();

	if (true){
		const firstName = 'Jessica';
		console.log('firstName variable: '+firstName+', inside if block');
	}

	console.log('firstName variable: '+firstName+', outside if and function block');
}
variableName();

// a variable created in outer scope can be reassigned with a new value and used in an inner scope and can also be accessed outside the inner scope to output new changed value.

let carBrand = 'Maruti';
console.log('carBrand '+carBrand+' , in Global Scope');

function carName(){
	carBrand = 'Tata';
	console.log('carBrand '+carBrand+' , in Function Scope');
}
carName();

if (true) {
	carBrand = 'Mahindra';
	console.log('carBrand '+carBrand+' , in block Scope');
}
console.log('carBrand '+carBrand+' , in Global Scope');

// variable or function created inside a block can not be accessed outside the block scope

function newFunction(){
	const uName = 'Jonas';
	console.log('uName = '+uName+', inside function block');

	function add(a, b){
		console.log('add = '+a+' and '+b+', inside function block');
	}
	add(2,3);
}
newFunction();
console.log('uName = uName is not defined, outside function block');
// says uName not defined

// variable created with var inside block scope can be accessed outside the block

if (true){
	var lastPersonName = 'Dorsey';
	console.log('lastPersonName = '+lastPersonName+', inside block scope');
}

console.log('lastPersonName = '+lastPersonName+', outside block scope');

*/

// Variable Environment - Hoisting & TDZ
/*
// Hoisting makes it possible to use a variable or function declaration even before it is declaration at the later stage

// only function declaration can be hoisted, not function expression, not arrow function

addEvent();

function addEvent(){
	console.log('a+b is an addition');
}

// this doesn't work with let const and var declarations

console.log(substractEventVar); // undefined
console.log(substractEventLet); // uninitialized
console.log(substractEventConst); // uninitialized

var substractEventVar = 'a-b is substraction';
let substractEventLet = 'a-b is substraction';
const substractEventConst = 'a-b is substraction';

// When variables are used before their declaration in a scope it creates a temporal dead zone (TDZ) upto the declaration step of variables

const detailCar = `This is a ${brandCar} car.`;
console.log(detailCar);
const mileageCar = '97Kmph';
const categoryCar = 'Hatchback';
// TDZ up until this point for brandCar variable
const brandCar = 'Tata';

// var declared > undefined and function scoped
// let, const declared > uninitialized
*/

// The 'this' keyword/variable
/*
// Used in method in object > points to parent object
const firstObject = {
	year : 1999,
	weightObject: function(){
		console.log(`Made in year ${this.year}.`);
		console.log(this);
	}
}

firstObject.weightObject();

// Used in simple function call > undefined
function simFunction(){
	console.log(`Made in year ${this.year}.`);
	console.log(this);
}
// simFunction();

// Used in Arrow function > no 'this', points to undefined/window object
const arrFunction = () => {
	console.log(`Made in year ${this.year}.`);
	console.log(this);
}

arrFunction();

// Used in eventListener callback > points to windows object event element
document.addEventListener('click', function(){
	console.log(`Made in year ${this.year}.`);
	console.log(this); // HTMLDocument on click on page
})

// 'this' keyword with Regular and Arrow Function

// Arrow function resulting 'this' to undefined.
const firstArrObject = {
	year : 1999,
	weightObjectArr: () => {
	    console.log(`Made in year ${this.year}.`);
	    console.log(this);
	},
}
firstArrObject.weightObjectArr();

// Arrow function inside a regular function block points to the parent object as arrow function borrows this from parent scope.
const secondArrObject = {
	year : 1999,
	weightObject: function(){
		// console.log(`Made in year ${this.year}.`);
		// console.log(this);
		const weightObjectArr = () => {
		    console.log(`Made in year ${this.year}.`);
		    console.log(this);
		}
		weightObjectArr();
	},
}
secondArrObject.weightObject();

// 'this' keyword in regular function inside a regular function in a parent object points to undefined. So, 'self' is used.

const thirdArrObject = {
	year : 1999,
	weightObject: function(){
	// console.log(`Made in year ${this.year}.`);
	// console.log(this);
	    const self = this;
		const weightObjectArr = function(){
		    console.log(`Made in year ${self.year}.`);
		    console.log(self);
		}
		weightObjectArr();
	},
}

thirdArrObject.weightObject();
*/

// 'arguments' keyword 

// for no. of parameters passed in Regular function
// parameters passed can be any in number and produces an iterable object
// Not for Arrow Functions
function addExp(a,b){
	console.log(arguments);
	return a+b;
}
addExp(1,2,4);

// Primitive and Object reassigning and referencing

// with primitives types, values are copied and assigned, to create new property - New reference points created
let carName = 'Tata';
let carNewName = carName;
carName = 'Maruti';
console.log(carName);
console.log(carNewName);

// with objects, reassigning to variable doesn't replace, it creates reference to original object - Points to old reference
// Reference Types
const fourthArrObject = {
	year : 1999,
	weightObjectArr: function() {
	console.log(`Made in year ${this.year}.`);
	console.log(this);
	},
}
console.log(fourthArrObject);
const fifthArrObject = fourthArrObject;
console.log(fifthArrObject);

// changes made in new object but change reflected in original object - new object name is referenced to old object instead of creating a original object copy to make new object 

fifthArrObject.year = 2001;
console.log(fourthArrObject);

// To Copy Object

const sixthArrObject = Object.assign({},fourthArrObject);
console.log(sixthArrObject);
sixthArrObject.year = 2023;
console.log(sixthArrObject); // did not changed the original
console.log(fourthArrObject);
