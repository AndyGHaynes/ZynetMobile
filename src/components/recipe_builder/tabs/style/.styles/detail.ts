import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  detailRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailSeparator: {
    borderBottomColor: Colors.grayDark,
    borderBottomWidth: 1,
    justifyContent: 'center',
    width: '40%',
  },
  detailName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  detailNameContainer: {
    justifyContent: 'center',
    marginVertical: 2,
  },
  detailValue: {
    fontSize: 16,
  },
  detailValueContainer: {
    padding: 2,
  },
});
