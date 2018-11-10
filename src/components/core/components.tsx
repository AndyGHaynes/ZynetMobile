import React from 'react';
import { View } from 'react-native';

import styles from './.styles/components';

export const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

export const Col = ({ children, style = null }) => (
  <View style={[styles.col, style]}>
    {children}
  </View>
);

export const Row = ({ children, style = null }) => (
  <View style={[styles.row, style]}>
    {children}
  </View>
);
