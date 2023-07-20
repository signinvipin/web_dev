// Search work in a class

import { parentTags } from './mainView.js';
// import { queryResults, softData } from './model.js';

// import { softDataStorage, generateResultsList } from './model.js';

class searchView {
  getQuery() {
    const searchQuery = parentTags.searchField.value;
    // if (!searchQuery) return;
    // console.log(searchQuery);
    return searchQuery;
  }

  clearSearchField() {
    parentTags.searchField.value = '';
    parentTags.searchField.blur();
  }

  focusSearchField() {
    parentTags.searchField.focus();
  }

  addSearchHandler(searchFunction) {
    parentTags.searchForm.addEventListener('submit', searchFunction);
  }
}

export const searchMethods = new searchView();
