import { NavigationScreenProp } from 'react-navigation';

import { AppRoute } from '../constants/routes';

export const navigateToBuilder = (navigation: NavigationScreenProp) =>
  navigation.navigate(AppRoute.RECIPE_BUILDER);
