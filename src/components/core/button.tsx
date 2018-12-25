import React from 'react';
import { TouchableOpacity } from 'react-native';

import { TouchableProps } from '../../types/components';
import styles from './.styles/button';

export default ({ children, onPress, style }: TouchableProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style]}
  >
    {children}
  </TouchableOpacity>
);
