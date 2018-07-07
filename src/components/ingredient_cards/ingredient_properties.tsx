import _ from 'lodash';
import { Row } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { IngredientProperty } from '../../types/ingredients';
import { Colors } from '../core';

const styles = StyleSheet.create({
  ingredientProperties: {
    flex: 1,
    padding: 8,
  },
  ingredientProperty: {
    flex: 1,
    paddingHorizontal: 8,
  },
  name: {
    color: Colors.gray,
    fontWeight: '700',
  },
  nameContainer: {
    position: 'relative',
    top: 1,
    left: 1,
  },
  propertyRow: {
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
  },
  valueContainer: {},
});

function sortProperties(properties: IngredientProperty[]) {
  return _.sortBy(
    properties,
    (property) => _.isNil(property.displayOrder)
      ? property.name
      : property.displayOrder
  );
}

const ingredientProperty = (property: IngredientProperty) => (
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

export default ({ properties }: { properties: IngredientProperty[] }) => (
  <View style={styles.ingredientProperties}>
    {_.map(_.chunk(sortProperties(properties), 2), (propertyRow) => (
      <Row
        key={_.join(_.map(propertyRow, 'name'), '|')}
        style={styles.propertyRow}
      >
        {_.map(propertyRow, ingredientProperty)}
      </Row>
    ))}
  </View>
);
