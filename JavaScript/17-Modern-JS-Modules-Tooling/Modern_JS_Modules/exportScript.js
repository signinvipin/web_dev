// Modern Export Module
/*
// Way#1 - Export Default (per module export)
export default function (car) {
  console.log(`My Car is ${car}.`);
}
*/

// Way#2 - Named Export (exports const variables)
/*
const carsList = [];
export const priceRange = 10_000;
export const myCar = function (car) {
  console.log(car);
  carsList.push(car);
};

// Or,
export { carsList };
*/

// Use of Top-Level Await
async function allUsers() {
  const userAll = await fetch('https://jsonplaceholder.typicode.com/users'); // fake api
  const data = userAll.json();
  return data;
}

export { allUsers };
