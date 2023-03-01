
'use strict';

// Editor setup
/* setting-up VS Code Editor
  1. create new snipets for console.log
  2. install prettier extension and create new 
    .prettierrc file in project directory and add -
     {
     	'propertyname': Valuetobechanged,
     }
  example,
     {
       "singleQuote": true,
       "arrowParens": "avoid"
     }
     then, select it in vs code options for code 
     formatter.
*/
// Auto-Web Page Loading
/* setting-up live-server
  1. install live-server extension on any editor we use or
  2. install system wide or local node.js to 
     install live-server through 'npm install'
     to auto-load page on saved changes in browser.
*/

// DEBUGGING 

//logs messages to browser console
console.log('Message to display');

// logs warning message to browser console
console.warn('Message to display');

// logs error to browser console
console.error('Message to display');

// logs an object on console, object data in tabular form
console.table({name: 'table',});

// Starts Debugger tool in-between code execution
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  debugger; // Opens debugger tool in browser
  
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
