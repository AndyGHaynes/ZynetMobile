import React from 'react';
import { View } from 'react-native';

import styles from './.styles/row';

export default ({ children, style = null }) => (
  <View style={[styles.row, style]}>
    {children}
  </View>
);
