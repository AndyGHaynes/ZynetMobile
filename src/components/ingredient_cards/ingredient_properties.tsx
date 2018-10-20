import _ from 'lodash';
import { Row } from 'native-base';
import React from 'react';
import {
  View,
} from 'react-native';

import { IngredientProperty as IngredientPropertyType } from '../../types/ingredients';
import styles from './.styles/ingredient_properties';
import IngredientProperty from './ingredient_property';

function sortProperties(properties: IngredientPropertyType[]) {
  return _.sortBy(
    properties,
    (property) => _.isNil(property.displayOrder)
      ? property.name
      : property.displayOrder
  );
}

export default ({ properties }: { properties: IngredientPropertyType[] }) => (
  <View style={styles.ingredientProperties}>
    {_.map(_.chunk(sortProperties(properties), 2), (propertyRow) => (
      <Row
        key={_.join(_.map(propertyRow, 'name'), '|')}
        style={styles.propertyRow}
      >
        {_.map(propertyRow, (property) => (
          <IngredientProperty
            key={`${property.key}|${property.value}`}
            property={property}
          />
        ))}
      </Row>
    ))}
  </View>
);
