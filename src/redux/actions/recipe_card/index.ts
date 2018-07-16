import { randomizeRecipe } from '../../../constants/ingredients';
import ActionTypes from './types';

export const lookupRecipe = (recipeId: string) => (dispatch) => {
  dispatch({ type: ActionTypes.RECIPE_LOADING });
  if (recipeId === 'random') {
    dispatch({
      type: ActionTypes.RECIPE_LOADED,
      recipe: randomizeRecipe(),
    });
  } else {
    dispatch({
      type: ActionTypes.RECIPE_LOADING_ERROR,
      errorMessage: 'only random',
    });
  }
};
