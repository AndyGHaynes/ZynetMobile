import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

export default StyleSheet.create({
  category: {
    fontSize: 14,
    fontWeight: '700',
  },
  categoryContainer: {
    justifyContent: 'center',
  },
  description: {
    justifyContent: 'center',
  },
  descriptionContainer: {
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  ingredientBody: {
    padding: 8,
  },
  ingredientCard: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkIcon: {
    color: Colors.grayDark,
    fontSize: 14,
    marginBottom: 14,
    position: 'relative',
    left: 4,
    top: 5,
  },
  separator: {
    borderTopColor: Colors.grayLight,
    borderTopWidth: 1,
    marginBottom: 6,
  },
  subDescription: {
    paddingTop: 0,
  },
  url: {
    fontSize: 18,
  },
});
