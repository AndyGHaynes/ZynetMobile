import { RecipeCard } from '../../types/recipe';
import { RecipeCardAction } from '../actions/recipe_card';

export default (state: RecipeCard = null, action): RecipeCard => {
  switch (action.type) {
    case RecipeCardAction.RECIPE_LOADED:
      return {
        ...state,
        error: false,
        loading: false,
        recipe: action.recipe,
      };
    case RecipeCardAction.RECIPE_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
        recipeId: action.recipeId,
      };
    case RecipeCardAction.RECIPE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
