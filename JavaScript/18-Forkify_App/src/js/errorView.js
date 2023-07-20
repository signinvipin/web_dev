// Keeps all the error rendering

// Imports
import { parentTags } from './mainView.js';
import icons from '../img/icons.svg';

/*
// Code with toggle class 'hidden'
export const toggleErrorResults = function () {
  parentTags.errorResults.classList.toggle('hidden');
};
*/

export const errorMessage = {
  noResults: 'No recipes found for your query. Please try again!',
};

// Code with HTML insertion
export const renderError = function (error) {
  const html = `<div class="error">
                  <div>
                    <svg>
                      <!-- <use href="src/img/icons.svg#icon-alert-triangle"></use> -->
                      <use href= "${icons}#icon-alert-triangle"></use>
                    </svg>
                  </div>
                  <p>${error}</p>
                </div>`;
  parentTags.resultsContainer.insertAdjacentHTML('afterbegin', html);
};
