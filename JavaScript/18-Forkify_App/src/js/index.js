// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import 'core-js/stable';
import 'regenerator-runtime';
import { parentTags, initParentTags } from './mainView.js';

import {
  queryResults,
  softDataStorage,
  generateResultsList,
  generateCurrentRecipeData,
} from './model.js';
import { timeout, renderSpinner, emptyContainer } from './reusableView.js';
import { timePeriod } from './configuration.js';
import { searchMethods } from './searchView.js';
import { resultsViewMethods } from './resultsView.js';
import { renderError, errorMessage } from './errorView.js';
import { recipeViewMethods } from './recipeView.js';
import { bookmarkViewMethods } from './bookMarkView.js';

const resultsRecipeSelection = function (event) {
  event.preventDefault();

  // select recipe in results
  // return href for softDataStorage
  softDataStorage.currentRecipe = resultsViewMethods.resultsSelection(event);
  console.log(softDataStorage.currentRecipe);

  // loading spinner
  emptyContainer(parentTags.recipeContainer);
  renderSpinner(parentTags.recipeContainer);

  // fetch n display recipe
  const fetchRecipe = async function () {
    try {
      const recipeData = await recipeViewMethods.getRecipeData();
      softDataStorage.currentRecipeData = generateCurrentRecipeData(recipeData);
      console.log(softDataStorage.resultsListView);

      emptyContainer(parentTags.recipeContainer);
      console.log(softDataStorage);
      recipeViewMethods.renderRecipe(
        softDataStorage.currentRecipeData.sourceURL,
        softDataStorage.currentRecipeData.recipePublisher,
        softDataStorage.currentRecipeData.recipeServings,
        softDataStorage.currentRecipeData.cookingTime,
        softDataStorage.currentRecipeData.recipeTitle,
        softDataStorage.currentRecipeData.imageURL,
        softDataStorage.currentRecipe
      );

      initParentTags();
      bookmarkViewMethods.renderRecipeBookmarkIcon(softDataStorage);
      bookmarkViewMethods.btnClickListener(
        softDataStorage,
        resultsRecipeSelection
      );

      recipeViewMethods.renderIngredients(
        softDataStorage.currentRecipeData.recipeIngredients
      );
    } catch (err) {
      console.error(err.message);
      emptyContainer(parentTags.recipeContainer);
      renderError(err.message, parentTags.recipeContainer);
    }
  };
  fetchRecipe();
};

const recipeFunction = function () {
  // Add click, select, make selected active and retreive href '#hashvalue'

  document.querySelectorAll('.preview__link').forEach(el => {
    el.addEventListener('click', resultsRecipeSelection);
  });
};

const resultsFunction = function () {
  let pageCounter = 1;

  const clickEventListener = function () {
    // add event listener to page navigation buttons
    const btnClick = btn => {
      btn.addEventListener('click', function () {
        if (btn === parentTags.btnPrevious) {
          pageCounter -= 1;
        }
        if (btn === parentTags.btnNext) {
          pageCounter += 1;
        }
        resultsViewMethods.paginateResults(
          softDataStorage.resultsListView,
          pageCounter,
          clickEventListener,
          recipeFunction
        );
      });
    };

    if (parentTags.btnPrevious && parentTags.btnNext) {
      btnClick(parentTags.btnPrevious);
      btnClick(parentTags.btnNext);
    }
    if (parentTags.btnNext) {
      btnClick(parentTags.btnNext);
    }
    if (parentTags.btnPrevious) {
      btnClick(parentTags.btnPrevious);
    }

    // add event listener to recipes
  };

  resultsViewMethods.paginateResults(
    softDataStorage.resultsListView,
    pageCounter,
    clickEventListener,
    recipeFunction
  );
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
      emptyContainer(parentTags.resultsListContainer);
      renderError(errorMessage.noResults, parentTags.resultsContainer);
      return;
    }

    // initialize parentTags
    // render spinner
    emptyContainer(parentTags.resultsListContainer);
    renderSpinner(parentTags.resultsContainer);

    // Retreive data from server
    const arrData = await Promise.race([
      queryResults(searchQuery),
      timeout(timePeriod),
    ]);

    if (!arrData) throw new Error('Please connect to internet and try again!');
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
    emptyContainer(parentTags.resultsListContainer);
    resultsFunction();
  } catch (err) {
    console.error(`${err.message}`);

    emptyContainer(parentTags.resultsListContainer);
    renderError(err.message, parentTags.resultsContainer);
  }
};

searchMethods.addSearchHandler(searchFunction);
// bookmarkViewMethods;
