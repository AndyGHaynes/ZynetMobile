import { all } from 'redux-saga/effects';

import { lookupRecipe } from './recipe'

export default function* root() {
  yield all([
    lookupRecipe,
  ]);
}
