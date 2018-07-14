import {
  Row,
} from 'native-base';
import React from 'react';
import {
  Text,
} from 'react-native';

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
