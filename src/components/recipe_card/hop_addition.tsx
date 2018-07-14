import React from 'react';
import {
  Row,
  View,
} from 'native-base';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { HopAddition } from '../../types/ingredients';
import {
  Quantity,
} from '../core';
import Measurement from './measurement';

const styles = StyleSheet.create({
  addition: {
    marginBottom: 2,
  },
  time: {
    flex: 3,
  },
  timeText: {
    textAlign: 'right',
    paddingTop: 2,
  },
  type: {
    textAlign: 'center',
    paddingTop: 2,
    flex: 3,
  },
  weight: {
    flex: 5,
    flexDirection: 'row',
  },
  ibu: {
    flex: 5,
  },
  ibuUnit: {
    fontSize: 14,
    marginLeft: 4,
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
    textAlign: 'left',
  },
  timeValue: {
    fontSize: 18,
    textAlign: 'right',
    width: 36,
  },
});

export default (addition: HopAddition) => (
  <Row style={styles.addition}>
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
    <View style={styles.ibu}>
      {addition.ibu && (
        <Quantity
          unit='IBU'
          unitStyle={styles.ibuUnit}
          value={addition.ibu}
          valueStyle={styles.ibuValue}
        />
      )}
    </View>
  </Row>
);
