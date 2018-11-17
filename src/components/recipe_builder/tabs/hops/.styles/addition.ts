import { StyleSheet } from 'react-native';

import { Colors } from '../../../../../theme';

export default StyleSheet.create({
  additionType: {
    flex: 1,
    marginLeft: -6,
    marginRight: 6,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: Colors.grayDarker,
  },
  slider: {
    width: '100%',
  },
  sliderContainer: {
    flex: 6,
  },
  time: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 8,
  },
  timeValue: {
    fontSize: 14,
  },
  unit: {
    fontSize: 16,
    width: 28,
    textAlign: 'center',
  },
  value: {
    fontSize: 20,
    textAlign: 'right',
    width: 54,
  },
  weight: {
    flex: 2,
    marginRight: 4,
    paddingTop: 6,
  },
  weightUnit: {
    fontSize: 14,
    textAlign: 'center',
  },
  weightValue: {
    fontSize: 18,
    textAlign: 'left',
  },
});
