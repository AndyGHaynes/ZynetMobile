import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Row } from '../core';
import IngredientDetail from './ingredient_detail';
import IngredientHeader from './ingredient_header';
import Measurement from './measurement';

const styles = StyleSheet.create({
  detail: {
    color: '#666',
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

const Fermentable = ({ name, mfg, gravity, weight, fraction, color }) => (
  <Row>
    <View style={[styles.fermentableColorBar, { backgroundColor: color }]} />
    <IngredientHeader {...{ name, mfg }}>
      <Text style={styles.detail}>
        {gravity}
      </Text>
    </IngredientHeader>
    <IngredientDetail>
      <Measurement {...weight} />
      <Text style={styles.detail}>
        {_.round(100 * fraction, 1)}%
      </Text>
    </IngredientDetail>
  </Row>
);

export default Fermentable;
