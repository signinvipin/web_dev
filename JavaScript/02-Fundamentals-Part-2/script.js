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

	      
