// Rendering of view/content to DOM
// take data and render

export let parentTags;
const parentTagsFunction = function () {
  return {
    recipeContainer: document.querySelector('.recipe'),
    searchForm: document.querySelector('.search'),
    searchField: document.querySelector('.search__field'),
    resultsContainer: document.querySelector('.search-results'),
    resultsListContainer: document.querySelector('.results'),
    loadSpinner: document.querySelector('.spinner'),
    loadError: document.querySelector('.error'),
    previewLinksAll: document.querySelectorAll('.preview__link'),
    ingredientList: document.querySelector('.recipe__ingredient-list'),
    btnPrevious: document.querySelector('.pagination__btn--prev'),
    btnNext: document.querySelector('.pagination__btn--next'),
    paginationContainer: document.querySelector('.pagination'),
    btnBookmark: document.querySelector('.btn--round'),
    btnNavBookmarkList: document.querySelector('.bookmarks__list'),
    btnServingIncrease: document.querySelector('.btn--increase-servings'),
    btnServingDecrease: document.querySelector('.btn--decrease-servings'),
    peopleServings: document.querySelector('.recipe__info-data--people'),
    addRecipeWindow: document.querySelector('.add-recipe-window'),
    btnNavAddRecipe: document.querySelector('.nav__btn--add-recipe'),
    btnCloseAddRecipe: document.querySelector('.btn--close-modal'),
    addRecipeOverlay: document.querySelector('.overlay'),
    addRecipeForm: document.querySelector('.upload'),
    addRecipeSuccessMessage: document.querySelector('.message'),
    headerLogo: document.querySelector('.header__logo'),
  };
};

export const initParentTags = function () {
  parentTags = parentTagsFunction();
  // console.log(parentTags);
};
initParentTags();
