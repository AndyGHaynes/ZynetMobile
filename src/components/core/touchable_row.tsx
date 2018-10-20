import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';

import styles from './.styles/touchable_row';

interface TouchableProps {
  children: JSX.Element;
  onPress: (e: GestureResponderEvent) => void;
}

export default ({ children, onPress }: TouchableProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.row}
  >
    {children}
  </TouchableOpacity>
);
