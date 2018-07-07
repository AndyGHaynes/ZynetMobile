import {
  Row,
  Text,
} from 'native-base';
import React from 'react';

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
