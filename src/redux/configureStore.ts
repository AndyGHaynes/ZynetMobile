import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';
import { AppState } from './types';

export default function configureStore(preloadedState?: AppState) {
  const middlewareEnhancer = applyMiddleware(
    loggerMiddleware,
    thunkMiddleware,
  );

  const composedEnhancers = compose(
    middlewareEnhancer,
  );

  return createStore(rootReducer, preloadedState, composedEnhancers);
};
