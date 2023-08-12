// Keeps all the error rendering

// Imports
import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';
import { addRecipe } from './newrecipeView.js';

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
export const renderError = function (error, containerHtml) {
  containerHtml.innerHTML = '';
  const html = `<div class="error">
                  <div>
                    <svg>
                      <!-- <use href="src/img/icons.svg#icon-alert-triangle"></use> -->
                      <use href= "${icons}#icon-alert-triangle"></use>
                    </svg>
                  </div>
                  <p>${error}</p>
                </div>`;
  containerHtml.insertAdjacentHTML('afterbegin', html);
};
