// keeps Bookmark functionality Code

import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';

class bookmarkView {
  _message = `No bookmarks yet. Find a nice recipe and bookmark it :)`;

  insertSmileMessage(_message, containerHtml) {
    // parentTags.btnNavBookmarkList.innerHTML = '';
    console.log(containerHtml);
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
    console.log(parentTags.btnNavBookmarkList);
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
    initParentTags();
    console.log(parentTags.btnNavBookmarkList);
    console.log(data.bookmarksList);
    console.log(this);

    if (data.bookmarksList.length > 0) {
      parentTags.btnNavBookmarkList.innerHTML = '';
      console.log(this);
      for (let bookmark of data.bookmarksList) {
        console.log(bookmark);
        console.log(this);
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
    if (data.bookmarksList.length === 0) {
      this.insertSmileMessage(this._message, parentTags.btnNavBookmarkList);
    }
    initParentTags();
  }

  recipeBookmarkedCheck(data) {
    console.log('bookmark entries ' + data.bookmarksList.length);
    // const arrBArray.from(data.bookmarksList));

    // check if recipe present or not
    if (data.bookmarksList.length > 0) {
      for (let bmk of data.bookmarksList) {
        if (bmk.recpId === data.currentRecipe.recpId) {
          console.log('recipe match true');
          return true;
        } else {
          console.log('recipe match false');
          return false;
        }
      }
    } else {
      console.log('recipe length false');
      return false;
    }
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
    let n = 0;
    data.bookmarksList.forEach(bmk => {
      if (data.currentRecipe.recpId === bmk.recpId) {
        data.bookmarksList.splice(n, 1);
      }
      n += 1;
    });
    console.log(data.bookmarksList);
  }

  btnClickListener(data, resultsRecipeSelection, backupData) {
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
        backupData(data);
        console.log('remove bookmark triggered');
        return;
      }

      // console.log(data.currentRecipe);
      data.bookmarksList.push(data.currentRecipe);
      console.log(data.bookmarksList);

      self.renderRecipeBookmarkIcon(data);
      self.renderBookmarkList(data, resultsRecipeSelection);
      backupData(data);
      console.log('add bookmark triggered');
      return;
    });
  }
}
export const bookmarkViewMethods = new bookmarkView();
