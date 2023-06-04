'use strict';

console.log('Object Oriented Programming');

// Around ES5, Object Oriented Programming
/*

// Type - I, Function Constructor Object Based Classes and Inheritance: using function block and call on parentClass

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
/*
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
*/
/*
//Type-III, ES6 Classes
console.log('ES6 Classes');

//const parent6Class = class{}; // Expression

//class parent6Class {}; // Declaration

//Creating Parent Class
class parent6Class {
  _species = 'homo sapiens';

  constructor (first6Name, last6Name) {
    this.first6Name = first6Name;
    this.last6Name = last6Name;
  }

  sayHello () {
    console.log(`Hello ${this.first6Name}!`);
  }

  specie () {
    console.log(`I am ${this._species}`);
  }
}
console.dir(parent6Class);

//Setting property and method on Prototype
parent6Class.prototype.planetsatellite = 'Moon';
parent6Class.prototype.askAge = function () {
  const inp = prompt('Please enter age:');
//  console.log(inp);
  return `Entered age is ${inp}.`;
}

//Creating Instance
const parent6Instance = new parent6Class('Mark','Lynn');
console.log(parent6Instance);
console.log(parent6Instance.__proto__);

//Calling method and property
parent6Instance.sayHello();
parent6Instance.specie();
//console.log(parent6Instance.askAge());
console.log(parent6Instance._species);

//Creating Child Class
class child6Class extends parent6Class {
  _galaxy = 'milkyway';

  constructor (first6Name, last6Name, gender6){
    super(first6Name,last6Name);
    this.gender6 = gender6;
  }
}
console.dir(child6Class);

//Create child class instance
const child6Instance = new child6Class('Jannet', 'McCarthy', 'Female');
console.log(child6Instance.__proto__);
console.log(child6Instance);

//Adding method and property on Prototype
child6Class.prototype.population = '7 billion';
*/
// ***ALWAYS ADD METHODS OR PROPERTIES ON PARENT CLASS OR CHILD CLASS PROTOTYPE SO ALL THEIR INSTANCES CAN USE A COPY OF THESE METHODS AND PROPERTIES***

// ***Privacy and Data Security***

//Use of underscore for protected methods and properties
class protectedClass {
//  _species = 'homo sapien';

  constructor(firstPName, lastPName){
    this.firstPName = firstPName;
    this.lastPName = lastPName;
    this._species = 'homo sapien';
    console.log(this._species, firstPName, lastPName);
  }
}

//Adding method and property on prototype
protectedClass.prototype.gender = '**';
//setting new value to already assigned variable 'gender'
//using 'Underscore' for resetting
protectedClass.prototype.setGender = function (gen) {
  this._gender = gen;
  return `Entered gender is ${this._gender}.`;
}

//Calling property or method not working on class itself
// but works on its instance
//console.log(protectedClass.setGender('M')); //TypeError

//Creating instance
const proInstance = new protectedClass('mark','sully');

//Caliing method and property
console.log(proInstance.setGender('M'));
//Calling original set variable value
console.log(proInstance.gender);
//calling reassigned existing variable value
console.log(proInstance._gender);

//Static Methods and Properties
class staticClass {
  static species = 'homo sapiens';
  static giveSpecies = function (){
    console.log(this.species);
  }
}

//Works on class itself
console.log(staticClass.species); //homo sapiens
staticClass.giveSpecies(); //homo sapiens

//doesn't work on instance
const staticClassInstance = new staticClass();
console.log(staticClassInstance.species); //undefined
//staticClassInstance.giveSpecies(); //TypeError: not function

// Non-Static Public and Private Properties
class nonStaticClass {
  _transactions = []; //protected property
  #country; //Private property
  species = 'homo sapiens'; //public property

  constructor (fName, lName, country, amt) {
    this.firstName = fName;
    this.lastName = lName;
    this.#country = country;
  }
// protected method
  addToList (amt) {
    this._transactions.push(Number(amt));
  }

  #getCountry () {
    console.log(this.#country);
    this.addToList();
  }
// Private method
  #getListLength () {
    console.log(this._transactions.length);
  }
// Public method
  getDetails () {
    this.#getCountry();
    this.#getListLength();
    console.log(this.species);
  }
}
// Can't access method and property on 'nonStaticClass' class itself
const nStaticInstance = new nonStaticClass('mark', 'sully','USA');
nStaticInstance.addToList(34);
nStaticInstance.getDetails();

//Getter and Setter
class getSetClass {
  #greet = 'hello dear';

  get greet() {
    console.log(this.#greet);
//    return this.#greet;
  }

  set greet(msg) {
    this.#greet = `hello ${msg}`;
//    return this.#greet;
  }
}

// Create instance
const getSetInstance = new getSetClass();
getSetInstance.greet; //Calling
getSetInstance.greet = 'friend'; //Setting
getSetInstance.greet;










