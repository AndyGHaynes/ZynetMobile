import { put } from 'redux-saga/effects';

import { randomizeRecipe } from '../../utils/ingredients';
import { ActionTypes } from '../actions/recipe_card';
import { takeLatest } from '../../../node_modules/redux-saga/effects';

type RecipeLookup = {
  type: ActionTypes;
  recipeId: string;
}

function* loadRecipe({ recipeId }: RecipeLookup) {
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

export const lookupRecipe = takeLatest(ActionTypes.RECIPE_LOADING, loadRecipe);
