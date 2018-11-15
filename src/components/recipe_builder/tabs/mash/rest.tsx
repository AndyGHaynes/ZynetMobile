import _ from 'lodash';
import { Icon } from 'native-base';
import React from 'react';
import {
  Text,
} from 'react-native';

import { Rest } from '../../../../types/mash';
import {
  Col,
  Quantity,
  Row,
} from '../../../core';
import styles from './.styles/rest';

type Props = {
  rest: Rest;
  step: Number;
}

export default ({ rest, step }: Props) => (
  <Row>
    <Col>
      <Row style={styles.step}>
        <Text style={styles.stepNumber}>
          {step}
        </Text>
        {rest.recirculated && (
          <Icon
            name='reload'
            style={styles.recirculatedIcon}
            type='MaterialCommunityIcons'
          />
        )}
      </Row>
    </Col>
    <Col>
      <Row>
        <Quantity
          unit={rest.temperature.unit.shortName}
          unitStyle={styles.unit}
          value={_.round(rest.temperature.value, 2)}
          valueStyle={styles.value}
        />
      </Row>
    </Col>
    <Col>
      <Row>
        <Quantity
          unit={rest.time.unit.shortName}
          unitStyle={styles.unit}
          value={_.round(rest.time.value, 2)}
          valueStyle={styles.value}
        />
      </Row>
    </Col>
  </Row>
);
