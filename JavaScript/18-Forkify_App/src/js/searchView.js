// Search work in a class

import { parentElements } from './mainView.js';
// import { queryResults, softData } from './model.js';

// import { softDataStorage, generateResultsList } from './model.js';

class searchView {
  getQuery() {
    const searchQuery = parentElements.searchField.value;
    // if (!searchQuery) return;
    // console.log(searchQuery);
    return searchQuery;
  }

  clearSearchField() {
    parentElements.searchField.value = '';
  }

  addSearchHandler(searchFunction) {
    parentElements.searchForm.addEventListener('submit', searchFunction);
  }
}

export const searchMethods = new searchView();
