import { StyleSheet } from 'react-native';

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
  container: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#bbb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 1,
    marginBottom: 12,
    padding: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
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
