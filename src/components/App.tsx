import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from '../redux/containers/app';
import { configureStore } from '../redux';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
