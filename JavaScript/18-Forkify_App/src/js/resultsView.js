// All results render and display
import { parentElements } from './mainView.js';
import icons from '../img/icons.svg';

export const renderSpinner = function () {
  //   parentElements.resultsContainer.innerHTML = '';
  const html = `<div class="spinner">
                    <svg>
                    <!--<use href="src/img/icons.svg#icon-loader"></use>-->
                    <use href="${icons}#icon-loader"></use>
                    </svg>
                </div>`;
  parentElements.resultsContainer.insertAdjacentHTML('afterbegin', html);
};
