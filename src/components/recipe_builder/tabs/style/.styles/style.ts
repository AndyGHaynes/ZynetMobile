import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  styleContainer: {
    position: 'relative',
  },
  name: {
    color: Colors.grayDarker,
    fontSize: 24,
    fontWeight: '600',
  },
  category: {
    color: Colors.grayDark,
    fontSize: 16,
    fontVariant: ['small-caps'],
  },
  description: {
    fontSize: 14,
  },
  value: {
    fontSize: 14,
  },
  tabContainer: {
    height: '100%',
    paddingHorizontal: 8,
  },
});
