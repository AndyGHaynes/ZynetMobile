import React from 'react';
import { StyleSheet } from 'react-native';

import { Quantity } from '../core';

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

const Measurement = ({ unit, value }) => (
  <Quantity
    {...{ unit: unit.shortName, value }}
    unitStyle={styles.unit}
    valueStyle={styles.value}
  />
);

export default Measurement;
