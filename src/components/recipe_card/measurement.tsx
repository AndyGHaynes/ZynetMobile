import React from 'react';
import { StyleSheet } from 'react-native';

import { Quantity } from '../core';
import { Measurement } from '../../types/zymath';

const styles = StyleSheet.create({
  unit: {
    fontSize: 16,
    width: 28,
    textAlign: 'center',
  },
  value: {
    fontSize: 20,
    textAlign: 'right',
    width: 54,
  },
});

export default ({ unit, value }: Measurement) => (
  <Quantity
    {...{ unit: unit.shortName, value }}
    unitStyle={styles.unit}
    valueStyle={styles.value}
  />
);
