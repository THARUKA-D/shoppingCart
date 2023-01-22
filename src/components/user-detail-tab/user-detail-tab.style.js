import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingRight: 10,
    width: 30,
  },
  titel: {
    padding: 10,
  },
  valueText: {
    padding: 10,
    flex: 1,
    fontWeight: 'bold',
  },
});

export default createStyles;
