import React from 'react';
import {
  Text,
} from 'react-native';

import { Row } from '../core';

type Props = {
  unit: String,
  unitStyle?: any,
  value: Number,
  valueStyle?: any,
}

export default ({ unit, unitStyle, value, valueStyle }: Props) => (
  <Row>
    <Text style={valueStyle}>
      {value}
    </Text>
    <Text style={unitStyle}>
      {unit}
    </Text>
  </Row>
);
