import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { HopAddition } from '../../types/ingredients';
import {
  Quantity,
  Row,
} from '../core';
import styles from './.styles/hop_addition';
import Measurement from './measurement';

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
