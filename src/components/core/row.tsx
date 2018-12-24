import React from 'react';
import {
  RegisteredStyle,
  View,
  ViewStyle,
} from 'react-native';

import styles from './.styles/row';

type Props = {
  children?: JSX.Element | JSX.Element[],
  style?: RegisteredStyle<ViewStyle>,
}

export default ({ children, style }: Props) => (
  <View style={[styles.row, style]}>
    {children}
  </View>
);
