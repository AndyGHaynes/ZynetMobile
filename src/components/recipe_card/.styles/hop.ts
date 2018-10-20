import { StyleSheet } from 'react-native';

import {
  Colors,
} from '../../../theme';

export default StyleSheet.create({
  acid: {
    color: Colors.grayDark,
    fontSize: 14,
    marginLeft: 12,
    marginTop: 2,
  },
  acidSymbol: {
    color: Colors.grayDark,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
    marginTop: 4,
  },
  additionSeparator: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  detailCell: {
    flex: 1,
    paddingRight: 8,
  },
  headerCell: {
    flex: 6,
  },
  hopSeparator: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 1,
    marginBottom: 6,
  },
  ibu: {
    marginTop: 10,
  },
  ibuUnit: {
    fontSize: 14,
    marginLeft: 4,
    textAlign: 'left',
  },
  ibuValue: {
    fontSize: 22,
    textAlign: 'right',
  },
  lastAddition: {
    marginBottom: 8,
  },
});
