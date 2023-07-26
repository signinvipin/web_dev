// Reusable Functions

/** All Imports */
import { baseURL } from './configuration.js';

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
  console.log(url);
  const resp = await fetch(url);

  if (!resp.ok) throw new Error('Invalid Response. Please try again!');
  const { data } = await resp.json();
  return data.recipe;
};

// Post Data
export const postData = async function () {};

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
    console.error(`${err.message}`);
    // return err;
  }
};
