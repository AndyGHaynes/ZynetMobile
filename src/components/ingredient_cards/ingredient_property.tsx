import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { IngredientProperty } from '../../types/ingredients';
import styles from './.styles/ingredient_property';

interface Props {
  property: IngredientProperty,
}

export default ({ property }: Props) => (
  <View key={property.name} style={styles.ingredientProperty}>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>
        {property.name}
      </Text>
    </View>
    <View style={styles.valueContainer}>
      <Text style={styles.value}>
        {property.value}
      </Text>
    </View>
  </View>
);
