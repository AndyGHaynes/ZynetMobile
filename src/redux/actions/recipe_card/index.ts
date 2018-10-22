import { randomizeRecipe } from '../../../utils/ingredients';
import ActionTypes from './types';

export const lookupRecipe = (recipeId: string) => async (dispatch) => {
  dispatch({ type: ActionTypes.RECIPE_LOADING });
  if (recipeId === 'random') {
    dispatch({
      type: ActionTypes.RECIPE_LOADED,
      recipe: await randomizeRecipe(),
    });
  } else {
    dispatch({
      type: ActionTypes.RECIPE_LOADING_ERROR,
      errorMessage: 'only random',
    });
  }
};
