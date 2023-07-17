// Reusable Functions

/** All Imports */
import { allURLs } from './configuration.js';

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

/**
 * This function generates operation ready URL as per the availability of search query, recipe #id and user API key.
 * @param {string} searchQuery The query submitted at the search bar.
 * @param {number} key The user API key if Provided by user.
 * @param {number | string} id The #id of the recipe to be fetched.
 * @returns The string form of complete request url.
 */
export const getURL = function (searchQuery, key, id) {
  // console.log(searchQuery);
  try {
    let apiURL;
    const queryKeyURL = `?search=${searchQuery}&key=${key}`;
    const recipeIdKeyURL = `/${id}}?key=${key}`;
    const queryURL = `?search=${searchQuery}`;
    const recipeIdURL = `/${id}`;
    const keyURL = `?key=${key}`;

    if (searchQuery && key) {
      // Querying with key
      apiURL = `${allURLs}${queryKeyURL}`;
    } else if (id && key) {
      // Tab reload after browser exiting with key and recipe #id
      apiURL = `${allURLs}${recipeIdKeyURL}`;
    } else if (searchQuery) {
      // Querying without key
      apiURL = `${allURLs}${queryURL}`;
    } else if (id) {
      // Tab reload after browser exit event
      apiURL = `${allURLs}${recipeIdURL}`;
    } else if (key) {
      // POST request
      apiURL = `${allURLs}${keyURL}`;
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
