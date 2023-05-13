'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  currency:'CAD',
  locale:'en-CA',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, -700, 50, 90],
  interestRate: 1,
  pin: 4444,
  currency:'GBP',
  locale:'en-GB',
};

const accounts = [account1, account2, account3, account4];

// DOM Element Selection

const userName = document.querySelector('.login__input--user');
const passWord = document.querySelector('.login__input--pin');
const btnUserPass = document.querySelector('.login__btn');
const appMain = document.querySelector('.app');
const welcomeAtLogin = document.querySelector('.welcome');
const logTimer = document.querySelector('.timer');
const transactionMoves = document.querySelector('.movements');


// Message before login
const loggedOutMessage = welcomeAtLogin.textContent;

// Timer Variables
let timerMinutes; 
let timerSeconds;
let timerVar;


const logOutTimer = function () {
	clearInterval(timerVar);
	timerMinutes = 9; // 3 minute timer
	timerSeconds = 59;
	timerVar = setInterval(() => {
		if (timerSeconds < 0) {
			timerSeconds = 59;
			timerMinutes -= 1;
		}
		if (timerMinutes === 0 && timerSeconds === 0){
			clearInterval(timerVar);
			appMain.style.opacity = 0;
			// console.log(loggedOutMessage);
			welcomeAtLogin.textContent = loggedOutMessage;
		}
		// console.log(timerMinutes, timerSeconds);
		const seconds = String(timerSeconds).padStart(2, '0');
		const minutes = String(timerMinutes).padStart(2, '0');
		// console.log(`${minutes}:${seconds}`);
		logTimer.textContent = `${minutes}:${seconds}`;
		timerSeconds -= 1;
	}, 1000);
	return timerVar;
}
// console.log(timerVar);


// Check USER and PIN
const checkCredentials = function () {
	const usName = userName.value;
	const psWord = passWord.value;
	// console.log(typeof usName, typeof psWord);

	const [nmOwner] = accounts.filter(function (item) {
		// console.log(item);
		const itmOwner = item.owner;
		const itmPin = String(item.pin);
		// console.log(itmOwner, itmPin, usName, psWord);

		const nameOwnr = itmOwner.split(' ')
		.map((name)=>name.slice(0,1).toLowerCase()).join('');
		// console.log(typeof nameOwnr, typeof itmPin);

		// return false;
		return usName === nameOwnr && psWord === itmPin;
	});
	// console.log(typeof nmOwner); // object
	return nmOwner ;
	
}

// Change Welcome Message
const changeWelcome = function (userAccount) {
	// Message after login
	welcomeAtLogin.textContent = `Welcome, ${(userAccount.owner.split(' '))[0]}!`;
}

// Display Welcome Message
const displayPage = function (userAccount) {
	userName.value = '';
	passWord.value = '';
	// console.log(userAccount);
	
	if (typeof userAccount === 'object'){
		// console.log(event);
		appMain.style.opacity = 1;
	}
}

// Create timestamp
// for old entries or predefined entries -- 'long ago'
const oldEntriesTimeStamp = function (accounts) {
	for (let ac of accounts) {
		// console.log(ac);
		ac.timeStamp = Array.from({length:`${ac.movements.length}`}, ()=> 'long ago');
	// console.log(ac.timeStamp);
	}
}
oldEntriesTimeStamp(accounts);
// console.log(accounts);

// for new entries - generate timestamp - display it


// Retrieve Timestamp object for Date
let moveWithTimeStamp = [];
// console.log(moveWithTimeStamp);
/*
const retrieveTimeStamp = function (userAccount) {
	const {movements,timeStamp} = userAccount;
	for(let i = 0; i < movements.length; i++) {
		let move = movements[i];
		let tStamp = timeStamp[i];
		console.log(move, tStamp);
		moveWithTimeStamp.unshift([move,tStamp]); 
		
	}
	console.log(moveWithTimeStamp);
}
retrieveTimeStamp(accounts[0]);
*/

// Show all Balance Moves
const balanceMoves = function (userAccount) {
	const {movements,timeStamp} = userAccount;
	
	for(let i = 0; i < movements.length; i++) {
		let move = movements[i];
		let tStamp = timeStamp[i];
		// console.log(move, tStamp);
		moveWithTimeStamp.unshift([move,tStamp]);
			
		let moveType =  String(move).startsWith('-') ? 'withdrawal' : 'deposit';
		console.log(moveType);

		const objOptions = {
			style: 'currency',
			currency: userAccount.currency,
		}
		let moveValue = new Intl.NumberFormat(userAccount.locale, objOptions).format(move);
		console.log(moveValue);
		// console.log(navigator.language);

		const movSerialNumber = ((movements).indexOf(move))+1;
		console.log(movSerialNumber);

		const moveDate = tStamp;
		console.log(moveDate);

		const html =
			`<div class="movements__row">
			<div class="movements__type movements__type--${moveType}">${movSerialNumber} ${moveType}</div>
			<div class="movements__date">${moveDate}</div>
			<div class="movements__value">${moveValue}</div>
			</div>`;

		transactionMoves.insertAdjacentHTML('afterbegin',html);
	}
}
// balanceMoves(accounts[3]);

btnUserPass.addEventListener('click', (event)=>{
    event.preventDefault(); 
// console.log(userName.value, passWord.value);

// Check USER and PIN
	const userAccount = checkCredentials();
	// console.log(userAccount);
	
// Display Welcome Message
	displayPage(userAccount);
	
// Change Welcome Message
	changeWelcome(userAccount);
	
// LogOut after 10 minutes
	logOutTimer();
	
// Show all Balance Moves
	balanceMoves(userAccount);
	
	
});




