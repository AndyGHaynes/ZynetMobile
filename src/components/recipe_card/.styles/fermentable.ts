import { StyleSheet } from 'react-native';

import {
  Colors,
} from '../../../theme';

export default StyleSheet.create({
  colorBar: {
    width: 14,
    height: 48,
  },
  colorBarContainer: {
    justifyContent: 'center',
    paddingVertical: 8,
  },
  detail: {
    color: Colors.grayDark,
    fontSize: 16,
    marginTop: 4,
    textAlign: 'right',
  },
  detailCell: {
    flex: 1,
  },
  headerCell: {
    flex: 3,
  },
});
