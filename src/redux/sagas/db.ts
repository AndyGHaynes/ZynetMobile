import { call, put, takeLatest } from 'redux-saga/effects';

import { initializeDB, syncDB } from '../../db';
import {
  ActionTypes,
  initIngredientDB,
  syncIngredientDB,
} from '../actions/db';

export function* initializeIngredientDB() {
  yield put(initIngredientDB());
  yield call(initializeDB);
  // TODO only attempt sync if DB out of date
  yield put(syncIngredientDB());
  yield put({ type: ActionTypes.INGREDIENT_DB_INITIALIZED });
}

function* synchronizeIngredientDB() {
  yield call(syncDB);
  yield put({ type: ActionTypes.INGREDIENT_DB_SYNCED });
}

export const syncIngredients = takeLatest(
  ActionTypes.SYNC_INGREDIENT_DB,
  synchronizeIngredientDB
);
