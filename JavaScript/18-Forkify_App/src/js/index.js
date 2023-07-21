// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import 'core-js/stable';
import 'regenerator-runtime';
import { parentTags, initParentTags } from './mainView.js';

import { queryResults, softDataStorage, generateResultsList } from './model.js';
import { timeout } from './reusables.js';
import { timePeriod } from './configuration.js';
import { searchMethods } from './searchView.js';
import {
  renderSpinner,
  emptyResultsContainer,
  renderRecipeResults,
} from './resultsView.js';
import { renderError, errorMessage } from './errorView.js';

// A callback function to search form submit event
const searchFunction = async function (e) {
  try {
    // Prevents auto reloading of page after submit
    e.preventDefault();

    // get search input
    const searchQuery = searchMethods.getQuery();
    searchMethods.clearSearchField();
    console.log('length of searchQuery is ' + searchQuery.length);

    // test search input
    if (!searchQuery || searchQuery.length < 3) {
      // initParentTags();
      emptyResultsContainer();
      renderError(errorMessage.noResults);
      return;
    }

    // initialize parentTags
    // initParentTags();
    // console.log(parentTags.errorResults);

    // render spinner
    emptyResultsContainer();
    renderSpinner();

    // Retreive data from server
    const arrData = await Promise.race([
      queryResults(searchQuery),
      timeout(timePeriod),
    ]);
    console.log(arrData);
    console.log(arrData.flat().some(e => e === 'results'));

    // Data destructuring
    const [[, status], [, results], [, { recipes }]] = arrData;
    console.log(status, results, recipes);

    // render results data
    // initParentTags();
    emptyResultsContainer();
    // renderRecipeResults();

    // assign data to softDataStorage
    softDataStorage.recipeList = recipes;
    softDataStorage.recentRequestStatus = status;
    softDataStorage.resultList = generateResultsList(recipes);
    console.log(softDataStorage);

    // console.log(softDataStorage);
  } catch (err) {
    console.error(`${err.message}`);
    // initParentTags();
    emptyResultsContainer();
    renderError(err.message);
  }
};

function init() {
  searchMethods.addSearchHandler(searchFunction);
}

init();
