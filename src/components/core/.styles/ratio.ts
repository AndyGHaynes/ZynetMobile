import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  divider: {
    borderTopColor: Colors.grayDarker,
    borderTopWidth: 1,
    width: 20,
  },
  ratio: {
    paddingVertical: 2,
  },
  unit: {
    fontSize: 14,
    textAlign: 'center',
  },
  unitContainer: {
    alignContent: 'center',
    paddingVertical: 4,
  },
  unitsContainer: {
    padding: 2,
  },
  value: {
    fontSize: 22,
    textAlign: 'center',
  },
  valueContainer: {
    paddingTop: 14,
  },
});
