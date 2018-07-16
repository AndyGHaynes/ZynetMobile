import { createStackNavigator } from 'react-navigation';

import { AppRoute } from '../constants/routes';
import {
  RecipeCardContainer,
} from '../redux/containers';
import { RecipeBuilderNavigation } from './recipe_builder/index';
import { Colors } from './core';
import RootMenu from './menu';

export default createStackNavigator({
  [AppRoute.RECIPE_BUILDER]: {
    navigationOptions: {
      title: 'Recipe Builder',
    },
    screen: RecipeBuilderNavigation,
  },
  [AppRoute.RECIPE_CARD]: {
    screen: RecipeCardContainer,
  },
  [AppRoute.ROOT_MENU]: {
    navigationOptions: {
      title: 'Home',
    },
    screen: RootMenu,
  },
}, {
  initialRouteName: AppRoute.ROOT_MENU,
  navigationOptions: {
    title: 'Zymancer',
    headerStyle: {
      backgroundColor: Colors.grayDarker,
    },
    headerTintColor: Colors.blue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
