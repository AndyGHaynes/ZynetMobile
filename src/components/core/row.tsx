import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ComposableProps } from '../../types/component';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default ({ children, style }: ComposableProps) => (
  <View style={[styles.row, style || {}]}>
    {children}
  </View>
);
