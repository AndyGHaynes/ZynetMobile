import React from 'react';
import {
  Text,
} from 'react-native';

import {
  Col,
  Row,
} from '../../../core';
import styles from './.styles/detail';

type Props = {
  name: string;
  value: string;
}

export default ({ name, value }: Props) => (
  <Row>
    <Col style={styles.detailRow}>
      <Row style={styles.detailNameContainer}>
        <Text style={styles.detailName}>
          {name}
        </Text>
      </Row>
      <Row style={styles.detailSeparator} />
      <Row style={styles.detailValueContainer}>
        <Text style={styles.detailValue}>
          {value}
        </Text>
      </Row>
    </Col>
  </Row>
);
