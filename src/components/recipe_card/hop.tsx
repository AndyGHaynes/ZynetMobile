import _ from 'lodash';
import {
  Col,
  Row,
  View,
} from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Hop } from '../../types/ingredients';
import {
  Colors,
  Quantity,
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
    fontWeight: '700',
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
    flex: 6,
  },
  hopSeparator: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  ibu: {
    marginTop: 10,
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
  lastAddition: {
    marginBottom: 8,
  },
});

const renderAcid = (acid: number, symbol: string): JSX.Element => (
  <Row>
    <Text style={styles.acid}>
      {_.round(acid, 1)}%
    </Text>
    <Text style={styles.acidSymbol}>
      {symbol}
    </Text>
  </Row>
);

export default (hop: Hop) => (
  <Col>
    <Row>
      <View style={styles.headerCell}>
        <IngredientHeader {..._.pick(hop, 'name', 'mfg')}>
          {renderAcid(hop.alpha, 'α')}
          {renderAcid(hop.beta, 'β')}
        </IngredientHeader>
      </View>
      <View style={styles.detailCell}>
        <View style={styles.ibu}>
          <Quantity
            unit='IBU'
            unitStyle={styles.ibuUnit}
            value={_.round(_.sum(_.map(hop.additions, 'ibu')), 2)}
            valueStyle={styles.ibuValue}
          />
        </View>
      </View>
    </Row>
    <View style={styles.hopSeparator} />
    {hop.additions.map((addition, i) => (
      <Row key={i} style={i === hop.additions.length - 1 ? styles.lastAddition : {}}>
        <HopAddition {...addition} />
      </Row>
    ))}
  </Col>
);
