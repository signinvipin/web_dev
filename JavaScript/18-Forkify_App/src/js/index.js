// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import 'core-js/stable';
import 'regenerator-runtime';
import { queryResults, softDataStorage, generateResultsList } from './model.js';
import { timeout } from './reusables.js';
import { timePeriod } from './configuration.js';
import { searchMethods } from './searchView.js';
import { renderSpinner } from './resultsView.js';

// A callback function to search form submit event
const searchFunction = async function (e) {
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
    // console.log(status, results, recipes);

    // assign data to softDataStorage
    softDataStorage.recipeList = recipes;
    softDataStorage.recentRequestStatus = status;
    softDataStorage.resultList = generateResultsList(recipes);

    // console.log(softDataStorage);
  } catch (err) {
    console.error(`${err.message}`);
  }
};

renderSpinner();

function init() {
  searchMethods.addSearchHandler(searchFunction);
}

init();
