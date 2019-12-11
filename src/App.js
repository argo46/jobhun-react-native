import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Provider} from 'react-redux';
import store from './redux/store';

import JobScreen from './screens/JobsScreen/JobsScreen';
import JobDetailScreen from './screens/JobDetailScreen/JobDetailScreen';
import Loginscreen from './screens/LoginRegister/LogInScreen';
import RegisterScreen from './screens/LoginRegister/RegisterScreen';
import AddJobScreen from './screens/AddJobScreen/AddJobScreen';
import AddCompanyScreen from './screens/AddCompany/AddCompany';
import UpdateJobScreen from './screens/UpdateJob/UpdateJobScreen';
import CompaniesScreen from './screens/CompaniesScreen/CompaniesScreen';

import AsyncStorage from '@react-native-community/async-storage';
import {keepLogin} from './redux/action/user';

export default class App extends Component {
  async componentDidMount() {
    try {
      const username = await AsyncStorage.getItem('username');
      const token = await AsyncStorage.getItem('token');
      if (username !== null && token !== null) {
        store.dispatch(keepLogin(username, token));
      }
    } catch (e) {
      // error reading value
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const appStack = createStackNavigator({
  JobScreen,
  AddCompanyScreen,
  UpdateJobScreen,
  AddJobScreen,
  JobDetailScreen,
  CompaniesScreen,
});

const authStack = createStackNavigator({
  Loginscreen,
  RegisterScreen,
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      appStack,
      authStack,
    },
    {
      initialRouteName: 'authStack',
    },
  ),
);
