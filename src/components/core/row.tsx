import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default ({ children }) => (
  <View style={styles.row}>
    {children}
  </View>
);
