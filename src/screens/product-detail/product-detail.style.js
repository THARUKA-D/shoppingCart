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
  detailView: {
    flex: 1,
    padding: 10,
  },
  infoView: {
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    margine: 5,
    paddingVertical: 10,
  },
  key: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  value: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  imgSlider: {
    flex: 1,
    height: 200,
  },
  sliderBar: {
    flex: 1,
    padding: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default createStyles;
