import { createStackNavigator } from 'react-navigation';

import { AppRoute } from '../constants/routes';
import {
  RecipeCardContainer,
} from '../redux/containers';

export default createStackNavigator({
  [AppRoute.RecipeCard]: {
    screen: RecipeCardContainer,
  },
}, {
  initialRouteName: AppRoute.RecipeCard,
  headerMode: 'none',
});
