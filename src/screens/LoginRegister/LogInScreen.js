import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card, Form, Item, Input, Label, Button, Tab, Tabs} from 'native-base';

import style from './style';

export default class LogInScreen extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      shadowOpacity: 0,
      elevation: 0,
    },
  };

  render() {
    return (
      <ScrollView>
        <View style={style.wrapper}>
          <Text style={style.titleText}>Welcome Back,</Text>
          <Text style={style.titleBold}>Hunter</Text>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={style.bottomWrapper}>
            <Text style={style.regisInfoText}>
              Don't have an account? Register now!
            </Text>
            <Button style={style.button}>
              <Text style={style.buttonText}>Log In</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
