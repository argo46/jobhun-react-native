import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    // alignContent: 'flex-end',
    padding: 12,
  },
  titleText: {
    fontSize: 40,
  },
  titleBold: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  form: {
    // flexGrow: 1,
    marginTop: 50,
    marginRight: 5,
    marginBottom: 'auto',
  },
  bottomWrapper: {
    flexGrow: 1,
    height: 'auto',
    marginTop: 'auto',
  },
  regisInfoText: {
  },
  button: {
    backgroundColor: '#0984e3',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
