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
import {connect} from 'react-redux';
import {updateJob} from '../../redux/action/job';
import qs from 'qs';

class UpdateJobScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.navigation.state.params};
    console.log(this.state);
  }

  onUpdate = () => {
    let dataJob = {
      name: this.state.name,
      salary: this.state.salary,
      location: this.state.location,
      company: this.state.company_id,
      description: this.state.description,
    };

    let token = this.props.user.token;
    this.props.dispatch(updateJob(this.state.id, dataJob, token));
    this.props.navigation.navigate('JobScreen');
  };

  render() {
    return (
      <ScrollView>
        {(function(props) {
          if (props.job.isUpdateSuccess) {
            props.navigation.navigate('JobScreen');
          } else {
            return <></>;
          }
        })(this.props)}
        <View style={style.rootContainer}>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Job's Name</Label>
              <Input
                onChangeText={text => this.setState({name: text})}
                value={this.state.name}
              />
            </Item>
            <Item picker style={style.pickerContainer}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={style.picker}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#007aff'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.category}
                onValueChange={value => this.setState({category: value})}>
                <Picker.Item label="Information Technology" value="7" />
                <Picker.Item label="Marketing" value="6" />
              </Picker>
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Salary</Label>
              <Input
                keyboardType="numeric"
                onChangeText={text => this.setState({salary: text})}
                value={this.state.salary.toString()}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Location</Label>
              <Input
                onChangeText={text => this.setState({location: text})}
                value={this.state.location}
              />
            </Item>
            <Item picker style={style.pickerContainer}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={style.picker}
                placeholder="Select your SIM"
                placeholderStyle={{color: '#007aff'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.company_id}
                onValueChange={value => this.setState({company: value})}>
                {this.props.company.data.map((e, key) => {
                  return <Picker.Item key={key} label={e.name} value={e.id} />;
                })}
              </Picker>
            </Item>
            <Item style={style.formItem}>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Job's Description"
                style={style.textArea}
                value={this.state.description}
                onChangeText={text => this.setState({description: text})}
              />
            </Item>
            <Button style={style.button} onPress={this.onUpdate}>
              <Text style={style.buttonText}>UPDATE</Text>
            </Button>
          </Form>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
  user: state.user,
  job: state.job,
});

export default connect(mapStateToProps)(UpdateJobScreen);
