import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  detail: {
    paddingVertical: 8,
    paddingLeft: 8,
  },
});

export default ({ children }) => (
  <View style={styles.detail}>
    {children}
  </View>
);
