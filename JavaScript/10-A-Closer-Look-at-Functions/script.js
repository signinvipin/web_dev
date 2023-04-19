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

function argFunction () {
	return 'hello';
}

// take fn as argument
function highOrderFunction (argFunxn) {
	return function (word) {
		const expVar = argFunxn();
		console.log(`${expVar} ${word}`);
	}
}

// return fn as argument
const returnedFunction = highOrderFunction(argFunction);
// Calling Function
returnedFunction('hey');
// can also be called as 
highOrderFunction(argFunction)('hi');


// First-Class Functions

// Function can be called as an argument to another Function

// Way #1
function lowerCase (string){
	const lowCase = string.toLowerCase();
	return lowCase;
}

function upperCase (string){
	const upCase = string.toUpperCase();
	return upCase;
}

function changeCase (string,funxn) {
	console.log(`changeCase - ${funxn(string)}`);
}

const strOne = 'I like doing Javascript.';
changeCase(strOne,lowerCase);
changeCase(strOne, upperCase);

// Way #2
function buyPlane(){
	console.log('yay! I bought a Plane');
}
const btnBuy = document.querySelector('.buy');
btnBuy.addEventListener('click', buyPlane);

// Way #3
function buyOne (fruit){
	console.log(`I bought ${fruit} fruits`);
}

const fruits = ['apple','grape','banana','orange'];

fruits.forEach(buyOne); // fruit as argument to buyOne


// Function can be assigned to a variable as a value

// Function can be returned from a function as a value

function introDuce(name){
	return function(age){
		console.log(`I'm ${name}, a ${age} yrs old youngster.`);
	}
}
const personIntro = introDuce('Jonas Schmidtman');
personIntro(15);
// otherWay
introDuce('Sleepy Joe')(25);

// Method also can be called upon a function
const introObjectOne = {
	name:'Donkey Trump',
	age: 45,
}

const introObjectTwo = {
	name:'Barack Osama',
	age: 55,
}

function introPerson(city,country){
	console.log(`I'm ${this.name}, and my age is ${this.age}. I live in ${city},${country}.`);
}

// use call method on function to link 'this' to object
introPerson.call(introObjectOne,'New York', 'USA');
introPerson.call(introObjectTwo,'Kabul','Afghanistan');

// use apply method to function to link 'this' to object
// apply takes an array of arguments to function used upon
introPerson.apply(introObjectOne,['New York','USA']);
introPerson.apply(introObjectTwo,['Kabul','Afghanistan']);

// use bind method when no argument to pass
// bind returns a new function which is invoked in use

const introObjectThree = {
	name:'Jackie',
	age: 45,
}

const introObjectFour = {
	name:'Gaga',
	age: 55,
}

function introPersonOne(){
	console.log(`I'm ${this.name}, and my age is ${this.age}.`);
}
// introPersonOne();
const introBindThree = introPersonOne.bind(introObjectThree);
introBindThree();
const introBindFour = introPersonOne.bind(introObjectFour);
introBindFour();
