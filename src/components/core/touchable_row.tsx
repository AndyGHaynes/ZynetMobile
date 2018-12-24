import React from 'react';
import { TouchableOpacity } from 'react-native';

import { TouchableProps } from '../../types/components';
import styles from './.styles/touchable_row';

export default ({ children, onPress, style }: TouchableProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.row, style]}
  >
    {children}
  </TouchableOpacity>
);
