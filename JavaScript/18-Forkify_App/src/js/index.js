// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import 'core-js/stable';
import 'regenerator-runtime';
import { parentTags, initParentTags } from './mainView.js';

import { queryResults, softDataStorage, generateResultsList } from './model.js';
import { timeout } from './reusables.js';
import { timePeriod } from './configuration.js';
import { searchMethods } from './searchView.js';
import { resultsViewMethods } from './resultsView.js';
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
      resultsViewMethods.emptyResultsContainer();
      renderError(errorMessage.noResults);
      return;
    }

    // initialize parentTags
    // initParentTags();
    // console.log(parentTags.errorResults);

    // render spinner
    resultsViewMethods.emptyResultsContainer();
    resultsViewMethods.renderSpinner();

    // Retreive data from server
    const arrData = await Promise.race([
      queryResults(searchQuery),
      timeout(timePeriod),
    ]);
    console.log(arrData);
    const status = arrData.flat().some(e => e === 'results');
    console.log(status);

    // Data destructuring
    const [, [, results], [, { recipes }]] = arrData;
    console.log(results, recipes);

    // assign data to softDataStorage
    softDataStorage.recipeReceived = recipes;
    softDataStorage.recentRequestStatus = status;
    softDataStorage.resultsListView = generateResultsList(recipes);
    console.log(softDataStorage);

    // render results data
    // initParentTags();
    resultsViewMethods.emptyResultsContainer();
    // resultsViewMethods.renderRecipeResults(softDataStorage.resultsListView);
    resultsViewMethods.addResultsHandler(softDataStorage.resultsListView);

    // console.log(softDataStorage);
  } catch (err) {
    console.error(`${err.message}`);
    // initParentTags();
    resultsViewMethods.emptyResultsContainer();
    renderError(err.message);
  }
};

const resultsPreviewFunction = function () {};

function init() {
  searchMethods.addSearchHandler(searchFunction);
}

init();
