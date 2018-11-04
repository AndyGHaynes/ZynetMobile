import { takeLatest } from 'redux-saga/effects';

import { ActionTypes } from '../actions/app';
import { initializeIngredientDB } from './db';

function* initApp() {
  yield initializeIngredientDB();
}

export const initializeApp = takeLatest(
  ActionTypes.INITIALIZE_APP,
  initApp
);
