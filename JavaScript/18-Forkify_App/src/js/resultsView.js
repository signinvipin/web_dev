// All results render and display
import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';
import imgError from '../img/favicon.png';
import { emptyContainer } from './reusableView.js';
import { softDataStorage } from './model.js';

/** 'onerror' inline Jscript code for image load failure error handling, replacing failed image with set fallbackDefault.jpg.
 * If in case fallbackDefault.img is not present to avoid ininite loop, use:
 * 'this.error = null',  or
 * 'if (this.src != 'Default.jpg')',
 */

class resultsPreview {
  // By Code insertion to HTML

  renderRecipeResults(recpId, imageURL, recipeTitle, recipePublisher, userKey) {
    const html = `<li class="preview">
                      <a class="preview__link" href="#${recpId}">
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

  renderResults(data) {
    for (let {
      recpId,
      imageURL,
      recipeTitle,
      recipePublisher,
      userKey = undefined,
    } of data) {
      resultsViewMethods.renderRecipeResults(
        recpId,
        imageURL,
        recipeTitle,
        recipePublisher,
        userKey
      );
    }
  }

  activateResult(event) {
    document.querySelectorAll('.preview__link').forEach(item => {
      // console.log(e);
      item.classList.remove('preview__link--active');
    });

    const recipeTarget = event.target.closest('.preview__link');
    recipeTarget.classList.add('preview__link--active');

    const href = event.target.closest('.preview__link').getAttribute('href');

    // const href = window.location.hash;
    // console.log('href ' + href);
    const recipeId = href.slice(1);
    return recipeId;
  }

  resultsSelection(resultClickId) {
    const [currentRecipeOwner] = softDataStorage.resultsListView.filter(
      el => el.recpId === resultClickId
    );

    return currentRecipeOwner;
  }

  // render navigation
  resultsNavPrevNext(pageCounter, clickEventListener) {
    parentTags.paginationContainer.innerHTML = '';
    const html = `<button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>${'Page ' + (pageCounter - 1)}</span>
                  </button>
                  <button class="btn--inline pagination__btn--next">
                    <span>${'Page ' + (pageCounter + 1)}</span>
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                  </button>`;
    parentTags.paginationContainer.insertAdjacentHTML('afterbegin', html);
    initParentTags();
    clickEventListener();
  }

  resultsNavPrevious(pageCounter, clickEventListener) {
    parentTags.paginationContainer.innerHTML = '';

    const html = `<button class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>${'Page ' + (pageCounter - 1)}</span>
                  </button>`;
    parentTags.paginationContainer.insertAdjacentHTML('afterbegin', html);
    initParentTags();
    clickEventListener();
  }

  resultsNavNext(pageCounter, clickEventListener) {
    parentTags.paginationContainer.innerHTML = '';
    const html = `<button class="btn--inline pagination__btn--next">
                    <span>${'Page ' + (pageCounter + 1)}</span>
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                  </button>`;
    parentTags.paginationContainer.insertAdjacentHTML('afterbegin', html);
    initParentTags();
    clickEventListener();
  }

  paginateResults(data, pageCounter, clickEventListener, recipeFunction) {
    // console.log(data.length);
    const pageTotal = Math.ceil(data.length / 10);
    // console.log('Total Pages ' + pageTotal);
    const self = this;

    // if pageTotal is 4
    const pageEnd = pageTotal; // 4
    const pageStart = pageTotal - (pageTotal - 1); // 1
    // console.log('pageStart ' + pageStart + ', pageEnd ' + pageEnd);

    // 0-10 , 10-20...

    let startSlice = 10 * (pageCounter - 1);
    let endSlice = 10 * pageCounter;

    const renderData = () => {
      // console.log(startSlice, endSlice);
      const recipe = data.slice(startSlice, endSlice);
      // console.log(recipe);
      return recipe;
    };
    // console.log(renderData());
    // console.log(this);

    if (pageCounter === pageStart) {
      parentTags.resultsListContainer.innerHTML = '';
      this.renderResults(renderData());
      recipeFunction();
      if (pageCounter !== pageEnd)
        this.resultsNavNext(pageCounter, clickEventListener);
    }
    if (pageCounter === pageEnd) {
      parentTags.resultsListContainer.innerHTML = '';
      this.renderResults(renderData());
      recipeFunction();
      if (pageStart !== pageEnd)
        this.resultsNavPrevious(pageCounter, clickEventListener);
    }
    if (pageCounter > pageStart && pageCounter < pageEnd) {
      parentTags.resultsListContainer.innerHTML = '';
      this.renderResults(renderData());
      recipeFunction();
      this.resultsNavPrevNext(pageCounter, clickEventListener);
    }
  }
}

export const resultsViewMethods = new resultsPreview();
