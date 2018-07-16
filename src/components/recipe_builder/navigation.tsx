import {
  Icon,
} from 'native-base';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { BuilderRoutes } from '../../constants/routes';
import { Colors } from '../core';

const tab = () => null;
export default createBottomTabNavigator({
  [BuilderRoutes.FERMENTABLES]: tab,
  [BuilderRoutes.HOPS]: tab,
  [BuilderRoutes.MASH]: tab,
  [BuilderRoutes.FERMENTATION]: tab,
  [BuilderRoutes.STYLE]: tab,
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const icon = {
        [BuilderRoutes.FERMENTABLES]: 'barley',
        [BuilderRoutes.HOPS]: 'hops',
        [BuilderRoutes.MASH]: 'pot',
        [BuilderRoutes.FERMENTATION]: 'flask',
        [BuilderRoutes.STYLE]: 'glass-mug',
      }[navigation.state.routeName];
      return <Icon
        name={icon}
        style={{ color: focused ? Colors.blue : Colors.grayLight }}
        type='MaterialCommunityIcons'
      />;
    },
  }),
  tabBarOptions: {
    activeBackgroundColor: Colors.grayDarker,
    inactiveBackgroundColor: Colors.grayDarker,
    showLabel: false,
  },
});
