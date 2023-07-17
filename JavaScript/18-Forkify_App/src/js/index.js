// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
import 'core-js/stable';
import 'regenerator-runtime';
import { queryResults, softDataStorage } from './model.js';
import { searchMethods, searchFunction } from './searchView.js';

function init() {
  searchMethods.addSearchHandler(searchFunction);
}

init();
