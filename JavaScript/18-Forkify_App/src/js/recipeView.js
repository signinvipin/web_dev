// Keeps all recipe viewing Methods

import { getURL, timeout, getData } from './reusables.js';
import { key, timePeriod } from './configuration.js';
import { softDataStorage } from './model.js';

class recipeView {
  async getRecipeData() {
    return await Promise.race([
      getData(getURL(undefined, key, softDataStorage.currentRecipe)),
      timeout(timePeriod),
    ]);
  }
}

export const recipeViewMethods = new recipeView();
