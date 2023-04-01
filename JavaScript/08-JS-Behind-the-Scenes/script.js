'use strict';

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



// variable created with var inside block scope can be accessed outside the block


