import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

interface TouchableProps {
  children: JSX.Element;
  onPress: (e: GestureResponderEvent) => void;
}

export default ({ children, onPress }: TouchableProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.row}
  >
    {children}
  </TouchableOpacity>
);
