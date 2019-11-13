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
          <Text style={style.titleText}>Welcome,</Text>
          <Text style={style.titleBold}>New Hunter</Text>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={style.bottomWrapper}>
            <Text style={style.regisInfoText}>
              Already have an account? LogIn now!
            </Text>
            <Button style={style.button}>
              <Text style={style.buttonText}>Register</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
