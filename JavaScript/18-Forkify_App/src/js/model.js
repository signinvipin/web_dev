// Data handling for app

import { getURL } from './reusables.js';

// console.log(getURL('cake'));

export const queryResults = async function (
  searchQuery = undefined,
  key = undefined,
  id = undefined
) {
  // if (searchQuery === '') return;
  const urlLink = getURL(searchQuery, key, id);
  // if (!urlLink) return;
  const responseData = await fetch(urlLink);
  const jsonData = await responseData.json();
  const arrData = Object.entries(jsonData);
  console.log(arrData);

  return arrData;
};

export const softDataStorage = {};

const storeData = function (dataObject) {
  // add to local storage for tab reload event
};
storeData(softDataStorage);
