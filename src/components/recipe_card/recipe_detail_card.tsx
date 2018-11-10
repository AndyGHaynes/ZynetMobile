import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { Card } from '../core';
import styles from './.styles/recipe_detail_card';

export default (props) => (
  <Card>
    <View style={styles.recipeCard}>
      <Text style={styles.ingredientGroupLabel}>
        {props.label}
      </Text>
      {props.children}
    </View>
  </Card>
);
