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
const btnSortMoves = document.querySelector('.btn--sort');
const balanceValue = document.querySelector('.balance__value');
const sumIn = document.querySelector('.summary__value--in');
const sumOut = document.querySelector('.summary__value--out');
const sumInt = document.querySelector('.summary__value--interest');
const btnTransfer = document.querySelector('.form__btn--transfer');
const transToUser = document.querySelector('.form__input--to');
const transToUserAmt = document.querySelector('.form__input--amount');
const dateToday = document.querySelector('.date');


// User Account Details
let userAccount;

// toggle sort
let toggleSort = 0;

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

// Internationalize Number
const intlNumber = function (n) {
	const optionsObj = {
		style:'currency',
		currency: userAccount.currency,
	}
	const newIntlNumber = new Intl
	.NumberFormat(userAccount.locale, optionsObj).format(n);
	// console.log(intlNumber);
	return newIntlNumber ;
}


// displayBalance
const displayBalance = function () {
	const moves = userAccount.movements;

	const intrstR8 = userAccount.interestRate;

	// Calc Interest and Display
	const interestTotal = moves
		.filter((e)=>!String(e).startsWith('-'))
		.map((e)=> (e * intrstR8)/100)
		.reduce((ac,e)=>ac+e, 0);
	// console.log(interestTotal);
	const interestTotalIntl = intlNumber(interestTotal);
	// console.log(interestTotalIntl, typeof interestTotalIntl);
	sumInt.textContent = interestTotalIntl;

	// Main Balance
	const endBalance = moves
		.reduce((acml, e)=>{ return acml + e; },0);
	const endIntlBalance = intlNumber(endBalance+interestTotal);
	// console.log(endIntlBalance);
	balanceValue.textContent = endIntlBalance;


	// Net Amount Out '-'
	const netOut = moves.filter((e)=>String(e).startsWith('-'))
	.reduce((ac,e)=>{return ac + e},0);
	// console.log(netOut);
	const netOutIntl = intlNumber(Math.abs(netOut) );
	sumOut.textContent = netOutIntl;


	// Net Amount In '+'
	const netIn = moves
	.filter((e)=>!String(e).startsWith('-'))
	.reduce((ac,e)=>{return ac + e},0);
	// console.log(netIn);
	
	const netInIntl = intlNumber(netIn);
	sumIn.textContent = netInIntl;
};


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
	
};

// Change Welcome Message
const changeWelcome = function (userAccount) {
	// Message after login
	welcomeAtLogin.textContent = `Welcome, ${(userAccount.owner.split(' '))[0]}!`;
};

// Display Welcome Message
const displayPage = function (userAccount) {
	userName.value = '';
	userName.blur();
	passWord.value = '';
	passWord.blur();
	// console.log(userAccount);
	
	if (typeof userAccount === 'object'){
		// console.log(event);
		appMain.style.opacity = 1;
	}
};

// Create timestamp

// for old entries or predefined entries -- 'long ago'
for (let ac of accounts) {
	if (ac.movements ) {
		// console.log(ac);
		ac.timeStamp = Array.from(
		{length:`${ac.movements.length}`},
		()=> 'long ago');
		// console.log(ac.timeStamp);
	}
} 

// for new entries - generate timestamp - display it

const genr8Date = function (ts) {
	const intDateObj = {
		day:'numeric',
		year:'numeric',
		month:'numeric',
		hour:'numeric',
		minute:'numeric',
	}
	
	const intlDate = new Intl
	.DateTimeFormat(userAccount.locale, intDateObj)
	.format(ts);
	// console.log(intlDate, typeof intlDate);
	return intlDate;
}
// genr8Date(accounts[0]);


// Todays' date on page UI
let dateNow;
const dateDisplayUI = () => {
	dateNow = Date.now();
	const formattedDate = genr8Date(dateNow);
	dateToday.textContent = formattedDate;
};

// stop same account transfer????

const timeWhen = function (tStamp) {
	if (typeof tStamp === 'number') {
		// console.log(tStamp);
		const timeGen = new Date(tStamp);
		
		const dayDiff = Math.trunc(Math.abs(
		(new Date() - new Date('May 10,2023'))/(1000*60*60*24)));
		console.log(dayDiff);
		// Timestamp is in milliseconds. So, converted to days.

		if (dayDiff < 1) return genr8Date(timeGen);
		if (dayDiff === 1) return 'Yesterday';
		if (dayDiff >= 2 && dayDiff <= 7) return `${dayDiff} days ago`;
		if (dayDiff >= 8 && dayDiff <= 14) return 'last week';
		if (dayDiff >= 15 && dayDiff <= 28) return 'weeks ago';
		if (dayDiff >= 28) return 'long ago';		
	} else {
		return tStamp;
	}
};

