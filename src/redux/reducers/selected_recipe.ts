import { RecipeCard } from '../../types/recipe';
import {
  RecipeAction,
  RecipeActionType,
} from '../actions/recipe';

export default (state: RecipeCard = null, action: RecipeActionType): RecipeCard => {
  switch (action.type) {
    case RecipeAction.RECIPE_LOADED:
      return {
        ...state,
        error: false,
        loading: false,
        recipe: action.recipe,
      };
    case RecipeAction.RECIPE_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
        recipeId: action.recipeId,
      };
    case RecipeAction.RECIPE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
