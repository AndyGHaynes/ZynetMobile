import React from 'react';
import { View } from 'react-native';

import { ViewProps } from '../../types/components';
import styles from './.styles/col';

export default ({ children, flex, style }: ViewProps) => (
  <View
    style={[
      styles.col,
      style,
      flex && { flex },
    ]}
  >
    {children}
  </View>
);
