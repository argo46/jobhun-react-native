import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Form, Item, Label, Input, Textarea, Button} from 'native-base';

import style from './style';

export default class AddCompany extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.rootContainer}>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Company Name</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Location</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Location</Label>
              <Input />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>TODO: Image Upload</Label>
              <Input />
            </Item>
            <Item style={style.formItem}>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Company Description"
                style={style.textArea}
              />
            </Item>
            <Button style={style.button}>
              <Text style={style.buttonText}>SUBMIT</Text>
            </Button>
          </Form>
        </View>
      </ScrollView>
    );
  }
}
