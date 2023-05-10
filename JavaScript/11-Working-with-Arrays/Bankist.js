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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// DOM Element Selection

const userName = document.querySelector('.login__input--user');
const passWord = document.querySelector('.login__input--pin');
const btnUserPass = document.querySelector('.login__btn');
const appMain = document.querySelector('.app');
const welcomeAtLogin = document.querySelector('.welcome');
const logTimer = document.querySelector('.timer');


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
		.map((name)=>name.slice(0,1).toLowerCase()).join('');				// console.log(typeof nameOwnr, typeof itmPin);

		// return false;
		return usName === nameOwnr && psWord === itmPin;
	});
	// console.log(typeof nmOwner); // object
	return nmOwner ;
	
}

const changeWelcome = function (userAccount) {

	// Message after login
	welcomeAtLogin.textContent = `Welcome, ${(userAccount.owner.split(' '))[0]}!`;
}


const balanceMoves = function () {
	
}


const displayWelcome = function (userAccount) {
	userName.value = '';
	passWord.value = '';
	// console.log(userAccount);
	
	if (typeof userAccount === 'object'){
		// console.log(event);
		appMain.style.opacity = 1;
		
	}
}


btnUserPass.addEventListener('click', (event)=>{
    event.preventDefault(); 

	// console.log(userName.value, passWord.value);

	const userAccount = checkCredentials();
	// console.log(userAccount);

	displayWelcome(userAccount);
	changeWelcome(userAccount);

	// console.log(timerVar);
	
	
	logOutTimer();

	
	
});




