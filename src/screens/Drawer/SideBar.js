import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {List, ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {logout} from '../../redux/action/user';

const SideBar = props => {
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
          <Text style={style.textAvatar}>{props.user.username}</Text>
        </View>
      </View>
      <View style={style.bottmContainer}>
        <List>
          <ListItem>
            <TouchableOpacity style={style.styleAbleOpacity}>
              <Icon
                name="view-grid"
                color="#0984e3"
                size={25}
                // style={}
              />
              <Text style={style.textListItem}>Jobs</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity
              style={style.styleAbleOpacity}
              onPress={() =>
                props.properties.navigation.navigate('AddJobScreen')
              }>
              <Icon
                name="briefcase-plus"
                color="#6e6e6e"
                size={25}
                // style={}
              />
              <Text style={style.textListItem}>Add Job</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem selected>
            <TouchableOpacity style={style.styleAbleOpacity}>
              <Icon
                name="message-processing"
                color="#6e6e6e"
                size={25}
                // style={}
              />
              <Text style={style.textListItem}>Messages</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity style={style.styleAbleOpacity}>
              <Icon
                name="calendar"
                color="#6e6e6e"
                size={25}
                // style={}
              />
              <Text style={style.textListItem}>Interview Schedule</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity style={style.styleAbleOpacity}>
              <Icon
                name="account"
                color="#6e6e6e"
                size={25}
                // style={}
              />
              <Text style={style.textListItem}>My Profile</Text>
            </TouchableOpacity>
          </ListItem>
        </List>
        <TouchableOpacity
          onPress={() => {
            props.dispatch(logout());
            props.goToLoginScreen();
          }}
          style={style.logoutContainer}>
          <View style={style.logoutContainer}>
            <Icon name="logout-variant" color="#0984e3" size={25} />
            <Text style={style.logoutText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SideBar);

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
  styleAbleOpacity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
