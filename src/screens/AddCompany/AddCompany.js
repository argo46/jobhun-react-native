import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Form, Item, Label, Input, Textarea, Button} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {addCompany, getCompanies} from '../../redux/action/company';

import style from './style';

class AddCompany extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Company',
      backgroundColor: '#0760a6',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      description: '',
      logo: '',
    };
  }
  static navigationOptions = () => {
    return {
      title: 'Add Job',
    };
  };

  choosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({logo: response});
        console.log(response);
      }
    });
  };

  onSubmitJob = () => {
    let fd = new FormData();
    fd.append('name', this.state.name);
    fd.append('location', this.state.location);
    fd.append('description', this.state.description);
    fd.append('logo', {
      name: this.state.logo.fileName,
      type: this.state.logo.type,
      uri:
        Platform.OS === 'android'
          ? this.state.logo.uri
          : this.state.logo.uri.replace('file://', ''),
    });

    this.props.dispatch(addCompany(fd)).then(() => {
      this.props
        .dispatch(getCompanies())
        .then(() => this.props.navigation.navigate('JobScreen'));
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={style.rootContainer}>
          <Form style={style.form}>
            <Item floatingLabel style={style.formItem}>
              <Label>Company Name</Label>
              <Input
                onChangeText={value => this.setState({name: value})}
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel style={style.formItem}>
              <Label>Location</Label>
              <Input
                onChangeText={value => this.setState({location: value})}
                value={this.state.location}
              />
            </Item>
            <Label style={{marginLeft: 15, color: 'grey', marginBottom: -10}}>
              Company Logo
            </Label>
            <TouchableOpacity onPress={this.choosePhoto}>
              {this.state.logo ? (
                <Image
                  source={{uri: this.state.logo.uri}}
                  style={style.imagePhoto}
                />
              ) : (
                <View style={style.formItem}>
                  <View style={style.imageUpload}>
                    <IconMat name="camera" color="#474747" size={40} />
                  </View>
                </View>
              )}
            </TouchableOpacity>
            <Item style={style.formItem}>
              <Textarea
                rowSpan={5}
                bordered
                placeholder="Company Description"
                style={style.textArea}
                onChangeText={value => this.setState({description: value})}
                value={this.state.description}
              />
            </Item>
            <Button style={style.button} onPress={this.onSubmitJob}>
              <Text style={style.buttonText}>SUBMIT</Text>
            </Button>
          </Form>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps)(AddCompany);
