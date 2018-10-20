import {
  Button,
  Content,
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
    <Content style={styles.content}>
      <View>
        <Button
          block
          onPress={navigateTo(AppRoute.RECIPE_BUILDER)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            New Recipe
          </Text>
        </Button>
        <Button
          block
          onPress={navigateTo(AppRoute.RECIPE_CARD)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Random Recipe
          </Text>
        </Button>
      </View>
    </Content>
  );
}
