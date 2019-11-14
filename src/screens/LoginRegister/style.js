import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    height: '100%',
    flexDirection: 'column',
    display: 'flex',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: 12,
    height: '100%',
    alignContent: 'flex-end',
  },
  titleText: {
    fontSize: 40,
  },
  titleBold: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 50,
    marginRight: 5,
    marginBottom: 'auto',
  },
  bottomWrapper: {
    marginTop: 'auto',
    paddingBottom: 30,
  },
  regisInfoText: {
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0984e3',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  linkText: {
    color: '#0984e3',
    fontWeight: 'bold',
  },
  infoTextWrapper: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
