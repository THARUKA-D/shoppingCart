import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  productImage: {
    resizeMode: 'contain',
    width: '100%',
    height: undefined,
    aspectRatio: 3 / 2,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  leftSlide: {
    width: 50,
    padding: 10,
  },
  button: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  rightSlide: {
    width: 50,
    padding: 10,
  },
  iconLeft: {
    width: 30,
    height: 200,
    resizeMode: 'contain',
    transform: [
      {scale: -1}, // flip the icon
    ],
  },
  iconRight: {
    width: 30,
    height: 200,

    resizeMode: 'contain',
  },
});

export default createStyles;
