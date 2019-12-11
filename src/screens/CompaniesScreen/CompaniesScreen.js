import React, {Component} from 'react';
import {Card} from 'native-base';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_URL} from 'react-native-dotenv';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';

import style from './style';

import {connect} from 'react-redux';

class CompaniesScreen extends Component {
  static navigationOptions = () => {
    return {
      title: 'Companies List',
      backgroundColor: '#0760a6',
    };
  };
  render() {
    return (
      <View style={style.wrapper}>
        <ScrollView>
          {!this.props.company.isLoading && !this.props.company.isError ? (
            <View>
              {this.props.company.data.map(company => (
                <Card
                  key={company.id.toString()}
                  button={true}
                  style={style.card}>
                  <View
                    style={style.cardContentContainer}
                    // onPress={}
                  >
                    <Image
                      style={style.companyImage}
                      source={{
                        uri: company.logo,
                      }}
                    />
                    <View style={style.rightContainer}>
                      <View style={style.editDeleteContainer}>
                        <TouchableOpacity style={style.editButton}>
                          <IconMat name="pencil" color="grey" size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <IconMat name="delete" color="#ff5959" size={22} />
                        </TouchableOpacity>
                      </View>
                      <Text style={style.titleText} numberOfLines={2}>
                        {company.name.trim()}
                      </Text>
                      <View style={style.locationContainer}>
                        <IconMat name="map-marker" color="grey" size={20} />
                        <Text style={style.location}>{company.location}</Text>
                      </View>
                      <View style={style.divider} />
                      <View style={style.descriptionContainer}>
                        <Text style={style.description}>
                          {company.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  company: state.company,
});

export default connect(mapStateToProps)(CompaniesScreen);
