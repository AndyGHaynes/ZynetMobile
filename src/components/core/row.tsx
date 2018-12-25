import React from 'react';
import {
  View,
} from 'react-native';

import { ViewProps } from '../../types/components';
import styles from './.styles/row';

export default ({ children, flex, style }: ViewProps) => (
  <View
    style={[
      styles.row,
      style,
      flex && { flex },
    ]}
  >
    {children}
  </View>
);
