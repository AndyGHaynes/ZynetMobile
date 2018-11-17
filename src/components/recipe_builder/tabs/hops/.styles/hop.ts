import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  acid: {
    flex: 1,
    marginRight: 12,
    paddingTop: 8,
  },
  additions: {
    display: 'flex',
    paddingLeft: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
  },
  icon: {
    color: Colors.grayDarker,
  },
  icons: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    flex: 6,
  },
  nameText: {
    fontSize: 20,
  },
});
