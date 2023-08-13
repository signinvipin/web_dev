// keeps Bookmark functionality Code

import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';

class bookmarkView {
  _message = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  insertSmileMessage(_message, containerHtml) {
    // parentTags.btnNavBookmarkList.innerHTML = '';
    containerHtml.innerHTML = '';
    const htmlMessage = `<div class="message">
                          <div>
                            <svg>
                              <use href="${icons}#icon-smile"></use>
                            </svg>
                          </div>
                          <p>
                            ${this._message}
                          </p>
                        </div>`;
    containerHtml.insertAdjacentHTML('afterbegin', htmlMessage);
  }

  insertBookmarks(data) {
    const htmlBookmark = `<li class="preview">
                    <a class="preview__link" href="#${data.recpId}">
                      <figure class="preview__fig">
                        <img src="${data.imageURL}" alt="${data.recipeTitle}" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__name">${data.recipeTitle}</h4>
                        <p class="preview__publisher">${data.recipePublisher}</p>
                      </div>
                    </a>
                  </li>`;
    parentTags.btnNavBookmarkList.insertAdjacentHTML(
      'afterbegin',
      htmlBookmark
    );
  }

  renderBookmarkList(data, recipeRenderFunction) {
    if (data.bookmarksList.size > 0) {
      parentTags.btnNavBookmarkList.innerHTML = '';

      for (let bookmark of data.bookmarksList.values()) {
        console.log(bookmark);
        this.insertBookmarks(bookmark);
      }

      document.querySelectorAll('.preview__link').forEach(el =>
        el.addEventListener('click', function (event) {
          event.preventDefault();
          // resultsRecipeSelection(event);
          recipeRenderFunction(event);
        })
      );
    }
    if (data.bookmarksList.size === 0) {
      this.insertSmileMessage(parentTags.btnNavBookmarkList);
    }
    initParentTags();
  }

  recipeBookmarkedCheck(data) {
    console.log('bookmark entries ' + data.bookmarksList.size);

    // check if recipe present in Set or not
    return data.bookmarksList.has(data.currentRecipe);
  }

  renderRecipeBookmarkIcon(data) {
    const htmlBookmarkFill = `<svg class="">
                                <use href="${icons}#icon-bookmark-fill"></use>
                              </svg>`;
    const htmlBookmark = `<svg class="">
                              <use href="${icons}#icon-bookmark"></use>
                          </svg>`;

    const recipePresent = this.recipeBookmarkedCheck(data);
    console.log('recipePresent - ' + recipePresent);

    if (recipePresent) parentTags.btnBookmark.innerHTML = htmlBookmarkFill;
    if (!recipePresent) parentTags.btnBookmark.innerHTML = htmlBookmark;

    initParentTags();
  }

  removeBookmarkRecipe(data) {
    // remove item from Set
    data.bookmarksList.delete(data.currentRecipe);
    console.log(data.bookmarksList);
  }

  btnClickListener(data, resultsRecipeSelection) {
    const self = this;
    parentTags.btnBookmark.addEventListener('click', function () {
      const iconType =
        parentTags.btnBookmark.firstElementChild.firstElementChild
          .getAttribute('href')
          .slice(55);

      if (iconType === 'icon-bookmark-fill') {
        self.removeBookmarkRecipe(data);
        self.renderRecipeBookmarkIcon(data);
        self.renderBookmarkList(data, resultsRecipeSelection);
        console.log('remove bookmark triggered');
        return;
      }

      data.bookmarksList.add(data.currentRecipe);
      // console.log(data.bookmarksList);

      self.renderRecipeBookmarkIcon(data);
      self.renderBookmarkList(data, resultsRecipeSelection);
      console.log('add bookmark triggered');
      return;
    });
  }
}
export const bookmarkViewMethods = new bookmarkView();
