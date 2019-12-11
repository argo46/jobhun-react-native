import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
  },
  form: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
  pickerContainer: {
    marginLeft: 12,
    display: 'flex',
    paddingTop: 12,
  },
  picker: {
    color: '#4a4a4a',
    marginTop: 'auto',
    marginBottom: 0,
  },
  formItem: {
    marginVertical: 12,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textArea: {
    flexGrow: 1,
    alignSelf: 'stretch',
  },
  imageUpload: {
    flex: 1,
    height: 150,
    marginLeft: 14,
    backgroundColor: '#d4d4d4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePhoto: {
    flex: 1,
    height: 150,
    marginLeft: 14,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#0760a6',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
