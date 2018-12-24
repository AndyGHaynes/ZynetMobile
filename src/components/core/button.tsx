import React from 'react';
import {
  GestureResponderEvent,
  RegisteredStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import styles from './.styles/button';

type Props = {
  children: JSX.Element | JSX.Element[];
  onPress: (e: GestureResponderEvent) => void;
  style?: RegisteredStyle<ViewStyle>;
}

export default ({ children, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {children}
  </TouchableOpacity>
);
