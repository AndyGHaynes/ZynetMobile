import React from 'react';
import {
  RegisteredStyle,
  View,
  ViewStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  color?: string;
  name: string;
  size?: number;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
}

export default ({ color = null, name, size = 24, style }: Props) => (
  <View style={style}>
    <Icon name={name} color={color} size={size} />
  </View>
);
