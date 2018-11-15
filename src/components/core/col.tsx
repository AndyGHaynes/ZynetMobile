import React from 'react';
import { View } from 'react-native';

import styles from './.styles/col';

export default ({ children, style = null }) => (
  <View style={[styles.col, style]}>
    {children}
  </View>
);
