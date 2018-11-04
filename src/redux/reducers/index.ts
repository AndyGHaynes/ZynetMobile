import { combineReducers } from 'redux';

import db from './db';
import recipeCard from './recipe_card';

export default combineReducers({
  db,
  recipeCard,
});
