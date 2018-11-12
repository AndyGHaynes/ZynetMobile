import { Dimensions, StyleSheet } from 'react-native';

export const CHART_HEIGHT = 200;

const { height } = Dimensions.get('window');
const scrollHeight = height - (150 + CHART_HEIGHT);

export default StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 8,
  },
  chartContainer: {
    height: CHART_HEIGHT,
    marginTop: 10,
  },
  fermentablesContainer: {
    height: scrollHeight,
    // paddingTop: 8,
    position: 'relative',
  },
  gradientBoundary: {
    height: 100,
  },
});
