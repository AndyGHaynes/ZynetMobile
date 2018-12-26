import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationProps } from '../../types/navigation';
import {
  navigateToBuilder,
  navigateToRecipe,
} from '../../utils/navigation';
import { Button } from '../core';
import styles from './.styles/menu';

export default ({ navigation }: NavigationProps) => {
  return (
    <View style={styles.content}>
      <View style={styles.button}>
        <Button onPress={() => navigateToBuilder(navigation)}>
          <Text style={styles.buttonText}>
            New Recipe
          </Text>
        </Button>
      </View>
      <View style={styles.button}>
        <Button onPress={() => navigateToRecipe(navigation)}>
          <Text style={styles.buttonText}>
            Random Recipe
          </Text>
        </Button>
      </View>
    </View>
  );
}
