import _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Hop } from '../../types/ingredients';
import {
  Col,
  Quantity,
  Row,
} from '../core';
import styles from './.styles/hop';
import HopAddition from './hop_addition';
import IngredientHeader from './ingredient_header';

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
