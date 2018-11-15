import _ from 'lodash';
import React from 'react';
import {
  Text,
} from 'react-native';

import { Loss } from '../../../../types/mash';
import { Measurement } from '../../../../types/zymath';
import {
  Col,
  Quantity,
  Ratio,
  Row,
} from '../../../core';
import styles from './.styles/loss';

type Props = {
  loss: Loss;
  totalLoss: Measurement;
}

export default ({ loss, totalLoss }: Props) => (
  <Row>
    <Col>
      <Row style={styles.lossType}>
        <Text style={styles.lossTypeText}>
          {loss.type}
        </Text>
      </Row>
    </Col>
    <Col style={styles.lossRate}>
      {loss.rate && (
        <Ratio ratio={loss.rate} />
      )}
    </Col>
    <Col>
      <Row style={styles.totalLoss}>
        <Quantity
          unit={totalLoss.unit.shortName}
          unitStyle={styles.unit}
          value={_.round(totalLoss.value, 2)}
          valueStyle={styles.value}
        />
      </Row>
    </Col>
  </Row>
);
