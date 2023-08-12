// Keeps all recipe viewing Methods

import { getURL, timeout, getData } from './reusableView.js';
import { key, timePeriod } from './configuration.js';
import { softDataStorage } from './model.js';
import icons from '../img/icons.svg';
import { parentTags, initParentTags } from './mainView.js';
import { Fraction } from 'fractional';

class recipeView {
  async getRecipeData(key, id) {
    return await Promise.race([
      getData(getURL(undefined, key, id)),
      timeout(timePeriod),
      // timeout(0.5),
    ]);
  }

  renderRecipe(
    sourceURL,
    recipePublisher,
    recipeServings,
    cookingTime,
    recipeTitle,
    imageURL,
    data
  ) {
    const html = `<figure class="recipe__fig">
      <img src="${imageURL}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipeTitle}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipeServings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${data ? '' : 'hidden'}">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipePublisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${sourceURL}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
    parentTags.recipeContainer.insertAdjacentHTML('beforeend', html);
  }

  ingredientList(quantity, unit, description) {
    const html = `<li class="recipe__ingredient">
                    <svg class="recipe__icon">
                      <use href="${icons}#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${
                      quantity === null ? '' : quantity
                    }</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${unit}</span> ${description}
                    </div>
                  </li>`;
    parentTags.ingredientList.insertAdjacentHTML('beforeend', html);
  }

  renderIngredients(data, servingsCount = 4) {
    parentTags.ingredientList.innerHTML = '';
    for (let { quantity, unit, description } of data) {
      // console.log(quantity, unit, description);
      // fractional data conversion
      quantity =
        quantity === null ? '' : new Fraction((quantity / 4) * servingsCount);

      recipeViewMethods.ingredientList(quantity, unit, description);
    }
  }

  addClickServings(data) {
    let servingsCount = 4;
    const self = this;

    const updateQuantity = () => {
      parentTags.peopleServings.textContent = servingsCount;
      // console.log(parentTags.peopleServings.textContent);
      self.renderIngredients(data, servingsCount);
    };

    parentTags.btnServingIncrease.addEventListener('click', function () {
      servingsCount += 1;
      updateQuantity();
    });
    parentTags.btnServingDecrease.addEventListener('click', function () {
      if (servingsCount > 4) {
        servingsCount -= 1;
        updateQuantity();
      }
    });
  }
}

export const recipeViewMethods = new recipeView();
