import React from 'react';
import {
  Text,
} from 'react-native';

import { Range } from '../../../../types/zymath';
import {
  Col,
  Row,
} from '../../../core';
import styles from './.styles/range';

type Props = {
  name: string;
  range: Range;
}

export default ({ name, range }: Props) => (
  <Col>
    <Row style={styles.nameContainer}>
      <Text style={styles.name}>
        {name}
      </Text>
    </Row>
    <Row style={styles.detailValueContainer}>
      <Text style={styles.detailValue}>
        {range.toString()}
      </Text>
    </Row>
  </Col>
);
