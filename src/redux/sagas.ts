import { all, takeLatest } from 'redux-saga/effects';

import ActionTypes from './actions/recipe_card/types';
import { lookupRecipe } from './actions/recipe_card'

export default function* root() {
  yield all([
    takeLatest(ActionTypes.RECIPE_LOADING, lookupRecipe),
  ]);
}
