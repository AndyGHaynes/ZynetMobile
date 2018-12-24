import { combineReducers } from 'redux';

import activeRecipe from './active_recipe';
import db from './db';
import selectedRecipe from './selected_recipe';

export default combineReducers({
  activeRecipe,
  db,
  selectedRecipe,
});
