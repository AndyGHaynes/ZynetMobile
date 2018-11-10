import _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Fermentable as FermentableType } from '../../types/ingredients';
import { Row } from '../core';
import styles from './.styles/fermentable';
import IngredientDetail from './ingredient_detail';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement'

interface FermentableProps {
  fermentable: FermentableType;
  fraction: number;
}

export default ({ fermentable, fraction }: FermentableProps) => (
  <Row>
    <View style={styles.colorBarContainer}>
      <View
        style={[styles.colorBar, {
          backgroundColor: fermentable.color,
        }]}
      />
    </View>
    <View style={styles.headerCell}>
      <IngredientHeader {..._.pick(fermentable, 'mfg', 'name')}>
        <Text style={styles.detail}>
          {fermentable.gravity && fermentable.gravity.toString()}
        </Text>
      </IngredientHeader>
    </View>
    <View style={styles.detailCell}>
      <IngredientDetail>
        <Measurement {...fermentable.weight} />
        <Text style={styles.detail}>
          {_.round(100 * fraction, 1)}%
        </Text>
      </IngredientDetail>
    </View>
  </Row>
);
