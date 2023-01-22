import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  details: {
    flexGrow: 1,
  },
  icon: {
    height: 80,
    padding: 10,
  },
  total: {
    fontSize: 20,
    marginVertical: 20,
  },
  price: {
    fontSize: 30,
    marginVertical: 20,
    marginBottom: 80,
    textAlign: 'center',
  },
  radio: {
    marginLeft: 30,
  },
});

export default createStyles;
