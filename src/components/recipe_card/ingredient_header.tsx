import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Row } from '../core';
import IngredientDetail from './ingredient_detail';

interface Header {
  name: string;
  mfg: string;
  children?: any;
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    width: 220,
  },
  mfg: {
    color: '#999',
    fontVariant: ['small-caps'],
    marginTop: 4,
    width: 100,
  }
});

const IngredientHeader = (header: Header) => (
  <IngredientDetail>
    <Text style={styles.name}>
      {header.name}
    </Text>
    <Row>
      <Text style={styles.mfg}>
        {header.mfg}
      </Text>
      {header.children}
    </Row>
  </IngredientDetail>
);

export default IngredientHeader;
