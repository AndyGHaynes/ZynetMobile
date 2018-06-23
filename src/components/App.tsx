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
import { createStackNavigator } from 'react-navigation';

import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/custom';
import recipe from '../recipe';
import RecipeCard from './recipe_card';

const RootStack = createStackNavigator({
  Recipe: {
    screen: (props) => <RecipeCard recipe={recipe} />,
  },
}, {
  initialRouteName: 'Recipe',
  headerMode: 'none',
});

export default class App extends Component {
  render() {
    return (
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
          <RootStack />
        </Container>
      </StyleProvider>
    );
  }
}
