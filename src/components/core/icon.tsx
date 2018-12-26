import React from 'react';
import {
  RegisteredStyle,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../theme';

type Props = {
  color?: string;
  name: string;
  size: number;
  style?: ViewStyle | RegisteredStyle<ViewStyle>;
};

export default ({ color, name, size, style }: Props) => (
  <View style={style}>
    <Icon
      color={color || Colors.grayDarker}
      name={name}
      size={size}
    />
  </View>
);
