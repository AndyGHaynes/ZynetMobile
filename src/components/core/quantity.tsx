import React from 'react';
import {
  Text,
} from 'react-native';

import { Row } from '../core';

export default ({ unit, unitStyle, value, valueStyle }) => (
  <Row>
    <Text style={valueStyle}>
      {value}
    </Text>
    <Text style={unitStyle}>
      {unit}
    </Text>
  </Row>
);
