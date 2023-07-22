// All results render and display
import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';
import imgError from '../img/favicon.png';

/** 'onerror' inline Jscript code for image load failure error handling, replacing failed image with set fallbackDefault.jpg.
 * If in case fallbackDefault.img is not present to avoid ininite loop, use:
 * 'this.error = null',  or
 * 'if (this.src != 'Default.jpg')',
 */

class resultsPreview {
  // By Code insertion to HTML
  renderSpinner() {
    const html = `<div class="spinner">
                      <svg>
                      <!--<use href="src/img/icons.svg#icon-loader"></use>-->
                      <use href="${icons}#icon-loader"></use>
                      </svg>
                  </div>`;
    parentTags.resultsContainer.insertAdjacentHTML('afterbegin', html);
  }

  renderRecipeResults(recipeList) {
    for (let {
      userId,
      imageURL,
      recipeTitle,
      recipePublisher,
      userKey = undefined,
    } of recipeList) {
      const html = `<li class="preview">
                      <a class="preview__link preview__link--active" href="#${userId}">
                        <figure class="preview__fig">
                          <img src="${imageURL}" onerror = "this.onerror = null; this.src = '${imgError}'" alt="${recipeTitle}" />
                        </figure>
                        <div class="preview__data">
                          <h4 class="preview__title">${recipeTitle}</h4>
                          <p class="preview__publisher">${recipePublisher}</p>
                          <div class="preview__user-generated ${
                            userKey === undefined ? 'hidden' : ''
                          }">
                            <svg>
                              <use href="${icons}#icon-user"></use>
                            </svg>
                          </div>
                        </div>
                      </a>  
                    </li>`;
      parentTags.resultsListContainer.insertAdjacentHTML('beforeend', html);
    }
  }

  addResultsHandler = function (recipeList) {
    this.renderRecipeResults(recipeList);
    initParentTags();
    console.log(parentTags.previewLinksAll);
  };

  // show error - remove list, spinner
  emptyResultsContainer() {
    initParentTags();
    parentTags.resultsListContainer.innerHTML = '';
    // document.querySelector('.search-results').previousSibling.remove();
    if (parentTags.spinnerResults) parentTags.spinnerResults.remove();
    if (parentTags.errorResults) parentTags.errorResults.remove();
  }
}

export const resultsViewMethods = new resultsPreview();
