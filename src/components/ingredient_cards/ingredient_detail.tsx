import _ from 'lodash';
import {
  Icon,
  Row,
} from 'native-base';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Ingredient,
} from '../../types/ingredients';
import {
  Colors,
} from '../core';
import IngredientProperties from './ingredient_properties';

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
    fontWeight: '700',
  },
  categoryContainer: {
    justifyContent: 'center',
  },
  description: {
    justifyContent: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  ingredientBody: {
    padding: 8,
  },
  ingredientCard: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkIcon: {
    color: Colors.grayDark,
    fontSize: 14,
    marginBottom: 14,
    position: 'relative',
    left: 4,
    top: 5,
  },
  separator: {
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    marginBottom: 6,
  },
  subDescription: {
    paddingTop: 0,
  },
  url: {
    fontSize: 18,
  },
});

interface IngredientDetail {
  category: string;
  excludedProperties: string[];
  ingredient: Ingredient;
  linkText?: string;
  propertyMask?: { [key: string]: string };
  subDescription: string;
}

const defaultExcludedProperties = [
  'characteristics',
  'description',
  'mfg',
  'name',
  'style',
  'styles',
  'url',
];

export default ({
  category,
  excludedProperties,
  ingredient,
  linkText,
  propertyMask,
  subDescription,
}: IngredientDetail) => {
  const ingredientProperties = _.filter(_.map(
    Object.keys(
      _.omit(
        ingredient,
        ...defaultExcludedProperties,
        ...excludedProperties,
      )
    ),
    (key, i) => ({
      name: _.get(propertyMask, key) || key,
      displayOrder: i,
      value: ingredient[key],
    })
  ), 'value');

  return (
    <View style={styles.ingredientCard}>
      <View style={styles.ingredientBody}>
        <TouchableOpacity
          onPress={() => ingredient.url && Linking.openURL(ingredient.url)}
        >
          <View style={styles.linkContainer}>
            <Text style={styles.url}>
              {linkText || ingredient.mfg}
            </Text>
            <Icon name='open' style={styles.linkIcon} />
          </View>
        </TouchableOpacity>
        {ingredient.description && (
          <View style={styles.descriptionContainer}>
            {ingredient.description && (
              <Text style={styles.description}>
                {ingredient.description}
              </Text>
            )}
          </View>
        )}
        {subDescription && (
          <View
            style={[
              styles.descriptionContainer,
              ingredient.description && styles.subDescription,
            ]}
          >
            {subDescription && (
              <Text style={styles.description}>
                {subDescription}
              </Text>
            )}
          </View>
        )}
        <View style={styles.separator} />
        {category && (
          <Row style={styles.categoryContainer}>
            <Text style={styles.category}>
              {category}
            </Text>
          </Row>
        )}
        <IngredientProperties properties={ingredientProperties} />
      </View>
    </View>
  );
}
