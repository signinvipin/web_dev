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
import { recipeViewMethods } from './recipeView.js';

const recipeFunction = function () {
  // Add click, select, make selected active and retreive href '#hashvalue'

  document.querySelectorAll('.preview__link').forEach(el => {
    const resultsRecipeSelection = function (event) {
      event.preventDefault();

      // select recipe in results
      // return href for softDataStorage
      softDataStorage.currentRecipe =
        resultsViewMethods.resultsSelection(event);
      console.log(softDataStorage.currentRecipe);

      // fetch n display recipe
      const fetchRecipe = async function () {
        try {
          softDataStorage.currentRecipeData =
            await recipeViewMethods.getRecipeData();
          console.log(softDataStorage.currentRecipeData);
        } catch (err) {
          console.error(err.message);
          // errorView.renderRecipeError();
        }
      };
      fetchRecipe();
    };

    el.addEventListener('click', resultsRecipeSelection);
  });
};

const resultsFunction = function () {
  resultsViewMethods.renderResults(softDataStorage.resultsListView);
  initParentTags();
};

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
      resultsViewMethods.emptyResultsContainer();
      renderError(errorMessage.noResults);
      return;
    }

    // initialize parentTags
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
    resultsViewMethods.emptyResultsContainer();
    resultsFunction();

    // select recipe and display
    recipeFunction();
  } catch (err) {
    console.error(`${err.message}`);

    resultsViewMethods.emptyResultsContainer();
    renderError(err.message);
  }
};

searchMethods.addSearchHandler(searchFunction);
