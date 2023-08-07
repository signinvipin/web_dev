// Data handling for app

import { getURL } from './reusableView.js';

// console.log(getURL('cake'));

export const queryResults = async function (
  searchQuery = undefined,
  key = undefined,
  id = undefined
) {
  try {
    // if (searchQuery === '') return;
    const urlLink = getURL(searchQuery, key, id);
    // if (!urlLink) return;
    const responseData = await fetch(urlLink);

    const jsonData = await responseData.json();
    const arrData = Object.entries(jsonData);
    // console.log(arrData);

    return arrData;
  } catch (err) {
    console.error(err.message);
  }
};

export const generateResultsList = function (recipes) {
  let listResults = [];

  for (let { id, image_url, publisher, title, key } of recipes) {
    // const dataResults = [id, image_url, publisher, title, key];
    // console.log(dataResults);

    (function () {
      const resultsArray = {
        recpId: id,
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

export const generateCurrentRecipeData = function (data) {
  // console.log(data);
  return {
    cookingTime: data.cooking_time,
    recipeId: data.id,
    imageURL: data.image_url,
    recipeIngredients: data.ingredients,
    recipePublisher: data.publisher,
    recipeServings: data.servings,
    sourceURL: data.source_url,
    recipeTitle: data.title,
  };
};

export const softDataStorage = {
  recentRequestStatus: '',
  currentRecipe: '',
  currentRecipeData: {},
  allRecipeReceived: [], // original recipe list received
  resultsListView: [], // list of recipes for results view
  bookmarksList: new Set(),
};

const storeData = function (dataObject) {
  // add to local storage for tab reload event
};
storeData(softDataStorage);
