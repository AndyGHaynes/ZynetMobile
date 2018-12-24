import { call, put } from 'redux-saga/effects';

import { randomizeRecipe } from '../../utils/ingredients';
import { RecipeCardAction } from '../actions/recipe_card';
import { takeLatest } from '../../../node_modules/redux-saga/effects';

type RecipeLookup = {
  type: RecipeCardAction;
  recipeId: string;
}

function* loadRecipe({ recipeId }: RecipeLookup) {
  if (recipeId === 'random') {
    const recipe = yield call(randomizeRecipe);
    yield put({
      type: RecipeCardAction.RECIPE_LOADED,
      recipe,
    });
  } else {
    yield put({
      type: RecipeCardAction.RECIPE_LOADING_ERROR,
      errorMessage: 'only random',
    });
  }
}

export const lookupRecipe = takeLatest(RecipeCardAction.RECIPE_LOADING, loadRecipe);
