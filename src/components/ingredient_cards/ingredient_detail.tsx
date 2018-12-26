import _ from 'lodash';
import React from 'react';
import {
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Ingredient,
} from '../../types/ingredients';
import { Icon, Row } from '../core';
import { Icons } from '../../theme';
import styles from './.styles/ingredient_detail';
import IngredientProperties from './ingredient_properties';

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
  'id',
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
            <Icon
              name='open-in-new'
              size={Icons.size.medium}
              style={styles.linkIcon}
            />
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
