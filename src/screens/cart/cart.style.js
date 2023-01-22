import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'column',
  },
  wrapper: {
    flex: 1,
  },
  option: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionView: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },
});

export default createStyles;
