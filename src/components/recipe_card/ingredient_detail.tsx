import React from 'react';
import { View } from 'react-native';

import styles from './.styles/ingredient_detail';

export default ({ children }) => (
  <View style={styles.detail}>
    {children}
  </View>
);
