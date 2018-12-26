import { NavigationScreenProp } from 'react-navigation';

import { AppRoute } from '../constants/routes';

const navigateTo = (route: AppRoute) => (navigation: NavigationScreenProp) =>
  navigation.navigate(route);

export const navigateToBuilder = navigateTo(AppRoute.RECIPE_BUILDER);
export const navigateToRecipe = navigateTo(AppRoute.RECIPE_CARD);
