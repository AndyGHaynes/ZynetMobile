import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  ingredientProperty: {
    flex: 1,
    paddingHorizontal: 8,
  },
  name: {
    color: Colors.gray,
    fontWeight: '700',
  },
  nameContainer: {
    position: 'relative',
    top: 1,
    left: 1,
  },
  value: {
    fontSize: 14,
  },
  valueContainer: {},
});
