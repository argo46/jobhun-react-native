import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Form, Item, Input, Label, Button, Spinner} from 'native-base';

import style from './style';

import {connect} from 'react-redux';
import {login} from '../../redux/action/user';

import qs from 'qs';

class LogInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: '',
    headerStyle: {
      shadowOpacity: 0,
      elevation: 0,
    },
  };

  onEmailChange = value => {
    this.setState({email: value});
  };

  onPasswordChange = value => {
    this.setState({password: value});
  };

  onLogin = () => {
    let dataLogin = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.dispatch(login(qs.stringify(dataLogin)));
  };

  render() {
    return (
      <ScrollView contentContainerStyle={style.root}>
        {(function(props) {
          if (props.user.isLogin) {
            props.navigation.navigate('appStack');
          } else {
            return <></>;
          }
        })(this.props)}
        <View style={style.wrapper}>
          <Text style={style.titleText}>Welcome Back,</Text>
          <Text style={style.titleBold}>Hunter</Text>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Email</Label>
              <Input
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={value => this.onEmailChange(value)}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Password</Label>
              <Input
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={value => this.onPasswordChange(value)}
              />
            </Item>
          </Form>
          <View style={style.bottomWrapper}>
            {this.props.user.isLoading ? <Spinner color="#0984e3" /> : <></>}
            <View style={style.infoTextWrapper}>
              <Text style={style.regisInfoText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('appStack')}>
                <Text style={style.linkText}>Register now!</Text>
              </TouchableOpacity>
            </View>
            <Button style={style.button} onPress={this.onLogin}>
              <Text style={style.buttonText}>Log In</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LogInScreen);
