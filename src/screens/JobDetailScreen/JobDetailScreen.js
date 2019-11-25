import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

// this.props.navigation.getParam('name', '')
import style from './style';

import {connect} from 'react-redux';
import {deleteJob} from '../../redux/action/job';

class JobDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props.navigation.state.params};
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={navigation.getParam('deleteJob')}>
            <IconMat name="briefcase-remove" color="#fa5263" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={navigation.getParam('updateJob')}>
            <IconMat name="briefcase-edit" color="#0984e3" size={30} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      deleteJob: this.deleteJob,
      updateJob: this.updateJob,
    });
  }

  deleteJob = () => {
    console.log(this.props.user.token);
    this.props.dispatch(deleteJob(this.state.id, this.props.user.token));
    this.props.navigation.navigate('JobScreen');
  };
  updateJob = () => {
    this.props.navigation.navigate('UpdateJobScreen', {...this.state});
  };

  render() {
    console.log(this.props.navigation.state.params);
    return (
      <ScrollView
        style={style.root}
        contentContainerStyle={style.rootContainer}>
        <View style={style.headerContainer}>
          <Image
            source={{uri: this.state.company_logo}}
            style={style.logoImage}
          />
          <Text style={style.titleText}>{this.state.name}</Text>
        </View>
        <View style={style.middleContainer}>
          <View style={style.labels}>
            <Text>Company</Text>
            <Text>Category</Text>
            <Text>Salary</Text>
            <Text>Location</Text>
            <Text>Date Posted</Text>
            <Text>Last Updated</Text>
          </View>
          <View style={style.values}>
            <Text>{this.state.company}</Text>
            <Text>{this.state.category}</Text>
            <Text>{this.state.salary}</Text>
            <Text>{this.state.location}</Text>
            <Text>{this.state.date_added}</Text>
            <Text>{this.state.date_updated}</Text>
          </View>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.labelTitle}>Description: </Text>
          <Text stye={style.descriptionText}>{this.state.description}</Text>
        </View>
        <View>
          <Button style={style.button}>
            <Text style={style.buttonText}>Apply</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  job: state.job,
});

export default connect(mapStateToProps)(JobDetailScreen);
