'use strict';

console.log('Object Oriented Programming');

// Around ES5, Object Oriented Programming
/*
// Type - I, Function Object Based Classes and Inheritance: using function block and call on parentClass

// creating parent class
console.log('***parentClass***');
function parentClass (firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(`Instance has been created by ${firstName} ${lastName}`);
}
console.log(parentClass.prototype); // parentClass constructor fn object
console.dir(parentClass.prototype.constructor); // fn with native code

// Create property and methods on prototype
parentClass.prototype.country = prompt('Enter Country: ');
parentClass.prototype.giveCountry = function () {
  console.log(`Whose is from ${this.country}`);
}

// creating class Instance
console.log('***parentClass Instance***');
const classInstance = new parentClass('Vipin','Malik'); //log
console.log(classInstance.__proto__);  // parentClass constructor n prototype is object

//calling methods and properties
classInstance.giveCountry();
console.log(classInstance.country);

// creating child class
console.log('***childClass***');
function childClass (firstName, lastName, occuPation) {
  // taking 'this' and other variables from parentClass
  parentClass.call(this, firstName, lastName);
  this.occuPation = occuPation;
  console.log(`Child class Instance created by ${occuPation} ${firstName} ${lastName}.`);
}
console.dir(childClass);

// Linking childClass to parentClass prototype
childClass.prototype = Object.create(parentClass.prototype);

// create child class instance
console.log('***childClass Instance***');
const childClassInstance = new childClass('mike','chan','student');

// childClassInstance defaults to prototype 'Object' and parentClass constructor4[<64;47;8M[[<65;47;8M
console.log(childClassInstance.__proto__); // parentClass constructor

// Make childClass constructor default to childClassInstancee
//childClass.prototype.constructor = childClass; //uncomment to see effect
console.dir(childClass.prototype.constructor);
console.log(childClassInstance.__proto__);

// Calling property and method
console.log(childClassInstance.country);
childClassInstance.giveCountry();
*/

// Type-II, Object based Classes and Inheritance: using 'Object.create' and call method on objects' method
console.log('***Parent Class***');

// Creating Parent Class
const parentObjectClass = {
  giveObjectCountry(){
    console.log(`My Country is ${prompt('Enter Country :')}.`);
  },

  constr (firstObjectName, lastObjectName) {
    this.firstObjectName = firstObjectName;
    this.lastObjectName = lastObjectName;
    console.log(`constructor called by ${this.firstObjectName}.`);
  },
}
console.dir(parentObjectClass);

// creating property and method on parent class object
parentObjectClass.age = 21;

// parentObjectClass Instance
console.log('***Parent Class Instance***');
const parentObjectClassInstance = Object.create(parentObjectClass);
console.dir(parentObjectClassInstance);

// creating property and method on instance
//parentObjectClassInstance.age = prompt('Enter your age: ');
//parentObjectClassInstance.age = 28;
parentObjectClassInstance.showAge = function () {
  console.log(`My age is ${this.age}`);
}

// Calling method and property
//parentObjectClassInstance.giveObjectCountry();
parentObjectClassInstance.constr('mike','davis');
parentObjectClassInstance.showAge();

// Creating child Class Object
console.log('***creating Child Class Object***');
const childObjectClass = Object.create(parentObjectClass);
childObjectClass.constr = function (firstObjectName, lastObjectName, occuPation) {
   parentObjectClass.constr.call(this, firstObjectName, lastObjectName);
   this.occuPation = occuPation;
}
console.dir(childObjectClass);

// Create property and method (Don't create on prototype)
childObjectClass.sayHello = function () {
  console.log('hello I am child class!');
}

// Create child Instance
console.log('***Child Class Instance***');
const childObjectClassInstance = Object.create(childObjectClass);
console.dir(childObjectClassInstance);

//calling method and property
childObjectClassInstance.sayHello();
childObjectClassInstance.constr('mia','miles','student');
//childObjectClassInstance.giveObjectCountry();











