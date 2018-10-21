import {
  Button,
} from 'native-base';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { AppRoute } from '../../constants/routes';
import { NavigationProps } from '../../types/navigation';
import styles from './.styles/menu';

export default (props: NavigationProps) => {
  const { navigation } = props;
  const navigateTo = (route: string) => () => navigation.navigate(route);
  return (
    <View style={styles.content}>
      <View style={styles.button}>
        <Button
          block
          onPress={navigateTo(AppRoute.RECIPE_BUILDER)}
        >
          <Text style={styles.buttonText}>
            New Recipe
          </Text>
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          block
          onPress={navigateTo(AppRoute.RECIPE_CARD)}
        >
          <Text style={styles.buttonText}>
            Random Recipe
          </Text>
        </Button>
      </View>
    </View>
  );
}
