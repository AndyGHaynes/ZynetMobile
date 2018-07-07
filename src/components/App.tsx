import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  StyleProvider,
  Title,
} from 'native-base';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/custom';
import {
  configureStore,
} from '../redux';
import Navigator from './navigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore({ recipe: randomizeRecipe() })}>
        <StyleProvider style={getTheme(theme)}>
          <Container
            theme={theme}
            style={{
              backgroundColor: theme.defaultBackgroundColor
            }}
          >
            <Header>
              <Left>
                <Button transparent>
                  <Icon active name='arrow-dropleft' />
                </Button>
              </Left>
              <Body>
                <Title>Zynet</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name='menu' />
                </Button>
              </Right>
            </Header>
            <Navigator />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}
