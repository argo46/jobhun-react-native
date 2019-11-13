import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  card: {
    flex: 1,
    borderRadius: 20,
  },
  drawerMenu: {
    marginLeft: 12,
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
  },
  jobImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginRight: 12,
  },
  titleText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 10,
    color: '#6e6e6e',
  },
  textInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobInfoText: {
    fontSize: 11,
    textAlign: 'left',
    marginLeft: 10,
    textTransform: 'capitalize',
    // backgroundColor: '#f00',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    // backgroundColor: '#00f',
  },
});
