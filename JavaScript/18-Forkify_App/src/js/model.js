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
  // console.log(arrData);

  return arrData;
};

export const generateResultsList = function (recipes) {
  let listResults = [];

  for (let { id, image_url, publisher, title, key } of recipes) {
    // const dataResults = [id, image_url, publisher, title, key];
    // console.log(dataResults);

    (function () {
      const resultsArray = {
        userId: id,
        imageURL: image_url,
        recipePublisher: publisher,
        recipeTitle: title,
      };

      if (key) resultsArray.userKey = key;

      listResults.push(resultsArray);
    })(id, image_url, publisher, title, key);
  }

  // console.log(listResults);
  return listResults;
};

export const softDataStorage = {
  recentRequestStatus: '',
  recipeList: [],
  resultList: [],
};

const storeData = function (dataObject) {
  // add to local storage for tab reload event
};
storeData(softDataStorage);
