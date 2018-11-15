import React from 'react';
import { View } from 'react-native';

import styles from './.styles/card';

export default ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);
