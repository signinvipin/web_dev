// Modern Import Module

/*
// Way#1 Default Import
import myCar from './exportScript.js';

myCar('maruti 800');
*/

// Way#2 Named Import
/*
import { priceRange, myCar, carsList } from './exportScript.js';

console.log(priceRange);
myCar('maruti 800');
console.log(carsList);
*/

// Or,
/*
import * as allCars from './exportScript.js';

console.log(allCars.priceRange);
allCars.myCar('Honda City');
console.log(allCars.carsList);
*/

// Use of Top-Level Await without 'sync'
import { allUsers } from './exportScript.js';

console.log(allUsers()); // Promise Pending

// Promise resolved using top-level await without 'async' keyword
const dat = await allUsers();
console.log(dat);
