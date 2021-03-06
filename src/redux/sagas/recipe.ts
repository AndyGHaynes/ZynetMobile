import { call, put, takeLatest } from 'redux-saga/effects';

import { randomizeRecipe } from '../../utils/ingredients';
import {
  loadRecipeError,
  recipeLoaded,
  RecipeAction,
} from '../actions/recipe';

type RecipeLookup = {
  type: RecipeAction;
  recipeId: string;
}

function* loadRecipe({ recipeId }: RecipeLookup) {
  if (recipeId === 'random') {
    const recipe = yield call(randomizeRecipe);
    yield put(recipeLoaded(recipe));
  } else {
    yield put(loadRecipeError(new Error('only random')));
  }
}

export const lookupRecipe = takeLatest(RecipeAction.RECIPE_LOADING, loadRecipe);
