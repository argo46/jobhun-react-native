import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';

import style from './style';

import {connect} from 'react-redux';
import {register} from '../../redux/action/user';

import qs from 'qs';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      name: '',
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

  onUsernameChange = value => {
    this.setState({username: value});
  };

  onNameChange = value => {
    this.setState({name: value});
  };

  onPasswordChange = value => {
    this.setState({password: value});
  };

  onRegister = () => {
    let dataRegister = {
      email: this.state.email,
      user_name: this.state.username,
      name: this.state.name,
      password: this.state.password,
    };
    console.log(qs.stringify(dataRegister));
    this.props.dispatch(register(qs.stringify(dataRegister)));
  };

  render() {
    return (
      <ScrollView>
        {(function(props) {
          if (props.user.isRegistrationSucces) {
            props.navigation.navigate('Loginscreen');
          } else {
            return <></>;
          }
          if (props.user.isLogin) {
            props.navigation.navigate('JobScreen');
          }
        })(this.props)}
        <View style={style.wrapper}>
          <Text style={style.titleText}>Welcome,</Text>
          <Text style={style.titleBold}>New Hunter</Text>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Email</Label>
              <Input
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={value => this.onEmailChange(value)}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Username</Label>
              <Input
                value={this.state.username}
                onChangeText={value => this.onUsernameChange(value)}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Name</Label>
              <Input
                value={this.state.name}
                onChangeText={value => this.onNameChange(value)}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={value => this.onPasswordChange(value)}
              />
            </Item>
          </Form>
          <View style={style.bottomWrapper}>
            <View style={style.infoTextWrapper}>
              <Text style={style.regisInfoText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Loginscreen')}>
                <Text style={style.linkText}>Login now!</Text>
              </TouchableOpacity>
            </View>
            <Button style={style.button} onPress={this.onRegister}>
              <Text style={style.buttonText}>Register</Text>
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

export default connect(mapStateToProps)(RegisterScreen);
