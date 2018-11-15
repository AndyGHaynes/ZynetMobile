import _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import {
  Col,
  Row,
} from '../../../core';
import styles from './.styles/header';

type Props = {
  columnStyle?: any,
  columns: String[],
}

export default ({ columns, columnStyle }: Props) => (
  <Row>
    {_.map(columns, (column, i) => (
      <Col
        key={`column-${column}-${i}`}
        style={columnStyle}
      >
        <View style={styles.label}>
          <Text style={styles.labelText}>
            {column}
          </Text>
        </View>
      </Col>
    ))}
  </Row>
);
