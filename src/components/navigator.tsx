import React from 'react';
import { createStackNavigator } from 'react-navigation';

import {
  RecipeCardContainer,
} from '../redux/containers';

enum Route {
  Recipe,
}

export default createStackNavigator({
  [Route.Recipe]: {
    screen: (props) => <RecipeCardContainer />,
  },
}, {
  initialRouteName: Route.Recipe,
  headerMode: 'none',
});
