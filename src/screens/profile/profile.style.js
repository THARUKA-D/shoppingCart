import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imageView: {
    flex: 1,
  },
  icon: {
    flex: 1,
    padding: 20,
  },
});

export default createStyles;
