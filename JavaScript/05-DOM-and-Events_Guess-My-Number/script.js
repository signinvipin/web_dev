'use strict';

const btnPlayAgain = document.querySelector('.again');
const showCorrectNumber = document.querySelector('.number');
const numberInput = document.querySelector('.guess');
const btnCheckNumber = document.querySelector('.check');
const msgOutputText = document.querySelector('.message');
const scoreOutputText = document.querySelector('.score');
const highscoreOutputText = document.querySelector('.highscore');
const body = document.querySelector('body');

const initMessage = msgOutputText.textContent;
const initScore = scoreOutputText.textContent;
const initShowCorrectNumber = showCorrectNumber.textContent;
const initShowCorrNumbWidth = showCorrectNumber.style.width;
// console.log(initMessage,initShowCorrectNumber,initScore);
const initHighscore = highscoreOutputText.textContent;
numberInput.value = '';


// init random number
function generateRandom () {
	const initRandom = Math.trunc(Math.random() * 6) + 1;
	// console.log(initRandom);
	return initRandom;
}
let randNumber = generateRandom();

// Initialize all elements 
function initializePlayAgain () {
	msgOutputText.textContent = initMessage;
	scoreOutputText.textContent = initScore;
	showCorrectNumber.textContent = initShowCorrectNumber;
	showCorrectNumber.style.width = initShowCorrNumbWidth;
	body.style.backgroundColor = '';
	numberInput.value = '';
	randNumber = generateRandom();
	// return randomNumberAgain;
}


// Again button click eventlistener
btnPlayAgain.addEventListener('click', initializePlayAgain);


// Set Score and Record Score
let setScore = Number(initScore);
// console.log(setScore);

function updateScore () {
    setScore-=1;
    scoreOutputText.textContent = setScore;
}


// Record highscore
let recordScore = Number(initHighscore);
// console.log(recordScore);

function updateHighScore () {
	if (recordScore < setScore) {
		recordScore = setScore;
		highscoreOutputText.textContent = recordScore;
	}
}


// Comparing user input to random number
function checkInput (userInput, randNumber) {
	if (userInput === randNumber) {
		msgOutputText.textContent = '* * * Correct * * *';
		showCorrectNumber.textContent = userInput;
		showCorrectNumber.style.width = '25rem';
		body.style.backgroundColor = '#D2691E';
		updateHighScore();
		setScore = Number(initScore);
	} else if (userInput > randNumber) {
		msgOutputText.textContent = "It's HIGH";
	} else {
		msgOutputText.textContent = "It's LOW";
	}
}

// check button click event listener
function get (){
    const userInput = Number(numberInput.value);
    // numberInput.value = '';
        
    if (userInput > 0 && userInput <= 20) {
       // console.log(userInput);
       updateScore();
       checkInput(userInput, randNumber);
    } else {
       msgOutputText.textContent = 'Enter between 1 - 20!';
       // console.log(userInput);
    }
}

btnCheckNumber.addEventListener('click', get );


