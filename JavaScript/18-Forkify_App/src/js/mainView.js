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
    spinnerResults: document.querySelector('.spinner'),
    errorResults: document.querySelector('.error'),
    // previewLinks: document.querySelector('.preview__link'),
    previewLinksAll: document.querySelectorAll('.preview__link'),
  };
};

export const initParentTags = function () {
  parentTags = parentTagsFunction();
  console.log(parentTags);
};
initParentTags();

// const recipeContainer = document.querySelector('.recipe');
// const searchForm = document.querySelector('.search');
// const searchField = document.querySelector('.search__field');
