import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {
  Form,
  Item,
  Label,
  Input,
  Picker,
  Icon,
  Textarea,
  Button,
} from 'native-base';

import style from './style';

export default class AddJobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelected: undefined,
      companySelected: undefined,
    };
  }
  onCategorySelected(value) {
    this.setState({
      categorySelected: value,
    });
  }
  onCompanySelected(value) {
    this.setState({
      companySelected: value,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={style.rootContainer}>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Job's Name</Label>
              <Input />
            </Item>
            <Item picker style={style.pickerContainer}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={style.picker}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#007aff'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.categorySelected}
                onValueChange={this.onCategorySelected.bind(this)}>
                <Picker.Item label="Information Technology" value="key0" />
                <Picker.Item label="Marketing" value="key1" />
              </Picker>
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Salary</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Location</Label>
              <Input />
            </Item>
            <Item picker style={style.pickerContainer}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={style.picker}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#007aff'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.companySelected}
                onValueChange={this.onCompanySelected.bind(this)}>
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
              </Picker>
            </Item>
            <Item style={style.formItem}>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Job's Description"
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
