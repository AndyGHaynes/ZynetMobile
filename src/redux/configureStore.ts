import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(...[
    loggerMiddleware,
    thunkMiddleware,
  ]);

  const composedEnhancers = compose(
    middlewareEnhancer,
  );

  return createStore(rootReducer, preloadedState, composedEnhancers);
};
