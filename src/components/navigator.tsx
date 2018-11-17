import { createStackNavigator } from 'react-navigation';

import { AppRoute } from '../constants/routes';
import {
  RecipeCardContainer,
} from '../redux/containers';
import { Colors } from '../theme';
import RootMenu from './menu';
import { RecipeBuilderNavigation } from './recipe_builder/index';

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
  cardStyle: {
    backgroundColor: Colors.white,
  },
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
