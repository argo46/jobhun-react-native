import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Provider} from 'react-redux';
import store from './redux/store';

import JobScreen from './screens/JobsScreen/JobsScreen';
import JobDetailScreen from './screens/JobDetailScreen/JobDetailScreen';
import Loginscreen from './screens/LoginRegister/LogInScreen';
import RegisterScreen from './screens/LoginRegister/Register';
import AddJobScreen from './screens/AddJobScreen/AddJobScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const stackNavigation = createStackNavigator({
  AddJobScreen,
  JobScreen,
  RegisterScreen,
  Loginscreen,
  JobDetailScreen,
});

const AppContainer = createAppContainer(stackNavigation);
