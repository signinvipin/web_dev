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

export const previewObject = function (id, image_url, publisher, title, key) {
  const resultObject = {
    recpId: id,
    imageURL: image_url,
    recipePublisher: publisher,
    recipeTitle: title,
  };

  if (key) resultsArray.userKey = key;
  return resultObject;
};

export const generateResultsList = function (recipes) {
  let listResults = [];

  for (let { id, image_url, publisher, title, key } of recipes) {
    // const dataResults = [id, image_url, publisher, title, key];
    // console.log(dataResults);

    const resultsArray = previewObject(id, image_url, publisher, title, key);
    listResults.push(resultsArray);
  }

  // console.log(listResults);
  return listResults;
};

export const generateCurrentRecipeData = function (data) {
  console.log(data);
  const ObjRecipe = {
    cookingTime: data.cooking_time,
    recipeId: data.id,
    imageURL: data.image_url,
    recipeIngredients: data.ingredients,
    recipePublisher: data.publisher,
    recipeServings: data.servings,
    sourceURL: data.source_url,
    recipeTitle: data.title,
  };
  data.key ? (ObjRecipe.userKey = data.key) : (ObjRecipe.userKey = undefined);
  console.log(ObjRecipe);
  return ObjRecipe;
};

/*
const prototypeobject = {
  cookingTime: '23',
  image: 'TESTimgurl',
  'ingredient-1': '0.5,kg,Rice',
  'ingredient-2': '1,,Avocado',
  'ingredient-3': ',,salt',
  'ingredient-4': 'test,test,test',
  'ingredient-5': 'test,test,test',
  'ingredient-6': '',
  publisher: 'TESTpublisher',
  servings: '4',
  sourceUrl: 'TESTurl',
  title: 'TESTtitle',
};
*/

export const generateUploadData = function (data) {
  try {
    let upload = [];
    const ObjArr = Object.entries(data);
    ObjArr.forEach(ar => {
      if (ar[0].startsWith('ing')) {
        let [quantity, unit, description] = ar[1].split(',');

        if (quantity === '' && unit === undefined && description === undefined)
          return;
        if (quantity === '' && unit === '' && description === '') return;
        quantity = quantity === '' ? null : +quantity;
        if (quantity === NaN)
          throw new Error('Quantity should be a number. Please try again.');
        upload.push({
          quantity: quantity,
          unit: unit,
          description: description,
        });
      }
    });
    console.log(upload);

    if (data.sourceUrl.length < 5)
      throw new Error('URL must be at least 5 characters long!'); // 5 characters long

    // return [{},{},{}] array of objects {quantity value/null number, unit ''/unit string, description string}
    return {
      cooking_time: +data.cookingTime,
      image_url: data.image,
      ingredients: upload,
      publisher: data.publisher,
      servings: +data.servings,
      source_url: data.sourceUrl,
      title: data.title,
    };
  } catch (err) {
    throw err;
  }
};

export const softDataStorage = {
  recentRequestStatus: '',
  currentRecipe: '',
  currentRecipeData: {}, // data formed from selected and fetched recipe
  allRecipeReceived: [], // original recipe list received
  resultsListView: [], // list of recipes for results view
  bookmarksList: new Set(), // list of bookmarks
};

const storeData = function (dataObject) {
  // add to local storage for tab reload event
};
storeData(softDataStorage);
