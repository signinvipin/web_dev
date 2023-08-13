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
  generateUploadData,
  previewObject,
} from './model.js';
import {
  timeout,
  renderSpinner,
  emptyContainer,
  postData,
  deleteRecipe,
  recList,
} from './reusableView.js';
import { timePeriod, key } from './configuration.js';
import { searchMethods } from './searchView.js';
import { resultsViewMethods } from './resultsView.js';
import { renderError, errorMessage } from './errorView.js';
import { recipeViewMethods } from './recipeView.js';
import { bookmarkViewMethods } from './bookMarkView.js';
import { addRecipe } from './newrecipeView.js';

const recipeRenderFunction = async function (event) {
  event.preventDefault();
  console.log(event);
  // console.log(event.type);

  try {
    let id;

    console.log(window.location);
    console.log(window.location.href);

    // Take id from result or bookmark clicked
    if (event.type === 'click') {
      // select recipe in results and take href and return id
      id = resultsViewMethods.activateResult(event);

      // select recipe in results
      softDataStorage.currentRecipe = resultsViewMethods.resultsSelection(id);
      console.log(softDataStorage.currentRecipe);

      // Update/Add id to window location URL on recipe result click
      window.history.pushState(null, '', `#${id}`);
    }

    // Take id from URL in windows location
    if (event.type === 'load') {
      if (window.location.href === window.location.origin + '/') return;

      id = window.location.hash.slice(1);
      console.log('id ' + id);
    }

    if (!id || id === '') return;

    // loading spinner
    emptyContainer(parentTags.recipeContainer);
    renderSpinner(parentTags.recipeContainer);

    const recipeData = await recipeViewMethods.getRecipeData(key, id);

    softDataStorage.currentRecipeData = generateCurrentRecipeData(recipeData);
    // console.log(softDataStorage.currentRecipeData);

    // set currentRecipe when reload after browser close
    const reId = softDataStorage.currentRecipeData.recipeId;
    const usrKey = softDataStorage.currentRecipeData.userKey;
    const reTitle = softDataStorage.currentRecipeData.recipeTitle;
    const rePublisher = softDataStorage.currentRecipeData.recipePublisher;
    const imgURL = softDataStorage.currentRecipeData.imageURL;
    softDataStorage.currentRecipe = previewObject(
      reId,
      imgURL,
      rePublisher,
      reTitle,
      usrKey
    ); //pass current recipe object after creating it

    emptyContainer(parentTags.recipeContainer);
    // console.log(softDataStorage);
    recipeViewMethods.renderRecipe(
      softDataStorage.currentRecipeData.sourceURL,
      softDataStorage.currentRecipeData.recipePublisher,
      softDataStorage.currentRecipeData.recipeServings,
      softDataStorage.currentRecipeData.cookingTime,
      softDataStorage.currentRecipeData.recipeTitle,
      softDataStorage.currentRecipeData.imageURL,
      softDataStorage.currentRecipeData.userKey
    );

    initParentTags();
    bookmarkViewMethods.renderRecipeBookmarkIcon(softDataStorage);
    bookmarkViewMethods.btnClickListener(softDataStorage, recipeRenderFunction);

    recipeViewMethods.renderIngredients(
      softDataStorage.currentRecipeData.recipeIngredients
    );
    recipeViewMethods.addClickServings(
      softDataStorage.currentRecipeData.recipeIngredients
    );
  } catch (err) {
    console.error(err.message);
    emptyContainer(parentTags.recipeContainer);
    renderError(err.message, parentTags.recipeContainer);
  }
};

const recipeFunction = function () {
  // Add click, select, make selected active and retreive href '#hashvalue'

  document.querySelectorAll('.preview__link').forEach(el => {
    el.addEventListener('click', recipeRenderFunction);
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
    // console.log('length of searchQuery is ' + searchQuery.length);

    // test search input
    if (!searchQuery || searchQuery.length < 3) {
      emptyContainer(parentTags.resultsListContainer);
      renderError(errorMessage.noResults, parentTags.resultsListContainer);
      return;
    }

    // initialize parentTags
    // render spinner
    emptyContainer(parentTags.resultsListContainer);
    renderSpinner(parentTags.resultsListContainer);

    // Retreive data from server
    const arrData = await Promise.race([
      queryResults(searchQuery, key),
      timeout(timePeriod),
    ]);

    if (!arrData) throw new Error('Please connect to internet and try again!');
    // console.log(arrData);
    const getStatus = () => {
      const hasResults = arrData.flat().some(e => e === 'results');
      // console.log(arrData.flat()[3]);
      const hasResultsNum = arrData.flat()[3] === 0 ? false : true;
      if (hasResults && hasResultsNum) {
        return true;
      } else {
        return false;
      }
    };
    const status = getStatus();
    console.log(status);

    if (!status) throw new Error('Invalid search query. Please try again.');

    // Data destructuring
    const [, [, results], [, { recipes }]] = arrData;
    // console.log(results, recipes);

    // assign data to softDataStorage
    softDataStorage.allRecipeReceived = recipes;
    softDataStorage.recentRequestStatus = status;
    softDataStorage.resultsListView = generateResultsList(recipes);
    // console.log(softDataStorage);

    // render results data
    emptyContainer(parentTags.resultsListContainer);
    resultsFunction();
  } catch (err) {
    console.error(`${err}`);

    emptyContainer(parentTags.resultsListContainer);
    renderError(err, parentTags.resultsListContainer);
  }
};

const addRecipeFunction = async function () {
  try {
    // get Form Data as Object
    const dataArr = [...new FormData(parentTags.addRecipeForm)];
    let ObjectData = Object.fromEntries(dataArr);
    console.log(ObjectData);

    dataObject = generateUploadData(ObjectData);
    console.log(dataObject);

    // renderSpinner
    parentTags.addRecipeForm.remove();
    renderSpinner(parentTags.addRecipeWindow);
    initParentTags();

    // fetch post and view recipe using data Object from form
    const postRequest = await Promise.race([
      postData(key, dataObject),
      timeout(timePeriod),
    ]);
    const returnedData = postRequest;
    console.log(returnedData.status);
    console.log(returnedData.data.recipe); /////// work on data to recipeRenderFunction

    // upon success render success message, then restore form on close
    const messageSuccess = 'Your recipe has been succesfully created.';
    addRecipe.renderModalSuccess(messageSuccess, parentTags.addRecipeWindow);

    // render received data
    recipeRenderFunction(returnedData.data.recipe);
  } catch (err) {
    console.error(err);
    // upon error render error message, then restore form on close
    addRecipe.renderModalError(
      err.message,
      parentTags.addRecipeWindow,
      addRecipeFunction
    );

    // parentTags.loadError.remove();
  }
};

searchMethods.addSearchHandler(searchFunction);
addRecipe.addRecipeClickListener(addRecipeFunction);
addRecipe.addUploadHandler(addRecipeFunction);

window.addEventListener('load', recipeRenderFunction);

parentTags.headerLogo.addEventListener('click', () => {
  window.location.href = window.location.origin + '/';
  // window.location.reload;
});

// deleteRecipe(recList, key);
