import React from 'react';
import {
  View,
} from 'react-native';

import { ViewProps } from '../../types/components';
import styles from './.styles/row';

export default ({ children, style }: ViewProps) => (
  <View style={[styles.row, style]}>
    {children}
  </View>
);
