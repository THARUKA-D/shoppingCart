import {StyleSheet} from 'react-native';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  topView: {
    paddingTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginHorizontal: 12,
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  wrapperBottom: {
    flex: 1,
  },
});

export default createStyles;
