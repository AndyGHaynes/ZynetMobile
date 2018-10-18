import {
  Container,
  StyleProvider,
} from 'native-base';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/custom';
import {
  configureStore,
} from '../redux';
import Navigator from './navigator';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(theme)}>
          <Container
            theme={theme}
            style={{
              backgroundColor: theme.defaultBackgroundColor,
            }}
          >
            <Navigator />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}
