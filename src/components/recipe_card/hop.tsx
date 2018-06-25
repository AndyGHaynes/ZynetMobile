import _ from 'lodash';
import { View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Hop as HopType } from '../../types/ingredients';
import {
  Column,
  Quantity,
  Row,
} from '../core';
import HopAddition from './hop_addition';
import IngredientHeader from './ingredient_header';

const styles = StyleSheet.create({
  acid: {
    color: '#666',
    fontSize: 14,
    marginLeft: 12,
    marginTop: 2,
    textAlign: 'right',
  },
  acidSymbol: {
    color: '#666',
    fontSize: 12,
    marginLeft: 4,
    marginTop: 4,
    textAlign: 'left',
  },
  ibuUnit: {
    fontSize: 14,
    marginLeft: 4,
    width: 24,
    textAlign: 'left',
  },
  ibuValue: {
    fontSize: 22,
    textAlign: 'right',
    width: 72,
  },
});

const Hop = (hop: HopType) => (
  <Column>
    <Row>
      <IngredientHeader {..._.pick(hop, 'name', 'mfg')} />
      <View>
        <Quantity
          unit='IBU'
          unitStyle={styles.ibuUnit}
          value={_.sum(_.map(hop.additions, 'ibu'))}
          valueStyle={styles.ibuValue}
        />
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
      </View>
    </Row>
    {hop.additions.map((addition, i) => (
      <HopAddition key={i} {...addition} />
    ))}
  </Column>
);

export default Hop;
