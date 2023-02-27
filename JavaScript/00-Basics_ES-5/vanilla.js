

// JavaScript file as source to include code to HTML 
document.write('<p>This is HTML5</p>');
document.write('<p>From a source file</p>');

//The JavaScript Language 
console.log('The JavaScript Language');

// Commenting
console.log('// for single line comments');
console.log('/*...for multi-line comments...*/');

// Character Escaping
console.log('Character Escaping \' with \\ -> one \'2\' three');

//string Constants
// Whitespace and newline doesn't matter
console.log("x =  4\n+3.565; whitespace and newline doesn't matter");
var x =  4 
+3.565;
console.log('var x = '+x);

// Numeric Constants
console.log('One type - Numeric Constant i.e,');
console.log(typeof(x));
console.log('To get integer we can truncate it as '+(Math.trunc(x))+'.');

// Operators
console.log('Operators  +, -, *, /, +=, -=, *=, /=');
console.log('Unary/ side-effect operator ++, --');
console.log('Comparison(boolean) <, >, <=, >=');
console.log('Loose Equality  !=, ==');
console.log('Strict Equality  ===, !==');
console.log('Logical Operator  &&-AND, II-OR, !-NOT');

// Variable naming convention
var CarName = 'Maruti'; // for DOM object returning fn. & class names
var carName = 'Hyundai'; // for function names 
var CARNAME = 'TATA'; // for immutable constants
console.log('CarName = '+CarName);
console.log('carName = '+carName);
console.log('CARNAME = '+CARNAME);

// Variable Conversion / type
console.log('var y = 23; ');
var y = 23;
console.log(' y = isFinite '+isFinite(y));
console.log('y/0 = '+y/0);

// Functions 
console.log('Function');
console.log('add(a, b);');
function add(a, b) {
	var value = a + b;
	return value;
}
var c = add(4,5);
console.log('add(4, 5); = '+(c));

// Function Scoping Variable
console.log('Function Scoping Variable - var declaration');
var glb = 234;
function scope() {
	glb = 345;
}
scope();
console.log('Before glb = 234 >  glb = '+glb);

var glb = 234;
function scoped(){
	var glb = 345;
}
scoped();
console.log('After glb = 234 > glb = '+glb);

// Data Structure 
console.log('Data Structure - Array , object');
console.log('Arrays');
var arr = Array(1,2,3);
console.log(arr);
var arr = new Array;
arr.push(0,1,2,3);
arr[4] = 4;
console.log(arr);

console.log('Objects');
var obj = {'car':'hyundai','bus':'tata'};
console.log(obj); 
obj['train'] = 'vande bharat';
console.log(obj);

// Control Structures
console.log('Control Structures - if/else');
var usrinp = Number(prompt('Please Guess a number between 0-5'));
console.log(typeof(usrinp), usrinp);


if (typeof(usrinp) === 'number' && !isNaN(usrinp) ) {
	if (usrinp >= 0 && usrinp < 3) {
		alert('Low');	
	} else if (usrinp <= 5 && usrinp > 3) {
		alert('High');
	} else {
		alert('Your Guess is Correct ! * *');
	}
} else {
   alert('Incorrect/Invalid value entered.\n\
   Please refresh the page to start again.');	
}

// Loops

// Definite 'for' Loop
for (var loop = 1; loop<=2; loop++) {
	console.log('loop no. '+loop);
}

// Indefinite 'while' Loop
var loop = 3;
while(loop > 0){
	console.log('loop no. '+loop);
	loop--;
}

// Breaking Loop
for (var loop = 1; loop<=3; loop++) {
	if (loop === 2) break;
	console.log('loop no. '+loop);
}
console.log('Breakloop no. '+loop);

// Continue loop
for (var conloop = 1; conloop<=3; conloop++) {
	if (conloop === 2) continue;
	console.log('loop no. '+conloop);
}
console.log('continue loop no. '+conloop);

// for-in loop

var ball;
var balls = {'golf ball' : 'golf','tennis ball':'tennis','ping ball':'ping pong'}
console.log(balls);
for (ball in balls){
	console.log(ball+'='+balls[ball]);
}

console.log( '---ends ES5---');
















