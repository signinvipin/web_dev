// All results render and display
import { parentTags } from './mainView.js';
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

export const emptyResultsContainer = function () {
  parentTags.resultsContainer.innerHTML = '';
};

/*
// By changing HTML Class Attribute 'hidden'
export const toggleResultsSpinner = function () {
  parentElements.resultsSpinner.classList.toggle('hidden');
};
*/
