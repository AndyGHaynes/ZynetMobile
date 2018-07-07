import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  Row
} from '../core';
import IngredientDetail from './ingredient_detail';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
  mfg: {
    color: Colors.gray,
    fontVariant: ['small-caps'],
    marginTop: 4,
    flex: 1,
  }
});

interface HeaderProps {
  name: string;
  mfg: string;
  children?: JSX.Element;
}

export default ({ name, mfg, children }: HeaderProps) => (
  <IngredientDetail>
    <Text style={styles.name}>
      {name}
    </Text>
    <Row>
      <Text style={styles.mfg}>
        {mfg}
      </Text>
      {children}
    </Row>
  </IngredientDetail>
);
