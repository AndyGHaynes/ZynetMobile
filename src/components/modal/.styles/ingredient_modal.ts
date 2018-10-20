import _ from 'lodash';
import {
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  closeButton: {
    borderRadius: 4,
    margin: 4,
  },
  closeButtonText: {
    color: 'white',
  },
  closeIcon: {
    color: 'white',
    fontSize: 32,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    maxHeight: _.round(Dimensions.get('window').height - 64),
  },
  header: {
    backgroundColor: Colors.grayDarker,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
});
