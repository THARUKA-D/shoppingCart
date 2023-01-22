import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'stretch',
  },
  line: {
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    resizeMode: 'contain',
    width: 80,
    height: 50,
  },
  imageView: {
    marginTop: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerItem: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  qtyText: {
    textAlign: 'center',
    marginRight: 10,
    fontSize: 13,
  },
  deleteButton: {
    color: 'red',
    fontSize: 19,
  },
});

export default createStyles;
