import { RecipeCard } from '../../types/recipe';
import ActionTypes from '../actions/recipe_card/types';

export default (state: RecipeCard = null, action): RecipeCard => {
  switch (action.type) {
    case ActionTypes.RECIPE_LOADED:
      return {
        ...state,
        error: false,
        loading: false,
        recipe: action.recipe,
      };
    case ActionTypes.RECIPE_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
        recipeId: action.recipeId,
      };
    case ActionTypes.RECIPE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
