import { put } from 'redux-saga/effects';

import { randomizeRecipe } from '../../../utils/ingredients';
import ActionTypes from './types';

type RecipeLookup = {
  recipeId: string;
}

export function* lookupRecipe({ recipeId }: RecipeLookup) {
  if (recipeId === 'random') {
    yield put({
      type: ActionTypes.RECIPE_LOADED,
      recipe: yield randomizeRecipe(),
    });
  } else {
    yield put({
      type: ActionTypes.RECIPE_LOADING_ERROR,
      errorMessage: 'only random',
    });
  }
}
