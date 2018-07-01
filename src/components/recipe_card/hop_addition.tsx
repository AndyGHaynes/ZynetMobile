import React from 'react';
import { View } from 'native-base';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { HopAddition } from '../../types/ingredients';
import {
  Quantity,
  Row,
} from '../core';
import Measurement from './measurement';

const styles = StyleSheet.create({
  time: {
    width: 60,
  },
  timeText: {
    textAlign: 'right',
    paddingTop: 2,
    width: 70,
  },
  type: {
    textAlign: 'center',
    paddingTop: 2,
    width: 70,
  },
  weight: {
    width: 100,
    flexDirection: 'row',
  },
  ibuUnit: {
    fontSize: 14,
    marginLeft: 4,
    width: 24,
    textAlign: 'left',
  },
  ibuValue: {
    fontSize: 18,
    textAlign: 'right',
    width: 72,
  },
  timeUnit: {
    fontSize: 14,
    marginLeft: 4,
    width: 60,
    textAlign: 'left',
  },
  timeValue: {
    fontSize: 18,
    textAlign: 'right',
    width: 36,
  },
});

export default (addition: HopAddition) => (
  <Row>
    <View style={styles.weight}>
      <Measurement {...addition.weight} />
    </View>
    <Text style={styles.type}>
      {addition.type}
    </Text>
    <View style={styles.time}>
      {addition.time && (
        <Quantity
          {...addition.time}
          unit={addition.time.unit.shortName}
          unitStyle={styles.timeUnit}
          valueStyle={styles.timeValue}
        />
      )}
      {addition.type === 'whirlpool' && (
        <Text style={styles.timeText}>
          flameout
        </Text>
      )}
    </View>
    {addition.ibu && (
      <Quantity
        unit='IBU'
        unitStyle={styles.ibuUnit}
        value={addition.ibu}
        valueStyle={styles.ibuValue}
      />
    )}
  </Row>
);