// Create an array of Moves with TimeStamp
let moveWithTimeStamp = [];
// console.log(moveWithTimeStamp);

// Retrieve Timestamp object for Date
const retrieveMoveNTimeStamp = function (userAccount) {
	moveWithTimeStamp = [];
	const {movements,timeStamp} = userAccount;
	for(let i = 0; i < movements.length; i++) {
		let move = movements[i];
		let tStp = timeStamp[i];
		// console.log(move, tStamp);
		moveWithTimeStamp.push([move,tStp]); 
		
	}
	// console.log(moveWithTimeStamp);
}
// retrieveMoveNTimeStamp(accounts[0]);




// Show all Balance Moves
const balanceMoves = function (userAccount, array) {
	// First, clear any previous html from UI.
	transactionMoves.innerHTML = '';
	// Loop and provide move and time stamp
	for (let [move, tStamp] of array) {
		// console.log(move, tStamp);
		
		let moveType =  String(move)
		.startsWith('-') ? 'withdrawal' : 'deposit';
		// console.log(moveType);

		const objOptions = {
			style: 'currency',
			currency: userAccount.currency,
		}
		let moveValue = new Intl
		.NumberFormat(userAccount.locale, objOptions)
		.format(move);
		// console.log(moveValue);
		// console.log(navigator.language);

		const movSerialNumber = ((userAccount.movements)
		.indexOf(move))+1;
		// console.log(movSerialNumber);

		const moveDate = timeWhen(tStamp);
		console.log(moveDate);
		

		const html = `<div class="movements__row">
			<div class="movements__type 
			movements__type--${moveType}">
			${movSerialNumber} ${moveType}</div>
			<div class="movements__date">${moveDate}</div>
			<div class="movements__value">${moveValue}</div>
			</div>`;

		transactionMoves.insertAdjacentHTML('afterbegin',html);
	}
}
// balanceMoves(accounts[3]);

// Transfer amount from one to another account
btnTransfer.addEventListener('click', function (e) {
	e.preventDefault();
	let dateTimeStamp;
	
// find user account > add deposit with timestamp
	const userTrans = transToUser.value;
	// console.log(userTrans);
	transToUser.value = '';
	transToUser.blur();
	
	const transAmt = transToUserAmt.value;
	// console.log(transAmt);
	transToUserAmt.value = '';
	transToUserAmt.blur();

	accounts.map((item,i,arr)=> {
        // console.log(item);

            const nameOwnr = item.owner.split(' ')
            .map((name)=>name.slice(0,1).toLowerCase()).join('');
            // console.log(typeof nameOwnr, typeof itmPin);

            // return false;
            if (userTrans === nameOwnr) 
        	item.movements.push(+transAmt);
        	dateTimeStamp = Date.now(); //create timestamp 
        	item.timeStamp.push(dateTimeStamp);        
    	});

// add withdrawal to logged in user > display with timestamp   
	 userAccount.movements.push(+(`-${transAmt}`));
	 userAccount.timeStamp.push(dateTimeStamp);
	 retrieveMoveNTimeStamp(userAccount);
	 balanceMoves(userAccount, moveWithTimeStamp);
	 displayBalance();

});

// Sort out the Moves and display in UI
btnSortMoves.addEventListener('click', () => {
	// Sort moveWithTimeStamp
	// console.log(moveWithTimeStamp);

	if (toggleSort === 0){
		const sortedMoveStamp = [];
		moveWithTimeStamp.forEach(
			(e)=>sortedMoveStamp.push(e));
		sortedMoveStamp.sort((a,b)=> a[0] - b[0]);
		// console.log(toSortMoveStamp);
		balanceMoves(userAccount, sortedMoveStamp);
		toggleSort = 1;
	} else {
		balanceMoves(userAccount, moveWithTimeStamp);
		toggleSort = 0;
	}
});


// Login Check and Display data
btnUserPass.addEventListener('click', (event)=>{
    event.preventDefault();
	// console.log(userName.value, passWord.value);

	// Check USER and PIN
	userAccount = checkCredentials();
	console.log(userAccount);
	
	// Display Welcome Message
	displayPage(userAccount);
	
	// Change Welcome Message
	changeWelcome(userAccount);
	
	// LogOut after 10 minutes
	logOutTimer();

	// retrieving move and timeStamp
	retrieveMoveNTimeStamp(userAccount);
	
	// Show all Balance Moves
	balanceMoves(userAccount, moveWithTimeStamp);
	
	// Display balance, total deposit, total withdrawal, interest
	displayBalance();

	// Display date on page
	dateDisplayUI();
	
});




