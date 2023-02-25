
// Fundamentals of JScript - 1
//    *** Assignments***
/*
// Values and Variables

let country = 'India';
let continent = 'Asia';
let population = 1370;
console.log(country);
console.log(continent);
console.log(population);
*/

/*
// Data Types

let isIsland = false;
let language;
console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));
*/
/*
// let, const and var

let language;
language = 'Hindi';
const country = 'India';
const continent = 'Asia';
const isIsland = false;
//isIsland = true; // invalid assignment
*/
/*
// Basic Operators

let population = 1370;
console.log(population/2);
population++;
console.log(population);

//Taking Decisions: if / else Statements
let populationFinland = 6;
if (population > populationFinland){
   console.log("Our country's population is more.");6[<65;59;46M]	
} else {
	console.log("Finlands' population is more.");
}

// The Conditional (Ternary) Operator 
population > populationFinland ? console.log("Our country's population is more.") : console.log("Finlands' population is more.");

let avgCountry = 33;
(population > avgCountry) ? console.log("Our country's population is more.") : console.log("avgCountrys' population is more.");

let language = 'Hindi';
const country = 'India';
const continent = 'Asia';
let description = 'India is in Asia, and its 1371 million people speak Hindi';
console.log(description);

// Equality Operators: == vs. ===

const numNeighbours = prompt('How many neighbour countries does your country have?');
//console.log(typeof(numNeighbours));
const numNbrs = Number(numNeighbours); // prompt user-input value is a string type
//console.log(typeof(numNbrs));


if (numNbrs === 1){
	console.log('Only 1 border');
} else if (numNbrs > 1) {
	console.log('More than one border');
} else {
	console.log('No borders');
}

// Strings and Template Literals

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

// Logical Operators
const isIsland = true;
if (language == 'English' && population < 50 && !(isIsland)) {
	console.log('You should live in India:)');
} else {
	console.log("India doesn't meet your criteria:(");
}

// The switch Statement

switch (language){
	case 'Chinese':	case 'Mandarin': console.log('MOST number of native speakers!');
	break;
	case 'Spanish': console.log('2nd place in number of native speakers');
	break;
	case 'English': console.log('3rd place for English');
	break;
	case 'Hindi': console.log('4th place for Hindi');
	break;
	case 'Arabic': console.log('5th most spoken language is Arabic');
	break;
	default: console.log('Great language too :D');
}
*/
// Coding Challenge #1

/*
//data-1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
*/
/*
//data-2
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;
*/
/*
const markBMI = markWeight/(markHeight**2);
const johnBMI = johnWeight/(johnHeight**2);
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log('markHigherBMI - '+markHigherBMI);
*/

//Coding Challenge #2
/*
const markBMI =  markWeight/(markHeight**2);
const johnBMI = johnWeight/(johnHeight**2);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI){
	console.log("Mark's BMI is higher than John's!");
	console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
} else {
	console.log("John's BMI is higher than Mark's!");
	console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})!`);
}
//console.log('markHigherBMI - '+markHigherBMI);
*/

// Coding Challenge #3

/* data-1
const avgScoreDolphins = (96+108+89)/3;
const avgScoreKoalas = (88+91+110)/3;
*/
/* data-2
const avgScoreDolphins = (97+112+101)/3;
const avgScoreKoalas = (109+95+123)/3;
*/
/*
// data-3
const avgScoreDolphins = (97+112+101)/3;
const avgScoreKoalas = (109+95+106)/3;

console.log(avgScoreDolphins);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100){
	console.log('Dolphins Won!');
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
	console.log('Koalas Won!');
} else if (avgScoreKoalas === avgScoreDolphins && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
	console.log('It is a draw !');
} else {
	console.log('No team Wins!');
}
*/

// Coding Challenge #4

//const bill = 275;
//const bill = 40;
const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? (0.15*bill) : (0.2*bill);
console.log('tip is '+tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill+tip}`);

