import React from 'react';
import {
  RegisteredStyle,
  ViewStyle,
} from 'react-native';

import styles from './.styles/icon_button';
import Button from './button';
import Icon from './icon';

type Props = {
  color: string;
  icon: string;
  onPress: () => void;
  size: number;
  style?: RegisteredStyle<ViewStyle>;
 };

export default ({ color, icon, onPress, size, style }: Props) => (
  <Button
    onPress={onPress}
    style={[styles.button, style]}
  >
    <Icon
      color={color}
      name={icon}
      size={size}
    />
  </Button>
);
