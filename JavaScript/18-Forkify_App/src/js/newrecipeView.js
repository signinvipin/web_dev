// send and create new recipe item to server

import { parentTags, initParentTags } from './mainView.js';
import icons from '../img/icons.svg';
import { successSmileMessage } from './reusableView.js';

class recipeCreate {
  renderForm(containerHtml) {
    const html = `<form class="upload">
                    <div class="upload__column">
                      <h3 class="upload__heading">Recipe data</h3>
                      <label>Title</label>
                      <input value="TEST" required name="title" type="text" />
                      <label>URL</label>
                      <input value="TEST" required name="sourceUrl" type="text" />
                      <label>Image URL</label>
                      <input value="TEST" required name="image" type="text" />
                      <label>Publisher</label>
                      <input value="TEST" required name="publisher" type="text" />
                      <label>Prep time</label>
                      <input value="23" required name="cookingTime" type="number" />
                      <label>Servings</label>
                      <input value="23" required name="servings" type="number" />
                    </div>

                    <div class="upload__column">
                      <h3 class="upload__heading">Ingredients</h3>
                      <label>Ingredient 1</label>
                      <input
                        value="0.5,kg,Rice"
                        type="text"
                        required
                        name="ingredient-1"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                      <label>Ingredient 2</label>
                      <input
                        value="1,,Avocado"
                        type="text"
                        name="ingredient-2"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                      <label>Ingredient 3</label>
                      <input
                        value=",,salt"
                        type="text"
                        name="ingredient-3"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                      <label>Ingredient 4</label>
                      <input
                        type="text"
                        name="ingredient-4"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                      <label>Ingredient 5</label>
                      <input
                        type="text"
                        name="ingredient-5"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                      <label>Ingredient 6</label>
                      <input
                        type="text"
                        name="ingredient-6"
                        placeholder="Format: 'Quantity,Unit,Description'"
                      />
                    </div>

                    <button class="btn upload__btn">
                      <svg>
                        <use href="${icons}#icon-upload-cloud"></use>
                      </svg>
                      <span>Upload</span>
                    </button>
                  </form>`;
    containerHtml.insertAdjacentHTML('beforeend', html);
  }

  renderModalError(error, containerHtml, addRecipeFunction) {
    // parentTags.addRecipeForm.remove();
    parentTags.loadSpinner.remove();

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
    initParentTags();

    // const restoreForm = function (e) {
    //   e.preventDefault();

    //   if (parentTags.loadError) parentTags.loadError.remove();

    //   if (!parentTags.addRecipeForm) {
    //     addRecipe.renderForm(parentTags.addRecipeWindow);
    //     initParentTags();
    //     addRecipe.addUploadHandler(addRecipeFunction);
    //     console.log('reDone');
    //   }
    //   console.log('removeDone');
    // };

    // // parentTags.btnCloseAddRecipe.removeEventListener('click', restoreForm);
    // parentTags.btnCloseAddRecipe.addEventListener('click', restoreForm);

    // // parentTags.addRecipeOverlay.removeEventListener('click', restoreForm);
    // parentTags.addRecipeOverlay.addEventListener('click', restoreForm);
  }

  renderModalSuccess(message, containerHtml) {
    // parentTags.addRecipeForm.remove();
    parentTags.loadSpinner.remove();

    const htmlMessage = `<div class="message">
                          <div>
                            <svg>
                              <use href="${icons}#icon-smile"></use>
                            </svg>
                          </div>
                          <p>
                            ${message}
                          </p>
                        </div>`;
    containerHtml.insertAdjacentHTML('afterbegin', htmlMessage);
    initParentTags();

    // const restoreForm = function (e) {
    //   e.preventDefault();

    //   if (parentTags.addRecipeSuccessMessage)
    //     parentTags.addRecipeSuccessMessage.remove();

    //   if (!parentTags.addRecipeForm) {
    //     addRecipe.renderForm(parentTags.addRecipeWindow);
    //     initParentTags();
    //     addRecipe.addUploadHandler(addRecipeFunction);
    //   }
    //   console.log('removeDone');
    // };
    // parentTags.btnCloseAddRecipe.addEventListener('click', restoreForm);
    // parentTags.addRecipeOverlay.addEventListener('click', restoreForm);
  }

  addUploadHandler(func) {
    parentTags.addRecipeForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      console.log(e);
      await func();
    });
  }

  toggleWindowOverlay() {
    parentTags.addRecipeWindow.classList.toggle('hidden');
    parentTags.addRecipeOverlay.classList.toggle('hidden');
  }

  eventListenerToElement(htmlElement, addRecipeFunction) {
    const self = this;
    // console.log(this);
    // console.log(htmlElement);
    htmlElement.addEventListener('click', function (event) {
      event.preventDefault();

      if (htmlElement === parentTags.btnNavAddRecipe)
        self.toggleWindowOverlay();

      if (
        htmlElement === parentTags.btnCloseAddRecipe ||
        htmlElement === parentTags.addRecipeOverlay
      ) {
        self.toggleWindowOverlay();

        if (parentTags.addRecipeSuccessMessage)
          parentTags.addRecipeSuccessMessage.remove();
        if (parentTags.loadError) parentTags.loadError.remove();

        if (!parentTags.addRecipeForm) {
          addRecipe.renderForm(parentTags.addRecipeWindow);
          initParentTags();
          addRecipe.addUploadHandler(addRecipeFunction);
        }
        console.log('removeDone');
      }
    });
  }

  addRecipeClickListener(addRecipeFunction) {
    const self = this;
    this.eventListenerToElement(parentTags.btnNavAddRecipe, addRecipeFunction);
    this.eventListenerToElement(
      parentTags.btnCloseAddRecipe,
      addRecipeFunction
    );
    this.eventListenerToElement(parentTags.addRecipeOverlay, addRecipeFunction);
  }
}

export const addRecipe = new recipeCreate();
