import {
  applyMiddleware,
  createStore as createReduxStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import loggerMiddleware from './middleware/logger';
import Reactotron from './reactotron';
import rootReducer from './reducers';
import sagas from './sagas';
import { AppState } from './types';

const isDev = process.env.ENV === 'dev';
const createStore = isDev ? Reactotron.createStore : createReduxStore;
const sagaMonitor = isDev ? Reactotron.createSagaMonitor() : {};

export default function configureStore(preloadedState?: AppState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middleware = applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
  );

  const store = createStore(rootReducer, preloadedState, middleware);
  sagaMiddleware.run(sagas);
  return store;
};
