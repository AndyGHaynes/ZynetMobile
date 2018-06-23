import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default ({ children }) => (
  <View style={styles.column}>
    {children}
  </View>
);
