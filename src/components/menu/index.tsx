import {
  Button,
  Content,
} from 'native-base';
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { AppRoute } from '../../constants/routes';
import { NavigationProps } from '../../types/navigation';

const styles = StyleSheet.create({
  content: {
    padding: 4,
  },
  button: {
    marginHorizontal: 2,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default class RootMenu extends PureComponent<NavigationProps> {
  render() {
    const { navigation } = this.props;
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
}
