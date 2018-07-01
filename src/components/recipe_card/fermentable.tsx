import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  Row,
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
  fermentableColorBar: {
    width: 14,
    height: 48,
    marginVertical: 8,
  },
});

interface FermentableProps {
  fermentable: FermentableType;
  fraction: number;
}

const Fermentable = ({ fermentable, fraction }: FermentableProps) => (
  <Row>
    <View
      style={[styles.fermentableColorBar, {
        backgroundColor: fermentable.color
      }]}
    />
    <IngredientHeader {...{
      mfg: fermentable.mfg,
      name: fermentable.name
    }}>
      <Text style={styles.detail}>
        {fermentable.gravity.toString()}
      </Text>
    </IngredientHeader>
    <IngredientDetail>
      <Measurement {...fermentable.weight} />
      <Text style={styles.detail}>
        {_.round(100 * fraction, 1)}%
      </Text>
    </IngredientDetail>
  </Row>
);

export default Fermentable;
