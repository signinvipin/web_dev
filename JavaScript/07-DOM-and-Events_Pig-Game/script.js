'use strict';

const btnHold = document.querySelector('.btn--hold');
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');

const scoreP1 = document.getElementById('score--0');
const scoreP2 = document.getElementById('score--1');

const dice = document.querySelector('.dice');


let curScoreP1 = 0;
let curScoreP2 = 0;
let scoreMainP1 = 0;
let scoreMainP2 = 0;

// hide the dice on first View
function hideDice() {
	dice.src = '';
    dice.alt = '';
}

hideDice();

// random number generation for dice roll
function randomNumber () {
	const randNumber = Math.trunc(Math.random() * 6) + 1;
	// console.log(randomNumber);
	return randNumber;
}

// Dice becoming visible on first roll
function viewDiceFirstRoll (ranNumber) {
	const diceVisibility = dice.src;
	// console.log(diceVisibility);
	if (!diceVisibility) {
		dice.alt = 'Playing Dice';
		dice.src = `dice-${ranNumber}.png`;
	} else {
	    dice.src = `dice-${ranNumber}.png`;
	}
}

// Switch to Player 1
function switchToPlayer1 () {
	playerTwo.classList.remove('player--active');
	playerOne.classList.add('player--active');
}


// Switch to Player 2
function switchToPlayer2 () {
	playerOne.classList.remove('player--active');
	playerTwo.classList.add('player--active');
}


// Add and Display Current Score for active player
// Switch Player if dice roll is '1'
function updateCurrentScore(ranNumber) {
	const pOne = playerOne.classList.contains('player--active');
	if (ranNumber !== 1) {
		if (pOne) {
			curScoreP1 = curScoreP1 + ranNumber;
			currentScoreP1.textContent = curScoreP1;
		} else {
			curScoreP2 = curScoreP2 + ranNumber;
			currentScoreP2.textContent = curScoreP2;
		}
	} else {
		if (pOne) {
		    curScoreP1 = 0;
			currentScoreP1.textContent = curScoreP1;
			switchToPlayer2();
		} else {
			curScoreP2 = 0;
			currentScoreP2.textContent = curScoreP2;
			switchToPlayer1();
		}
	}
}

//  Add winner after update !!???
function winnerP1 () {
	if (scoreMainP1 >= 100) {
	    scoreP1.textContent = scoreMainP1+'\n Winner';
	} else {
		scoreP1.textContent = scoreMainP1;
		switchToPlayer2();
	}
}

function winnerP2 () {
	if (scoreMainP2 >= 100) {
		scoreP2.textContent = scoreMainP2+'\n Winner';
	} else {
		scoreP2.textContent = scoreMainP2;
		switchToPlayer1();
	}
}


// Reset to previous initial values
function initNewGame () {
	scoreMainP1 = 0;
	scoreMainP2 = 0;
	curScoreP1 = 0;
	curScoreP2 = 0;
	switchToPlayer1();
	currentScoreP1.textContent = curScoreP1;
	currentScoreP2.textContent = curScoreP2;
	scoreP1.textContent = scoreMainP1;	
	scoreP2.textContent = scoreMainP2;
}

// eventListener to button New Game
btnNewGame.addEventListener('click', initNewGame);

// Dice Roll
function rollDice () {
	const ranNumber = randomNumber();
	viewDiceFirstRoll(ranNumber);
	updateCurrentScore(ranNumber);
	
}

// eventListener to button ROLL DICE
btnRollDice.addEventListener('click', rollDice);


// Hold Current-score to Main-score and Display other active
function holdCurrentScore() {
	const activeP1 = playerOne.classList.contains('player--active');
	if (activeP1) {
		scoreMainP1 = scoreMainP1 + curScoreP1;
		curScoreP1 = 0;
		currentScoreP1.textContent = curScoreP1;
		winnerP1();
	} else {
		scoreMainP2 = scoreMainP2 + curScoreP2;
		curScoreP2 = 0;
		currentScoreP2.textContent = curScoreP2;
		winnerP2();
	}
}


// evenlistener to button HOLD
btnHold.addEventListener('click', holdCurrentScore);
