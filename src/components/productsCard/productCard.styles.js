import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'stretch',
  },
  productImage: {
    resizeMode: 'contain',
    width: '100%',
    height: undefined,
    aspectRatio: 3 / 2,
  },
  imageView: {
    marginTop: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    marginTop: 5,
    fontSize: 15,
  },
});

export default createStyles;
