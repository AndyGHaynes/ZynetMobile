import {
  Icon,
} from '../core';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { BuilderRoutes } from '../../constants/routes';
import { Colors, Icons } from '../../theme';
import {
  FermentablesContainer,
  HopsContainer,
  MashContainer,
  StyleContainer,
} from '../../redux/containers';

const tab = () => null;
export default createBottomTabNavigator({
  [BuilderRoutes.FERMENTABLES]: FermentablesContainer,
  [BuilderRoutes.HOPS]: HopsContainer,
  [BuilderRoutes.MASH]: MashContainer,
  [BuilderRoutes.FERMENTATION]: tab,
  [BuilderRoutes.STYLE]: StyleContainer,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const icon = {
        [BuilderRoutes.FERMENTABLES]: 'barley',
        [BuilderRoutes.HOPS]: 'hops',
        [BuilderRoutes.MASH]: 'pot',
        [BuilderRoutes.FERMENTATION]: 'flask',
        [BuilderRoutes.STYLE]: 'beer',
      }[navigation.state.routeName];
      return (
        <Icon
          color={focused ? Colors.blue : Colors.grayLight}
          name={icon}
          size={Icons.size.medium}
        />
      );
    },
  }),
  tabBarOptions: {
    activeBackgroundColor: Colors.grayDarker,
    inactiveBackgroundColor: Colors.grayDarker,
    showLabel: false,
  },
});
