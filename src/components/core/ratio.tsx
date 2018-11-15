import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Ratio } from '../../types/zymath';
import {
  Col,
  Row,
} from '.';
import styles from './.styles/ratio';

type Props = {
  ratio: Ratio;
}

export default ({ ratio }: Props) => (
  <Row style={styles.ratio}>
    <Col style={styles.valueContainer}>
      <Text style={styles.value}>
        {ratio.value}
      </Text>
    </Col>
    <Col style={styles.unitsContainer}>
      <Row style={styles.unitContainer}>
        <Text style={styles.unit}>
          {ratio.antecedent.shortName}
        </Text>
      </Row>
      <View style={styles.divider} />
      <Row style={styles.unitContainer}>
        <Text style={styles.unit}>
          {ratio.consequent.shortName}
        </Text>
      </Row>
    </Col>
  </Row>
);
