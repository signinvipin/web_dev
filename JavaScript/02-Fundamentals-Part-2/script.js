 'use strict';

 // JavaScript Fundamentals - Part 2

// Functions
/*
function describeCountry (country, population, capitalCity) {
   console.log(`${country} has ${population} million people and its capital is ${capitalCity}.`);
 }

describeCountry('India', 1370, 'New Delhi');
describeCountry('Finland', 6, 'Helsinki');
describeCountry('Russia', 143.4, 'Moscow');
*/
// Function Declaration
/*
function percentageOfWorld1 (population) {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

const chinaPop = percentageOfWorld1(1441);
const indiaPop = percentageOfWorld1(1370);
const finlandPop = percentageOfWorld1(9);
console.log(chinaPop);
console.log(indiaPop);
console.log(finlandPop);
*/
// Function Expression
/*
const percentageOfWorld2 = function (population){
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

const chinaPop = percentageOfWorld2(1441);
const indiaPop = percentageOfWorld2(1370);
const finlandPop = percentageOfWorld2(9);
console.log(chinaPop);
console.log(indiaPop);
console.log(finlandPop);
*/

// Arrow Function 
/*
const percentageOfWorld3 = (population) => {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

const chinaPop = percentageOfWorld3(1441);
const indiaPop = percentageOfWorld3(1370);
const finlandPop = percentageOfWorld3(9);
console.log(chinaPop);
console.log(indiaPop);
console.log(finlandPop);
*/
// Function Calling other Functions
/*
const percentageOfWorld3 = (population) => {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

function describePopulation (country, population){
   const perOfWorld = percentageOfWorld3(population);
   console.log(`${country} has ${population} million people, which is about ${perOfWorld}% of the world.`)
}

describePopulation('China', 1441);
describePopulation('India', 1370);
describePopulation('Finland', 9);
*/

// Intro to Arrays
/*
const populations = [1441, 1370, 9, 22];
console.log(populations.length === 4);

const percentageOfWorld3 = (population) => {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

let percentages = [];
percentages.push(percentageOfWorld3(populations[0]));
percentages.push(percentageOfWorld3(populations[1]));
percentages.push(percentageOfWorld3(populations[2]));
percentages.push(percentageOfWorld3(populations[3]));

console.log(percentages);
*/
// Basic Array Operations/Methods
/*
const neighbours = ['Nepal', 'Bangladesh', 'Bhutan', 'Sri Lanka', 'Pakistan', 'Tibet'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')){
   console.log('Probably not a central European country :D');
}

const pakInd = neighbours.indexOf('Pakistan');
neighbours[pakInd] = 'Islamic Republic of Pakistan';
console.log(neighbours);
*/

// Intro to Objects
/*
const myCountry = {
	country : 'India',
	capital : 'New Delhi',
	language : 'Hindi',
	population : 1370,
	neighbours : ['Nepal', 'Bangladesh', 'Bhutan', 'Sri Lanka', 'Pakistan', 'Tibet']
}

// Dot Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry);

// Bracket Notation

myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry);

// Object Methods

myCountry.describe = function (){
   console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
}
myCountry.describe();
myCountry.checkIsland = function () {
   (this.neighbours.length === 0) ? this.isIsland = true : this.isIsland = false ;
}

myCountry.checkIsland();
console.log(myCountry);
*/
// Iteration - 'for' loop
/*
for(let person = 1; person <= 50; person++){
   console.log(`Voter number ${person} is currently voting..`);
}
*/
// Looping Arrays
/*
const populations = [1441, 1370, 9, 22];

const percentageOfWorld3 = (population) => {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

let percentages2 = [];
for(let popNo = 0; popNo < populations.length; popNo++){
	const percVal = percentageOfWorld3(populations[popNo]);
	percentages2.push(percVal);
}
console.log(percentages2);

// Loop Breaking 

for(let popNo = 0; popNo < populations.length; popNo++){
   if(populations[popNo]===9) break;
   console.log(populations[popNo]);
}

// Loop Continuing

for(let popNo = 0; popNo < populations.length; popNo++){
   if(populations[popNo]===9) continue;
   console.log(populations[popNo]);
}
*/
// Loops in Loops
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// console.log(listOfNeighbours);

for(let cnt = 0; cnt < listOfNeighbours.length; cnt++){
   console.log(listOfNeighbours[cnt]);
   for(let incnt = 0; incnt < listOfNeighbours[cnt].length; incnt++){
      console.log(`Neighbour: ${listOfNeighbours[cnt][incnt]}`);
      }
}*/

// Loop Backards
/*
const listOfNeighbours = [
	['Canada', 'Mexico'],
	['Spain'],
	['Norway', 'Sweden', 'Russia'],
	];
console.log(listOfNeighbours);
for (let i = (listOfNeighbours.length-1); i >= 0; i--)
   // console.log(listOfNeighbours[i]);
   for (let y = (listOfNeighbours[i].length-1); y >=0; y--)
      console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
*/
// while Loop
/*
const populations = [1441, 1370, 9, 22];

const percentageOfWorld3 = (population) => {
   const popPercentage = (population/7900) * 100;
   return popPercentage;
}

let percentages3 = [];
let countr = 0; 
while (countr < populations.length){
   const percVal = percentageOfWorld3(populations[countr]);
   percentages3.push(percVal);
   countr++;
}
console.log(percentages3);
*/
