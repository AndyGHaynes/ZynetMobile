import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderBottomWidth: 0.5,
    borderColor: Colors.grayLight,
    borderLeftWidth: 0.5,
    borderRadius: 2,
    borderRightWidth: 0.5,
    borderTopWidth: 0.5,
    elevation: 3,
    marginBottom: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    padding: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
});
