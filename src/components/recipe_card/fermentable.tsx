import _ from 'lodash';
import {
  Row,
  View,
} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
} from '../core';
import { Fermentable as FermentableType } from '../../types/ingredients';
import IngredientDetail from './ingredient_detail';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement';

const styles = StyleSheet.create({
  detail: {
    color: Colors.grayDark,
    fontSize: 16,
    marginTop: 4,
    textAlign: 'right',
  },
  detailCell: {
    flex: 1,
  },
  fermentableColorBar: {
    width: 14,
    height: 48,
    marginVertical: 8,
  },
  headerCell: {
    flex: 3,
  }
});

interface FermentableProps {
  fermentable: FermentableType;
  fraction: number;
}

export default ({ fermentable, fraction }: FermentableProps) => (
  <Row>
    <View
      style={[styles.fermentableColorBar, {
        backgroundColor: fermentable.color
      }]}
    />
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
