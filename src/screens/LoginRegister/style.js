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
  headerContainer: {
    backgroundColor: '#0760a6',
    marginTop: -12,
    marginHorizontal: -12,
    paddingHorizontal: 12,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 40,
    color: '#fff',
  },
  titleBold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#0760a6',
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
