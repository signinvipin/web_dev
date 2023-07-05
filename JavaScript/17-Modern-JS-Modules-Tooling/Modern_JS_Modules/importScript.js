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

// Parcel Support Problem in top-level await, dated 5/july/2023
// const dat = await allUsers();
// console.log(dat);

(async function () {
  const dat = await allUsers();
  console.log(dat);
})();

// Introduction to NPM
import cloneDeep from 'lodash-es';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// Transpilling with core-js
import 'core-js/stable';
// Polyfilling async-await
import 'regenerator-runtime';
