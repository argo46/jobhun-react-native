import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    padding: 12,
    height: 'auto',
  },
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
  },
  headerContainer: {},
  logoImage: {
    height: 150,
    resizeMode: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  middleContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  labels: {
    flex: 1,
  },
  values: {
    flex: 2,
  },
  descriptionContainer: {
    marginTop: 20,
    flex: 1,
    flexGrow: 1,
    height: 'auto',
  },
  labelTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#0984e3',
    borderRadius: 24,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
