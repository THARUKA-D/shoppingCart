import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  minValue: {
    flex: 1,
    paddingHorizontal: 10,

    textAlign: 'center',
  },
  maxValue: {
    flex: 1,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  sliderView: {
    width: '50%',
  },
  slider: {
    backgroundColor: '#6500f3',
  },
});

export default createStyles;
