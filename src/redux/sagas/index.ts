import { all } from 'redux-saga/effects';

import { initializeApp } from './app';
import { syncIngredients } from './db';
import { lookupRecipe } from './recipe';

export default function* root() {
  yield all([
    initializeApp,
    lookupRecipe,
    syncIngredients,
  ]);
}
