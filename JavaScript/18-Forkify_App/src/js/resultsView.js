// All results render and display
import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';

// By Code insertion to HTML
export const renderSpinner = function () {
  const html = `<div class="spinner">
                    <svg>
                    <!--<use href="src/img/icons.svg#icon-loader"></use>-->
                    <use href="${icons}#icon-loader"></use>
                    </svg>
                </div>`;
  parentTags.resultsContainer.insertAdjacentHTML('afterbegin', html);
};

export const renderRecipeResults = function () {
  const html = `<li class="preview">
                  <a class="preview__link preview__link--active" href="#23456">
                    <figure class="preview__fig">
                      <img src="src/img/test-1.jpg" alt="Test" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                      <p class="preview__publisher">The Pioneer Woman</p>
                      <div class="preview__user-generated">
                        <svg>
                          <use href="src/img/icons.svg#icon-user"></use>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>`;
  parentTags.resultsListContainer.insertAdjacentHTML('afterbegin', html);
};

// export const emptyResultsContainer = function () {
//   parentTags.resultsContainer.innerHTML = '';
// };

// show error - remove list, spinner
export const emptyResultsContainer = function () {
  initParentTags();
  parentTags.resultsListContainer.innerHTML = '';
  if (parentTags.spinnerResults) parentTags.spinnerResults.remove();
  if (parentTags.errorResults) parentTags.errorResults.remove();
};

/*
// By changing HTML Class Attribute 'hidden'
export const toggleResultsSpinner = function () {
  parentElements.spinnerResults.classList.toggle('hidden');
};
*/
