import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SideBar = () => {
  return (
    <View style={style.rootContainer}>
      <View style={style.upperContainer}>
        <View style={style.userContainer}>
          <Icon
            name="account-circle"
            color="#6e6e6e"
            size={40}
            style={style.avatarIcon}
          />
          <Text style={style.textAvatar}>Argo</Text>
        </View>
      </View>
      <View style={style.bottmContainer}>
        <List>
          <ListItem>
            <Icon
              name="view-grid"
              color="#6e6e6e"
              size={25}
              // style={}
            />
            <Text style={style.textListItem}>Jobs</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="bookmark"
              color="#6e6e6e"
              size={25}
              // style={}
            />
            <Text style={style.textListItem}>Saved Jobs</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="message-processing"
              color="#6e6e6e"
              size={25}
              // style={}
            />
            <Text style={style.textListItem}>Messages</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="calendar"
              color="#6e6e6e"
              size={25}
              // style={}
            />
            <Text style={style.textListItem}>Interview Schedule</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="account"
              color="#6e6e6e"
              size={25}
              // style={}
            />
            <Text style={style.textListItem}>My Profile</Text>
          </ListItem>
        </List>
        <View style={style.logoutContainer}>
          <Icon
            name="logout-variant"
            color="#0984e3"
            size={25}
            // style={}
          />
          <Text style={style.logoutText}>Log Out</Text>
        </View>
      </View>
    </View>
  );
};

export default SideBar;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  upperContainer: {
    padding: 12,
    minHeight: 150,
    backgroundColor: '#0984e3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  userContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  bottmContainer: {
    padding: 12,
    paddingRight: 25,
    flexGrow: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  textAvatar: {
    fontSize: 25,
    marginLeft: 8,
    color: 'white',
  },
  avatarIcon: {
    color: 'white',
  },
  textListItem: {
    marginLeft: 10,
  },
  logoutContainer: {
    marginTop: 'auto',
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#0984e3',
    marginLeft: 5,
  },
});
