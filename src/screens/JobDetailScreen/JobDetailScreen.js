import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';

// this.props.navigation.getParam('name', '')
import style from './style';

export default class JobDetailScreen extends Component {
  render() {
    return (
      <ScrollView
        style={style.root}
        contentContainerStyle={style.rootContainer}>
        <View style={style.headerContainer}>
          <Image
            source={{uri: this.props.navigation.getParam('company_logo', '')}}
            style={style.logoImage}
          />
          <Text style={style.titleText}>
            {this.props.navigation.getParam('name', '')}
          </Text>
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
            <Text>{this.props.navigation.getParam('company', '')}</Text>
            <Text>{this.props.navigation.getParam('category', '')}</Text>
            <Text>{this.props.navigation.getParam('salary', '')}</Text>
            <Text>{this.props.navigation.getParam('location', '')}</Text>
            <Text>{this.props.navigation.getParam('date_added', '')}</Text>
            <Text>{this.props.navigation.getParam('date_updated', '')}</Text>
          </View>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.labelTitle}>Description: </Text>
          <Text stye={style.descriptionText}>
            {this.props.navigation.getParam('description', '')}
          </Text>
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
