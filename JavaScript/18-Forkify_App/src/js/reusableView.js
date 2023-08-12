// Reusable Functions

/** All Imports */
import { baseURL, key } from './configuration.js';
import icons from '../img/icons.svg';
import { parentTags, initParentTags } from './mainView.js';

/**
 * This function runs a timeout timer for async requests made to
 * server APIs making them time bound operations.
 * @param {number} seconds It takes seconds as a parameter.
 * @returns It returns a rejected promise with an error.
 */
export const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} second`)
      );
    }, seconds * 1000);
  });
};

// get data for selected recipe
export const getData = async function (url) {
  // console.log(url);
  const resp = await fetch(url);

  if (!resp.ok) throw new Error('Invalid Response. Please try again!');
  const { data } = await resp.json();
  return data.recipe;
};

// Post Data to Create Recipe
export const postData = async function (key, data) {
  try {
    const resp = await fetch(getURL(undefined, key), {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    // console.log(resp);
    const dataResponse = await resp.json();
    if (!resp.ok) throw new Error(`${dataResponse.message} (${resp.status})`);

    return dataResponse;
  } catch (err) {
    throw err; // throw existing error
  }
};

/**
 * This function generates operation ready URL as per the availability of search query, recipe #id and user API key.
 * @param {string} searchQuery The query submitted at the search bar.
 * @param {number} key The user API key if Provided by user.
 * @param {number | string} hashId The #id of the recipe to be fetched.
 * @returns The string form of complete request url.
 */
export const getURL = function (
  searchQuery = undefined,
  key = undefined,
  hashId = undefined
) {
  // console.log(searchQuery);
  try {
    let apiURL;
    const queryKeyURL = `?search=${searchQuery}&key=${key}`;
    const recipeIdKeyURL = `/${hashId}?key=${key}`;
    const queryURL = `?search=${searchQuery}`;
    const recipeIdURL = `/${hashId}`;
    const keyURL = `?key=${key}`;

    if (searchQuery && key) {
      // Querying with key
      apiURL = `${baseURL}${queryKeyURL}`;
    } else if (hashId && key) {
      // Tab reload after browser exiting with key and recipe #id
      apiURL = `${baseURL}${recipeIdKeyURL}`;
    } else if (searchQuery) {
      // Querying without key
      apiURL = `${baseURL}${queryURL}`;
    } else if (hashId) {
      // Tab reload after browser exit event
      apiURL = `${baseURL}${recipeIdURL}`;
    } else if (key) {
      // POST request
      apiURL = `${baseURL}${keyURL}`;
    } else {
      throw new Error('No input received!');
      // return;
    }

    return apiURL;
  } catch (err) {
    // console.error(`${err.message}`);
    return err;
  }
};

export const renderSpinner = function (containerHtml) {
  const html = `<div class="spinner">
                    <svg>
                    <!--<use href="src/img/icons.svg#icon-loader"></use>-->
                    <use href="${icons}#icon-loader"></use>
                    </svg>
                </div>`;
  containerHtml.insertAdjacentHTML('afterbegin', html);
};

export const emptyContainer = function (container) {
  initParentTags();
  console.log(container);
  if (container) container.innerHTML = ''; ////problem finding container
  // document.querySelector('.search-results').previousSibling.remove();
  if (parentTags.loadSpinner) parentTags.loadSpinner.remove();
  if (parentTags.loadError) parentTags.loadError.remove();
};

//////////////DELETE Recipes
// export const recList = ['64d2742a1d6902001415a629', '64d242251d6902001415a5c1'];

// export const deleteRecipe = function (dataList, key) {
//   // request deletion
//   console.log(dataList);
//   const deleteAll = async function () {
//     for (let id in dataList) {
//       console.log(id);
//       console.log(dataList[id]);
//       const resp = await fetch(
//         `https://forkify-api.herokuapp.com/api/v2/recipes/${dataList[id]}?key=${key}`,
//         {
//           method: 'DELETE',
//           headers: {
//             'Content-type': 'application/json',
//           },
//         }
//       );
//       // const data = await resp.json();
//       console.log(resp);
//     }
//   };
//   deleteAll();
// };
