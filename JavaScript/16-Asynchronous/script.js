'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
// Create Async Request 
// #1 using XMLHttRequest
const getCountry = function () {
  const request = new XMLHttpRequest();
  // const cName = 'canada';
  const cName = prompt('Please enter country -');
  request.open('GET', `https://restcountries.com/v3.1/name/${cName}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [parsedObject] = JSON.parse(this.responseText);
    // console.log(parsedObject);
    // console.log(Object.entries(parsedObject));
    // console.log(parsedObject.flags.png);
    // console.log(parsedObject.name.official);
    // console.log(parsedObject.region);
    // console.log(parsedObject.population);

    const a = Object.entries(parsedObject.languages).flat();
    const lang = a.filter(e => e.length > 3).join(', ');
    // console.log(lang);

    console.log(parsedObject.currencies);
    const [_, curr] = Object.entries(parsedObject.currencies).flat();
    const currency = Object.values(curr).join(', ');
    // console.log(currency);

    let html = `<article class="country">
              <img class="country__img" src="${parsedObject.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${parsedObject.name.official}</h3>
                <h4 class="country__region">${parsedObject.region}</h4>
                <p class="country__row"><span>👫</span>${
                  (parsedObject.population / 1000000).toFixed(2) + ' Million'
                }<p>
                <p class="country__row"><span>🗣️</span>${lang}</p>
                <p class="country__row"><span>💰</span>${currency}</p>
              </div>
              </article>`;

    countriesContainer.insertAdjacentHTML('beforebegin', html);
  });
};

btn.addEventListener('click', getCountry);
*/

// #2 using Promise
//  fetch().then(response => response.json()).then(data => data)
/*
const getCountry = function (cName) {
  let ndata;
  const promise = fetch(`https://restcountries.com/v3.1/name/${cName}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      ndata = data;
      console.log(ndata);
    });
  // return ndata;
};
// console.log(getCountry('canada')); // undefined if returned ndata

getCountry('canada'); // create eventListener on click
*/
// ***Error Handling***

// Way #1 fetch.then(resolve callback fn, reject callback fn).then(data)
/*
const getCountryOrError = function (cName) {
  fetch(`https://restcountries.com/v3.1/name/${cName}`)
    .then(
      response => response.json(),
      error => console.log(error) // or,
      // () => console.error('Failed to fetch');
    )
    .then(data => console.log(data[0]));
};
getCountryOrError('india');
*/
// Way #2 Using fetch().then().then().catch().finally()
// It catches error happened at any stage of execution.
/*
const getCountryOrCatchError = function (cName) {
  const promise = fetch(`https://restcountries.com/v3.1/name/${cName}`)
    .then(res => res.json())
    .then(data => console.log(data[0]))
    .catch(err => console.log(err)) // Or use
    // .catch(() => console.log('Failed to fetch'));

    // use of finally() after catch() (optional)
    .finally(() => console.log('Operation completed !'));
};
getCountryOrCatchError('india');
*/

// Way #3 create Error using 'new Error' and throw Error
/*
const getCountryOrThrowError = function (cName) {
  const prome = fetch(`https://restcountries.com/v3.1/name/${cName}`)
    .then(resolve => {
      console.dir(resolve);
      if (!resolve.ok) throw new Error('Nothing to fetch');
      return resolve.json();
    })
    .then(data => console.log(data[0]));
};
getCountryOrThrowError('');
// getCountryOrThrowError('canada');
*/

// Creating Promise and Using Promise
/*
const promCreate = new Promise(function (resolve, reject) {
  if (Math.random() > 0.5) {
    resolve('You Won !');
  } else {
    reject('You have lost !');
  }
});

promCreate.then(res => console.log(res)).catch(err => console.log(err));
*/

// Example - creating promise

// Normal Way of Getting Current Position
/*
function getLoc() {
  navigator.geolocation.getCurrentPosition(
    pos => console.log(pos),
    err => console.error(err)
  );
}
getLoc();
*/

// Promisify getting Current Position
/*
// Way #1
const getPromLoc = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

getPromLoc
  .then(response => console.log(response))
  .catch(err => console.error(err));

// way#2 with function returning promise
const getPromLocReturn = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPromLocReturn()
  .then(resolve => console.log(resolve))
  .catch(err => console.error(err));
*/

// Creating Fullfilled or Rejected Promise
/*
// fullfilled Promise
Promise.resolve('Yes! it has resolved.').then(resp => console.log(resp));
// rejected Promise
Promise.reject('Request has been rejected!').catch(err => console.log(err));
*/

// Consuming Promise - Async-await
/*
// using async-await
const getCountryAsync = async function (cName) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${cName}`);
  const [data] = await response.json();
  console.log(data);
};
getCountryAsync('canada');
*/

// Handling Errors
/*
const getCountryTryCatch = async function (cName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${cName}`
    );
    console.log(response);
    if (!response.ok) throw new Error('Nothing fetched!');

    const data = await response.json();
    if (!data) throw new Error('No data!');
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
*/

// Using IIFE (Immediately Invoked Function Expression)
/*
(async function getDat() {
  try {
    const datCountry = await getCountryTryCatch('USA');
    console.log(datCountry);
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
*/

// or,

// Using fetch.then way
/*
getCountryTryCatch('canada')
  .then(res => console.log(res))
  .catch(err => console.log(err));
*/

// Example implementation
/*
const getGeoLoc = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

async function getCountryReverseGeocode() {
  try {
    const getGeo = await getGeoLoc();
    // console.log(getGeo.coords);
    const { latitude: lat, longitude: lng } = getGeo.coords;
    // console.log(latitude, longitude);
    // console.log(lat, lng);
    // const getRevGeo = false;
    const getRevGeo = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
    );

    if (!getRevGeo.ok) throw new Error('Problem getting data');
    // when data not provided and is priced or throttled

    const revData = await getRevGeo.json();
    const revAdd = revData.address;
    return `You are at ${revAdd.city}.`;
    //returns undefined when revAdd is false
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
const resp = getCountryReverseGeocode(); // No await
console.log(resp); // Results Promise pending

getCountryReverseGeocode()
  .then(response => console.log(response))
  .catch(err => console.error(err));
// Or,
(async function () {
  try {
    const city = await getCountryReverseGeocode();
    console.log(city);
  } catch (err) {
    console.error(err.message);
    throw err;
  }
})();
// Or,
btn.addEventListener('click', function () {
  getCountryReverseGeocode()
    .then(response => console.log(response))
    .catch(err => console.error(err));
});


//Tutorial
const whereAmI = async function () {
  try {
    const pos = await getGeoLoc();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
    );

    if (!resGeo.ok) throw new Error('Problem Getting Data');

    const dataGeo = await resGeo.json();
    // console.log(dataGeo.address.city);
    return `you are in ${dataGeo.address.city}`;
  } catch (error) {
    console.error(`${error.message}`);
    throw error;
  }
};
const ret = whereAmI();
console.log(ret); //Promise pending

whereAmI()
  .then(res => console.log(res))
  .catch(err => console.error(err)); // you are in {city name}

(async function () {
  try {
    const res = await whereAmI();
    console.log(res);
  } catch (error) {
    console.error(error.message);
  }
})();
*/

// Combinators
