import { combineReducers } from 'redux';

import recipeBuilder from './recipe_builder';
import recipeCard from './recipe_card';

export default combineReducers({
  recipeBuilder,
  recipeCard,
});
