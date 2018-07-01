import { View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ComposableProps } from '../../types/component';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default ({ children, style }: ComposableProps) => (
  <View style={[styles.column, style || {}]}>
    {children}
  </View>
);
