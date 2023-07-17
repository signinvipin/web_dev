// Search work in a class

import { parentElements } from './mainView.js';
import { timeout } from './reusables.js';
import { queryResults, softData } from './model.js';
import { timePeriod } from './configuration.js';
import { softDataStorage } from './model.js';

class searchView {
  getQuery() {
    const searchQuery = parentElements.searchField.value;
    // if (!searchQuery) return;
    // console.log(searchQuery);
    return searchQuery;
  }

  clearSearchField() {
    parentElements.searchField.value = '';
  }

  addSearchHandler(searchFunction) {
    parentElements.searchForm.addEventListener('submit', searchFunction);
  }
}

export const searchMethods = new searchView();

// A callback function to search form submit event
export const searchFunction = async function (e) {
  try {
    // Prevents auto reloading of page after submit
    e.preventDefault();

    const searchQuery = searchMethods.getQuery();
    searchMethods.clearSearchField();
    console.log('length of searchQuery is ' + searchQuery.length);

    if (!searchQuery || searchQuery.length < 3) return;
    const arrData = await Promise.race([
      queryResults(searchQuery),
      timeout(timePeriod),
    ]);
    const [[, status], [, results], [, { recipes }]] = arrData;
    console.log(status);
    console.log(results);
    console.log(recipes);

    // assign data to softDataStorage
    softDataStorage.recipeList = recipes;
    softDataStorage.recentRequestStatus = status;

    console.log(softDataStorage);
  } catch (err) {
    console.error(`${err.message}`);
  }
};
