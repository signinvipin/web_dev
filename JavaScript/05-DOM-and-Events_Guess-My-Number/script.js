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

let guess = false;

// Record Score
let setScore = Number(initScore);
// console.log(setScore);


// Initialize all elements 
function initializePlayAgain () {
	msgOutputText.textContent = initMessage;
	scoreOutputText.textContent = initScore;
	showCorrectNumber.textContent = initShowCorrectNumber;
	showCorrectNumber.style.width = initShowCorrNumbWidth;
	body.style.backgroundColor = '';
	numberInput.value = '';
	randNumber = generateRandom();
	setScore = Number(initScore);
	guess = false;
	// console.log('setScore - '+setScore);
	// return randomNumberAgain;
}


// Again button click eventlistener
btnPlayAgain.addEventListener('click', initializePlayAgain);


// Game Lost features
function gameLost () {
	body.style.backgroundColor = '#DA012D';
}


// update setScore
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


// when Correct Guess
function correctGuess (userInput) {
	showCorrectNumber.textContent = userInput;
	showCorrectNumber.style.width = '25rem';
	body.style.backgroundColor = '#D2691E';
}


// event-handler with message output
function checkInput () {
    const userInput = Number(numberInput.value);
    if (setScore !== 0 && guess === false)
       updateScore();
       // console.log('click - ');
       if (setScore >= 1) {
	      if (userInput <=20 && userInput >=1) {
	         if (userInput === randNumber) {
	            msgOutputText.textContent = '* * * Correct * * *';
	            correctGuess(userInput);
	            updateHighScore();
	            guess = true;
	         } else if (userInput > randNumber) {
	            msgOutputText.textContent = "It's HIGH";
	         } else {
	            msgOutputText.textContent = "It's LOW";
	         } 
	      } else { 
	         msgOutputText.textContent = 'Enter between 1 - 20!';
	      } 
       } else {
	      msgOutputText.textContent = 'U lost the Game !';
	      gameLost();
	   }
}


// check button click event listener
btnCheckNumber.addEventListener('click', checkInput);
		   



