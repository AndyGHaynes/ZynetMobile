import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Hop } from '../../types/ingredients';
import {
  Colors,
  Column,
  Quantity,
  Row,
} from '../core';
import HopAddition from './hop_addition';
import IngredientHeader from './ingredient_header';

const styles = StyleSheet.create({
  acid: {
    color: Colors.grayDark,
    fontSize: 14,
    marginLeft: 12,
    marginTop: 2,
  },
  acidSymbol: {
    color: Colors.grayDark,
    fontSize: 12,
    marginLeft: 4,
    marginTop: 4,
  },
  additionSeparator: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  detailCell: {
    flex: 1,
    paddingRight: 8,
  },
  headerCell: {
    flex: 3,
  },
  hopSeparator: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  ibu: {
    left: 16,
    position: 'relative',
    top: -10,
  },
  ibuUnit: {
    fontSize: 14,
    marginLeft: 4,
    textAlign: 'left',
  },
  ibuValue: {
    fontSize: 22,
    textAlign: 'right',
  },
});

export default (hop: Hop) => (
  <Column>
    <Row>
      <View style={styles.headerCell}>
        <IngredientHeader {..._.pick(hop, 'name', 'mfg')} />
      </View>
      <View style={styles.detailCell}>
        <Row>
          <Text style={styles.acid}>
            {hop.alpha}
          </Text>
          <Text style={styles.acidSymbol}>
            α
          </Text>
          <Text style={styles.acid}>
            {hop.beta}
          </Text>
          <Text style={styles.acidSymbol}>
            β
          </Text>
        </Row>
        <View style={styles.ibu}>
          <Quantity
            unit='IBU'
            unitStyle={styles.ibuUnit}
            value={_.sum(_.map(hop.additions, 'ibu'))}
            valueStyle={styles.ibuValue}
          />
        </View>
      </View>
    </Row>
    <View style={styles.hopSeparator} />
    {hop.additions.map((addition, i) => (
      <Row key={i}>
        <HopAddition {...addition} />
      </Row>
    ))}
  </Column>
);
