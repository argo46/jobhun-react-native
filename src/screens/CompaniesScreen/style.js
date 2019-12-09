import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
    height: 'auto',
  },
  card: {
    flex: 1,
    borderRadius: 5,
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
  },
  companyImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginRight: 12,
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    flexWrap: 'wrap',
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  editDeleteContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  editButton: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  location: {
    display: 'flex',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 11,
    textAlign: 'left',
    marginLeft: 0,
    marginTop: 10,
    textTransform: 'capitalize',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  divider: {
    height: 1,
    width: '100%',
    marginTop: 5,
    backgroundColor: 'grey',
  },
});
