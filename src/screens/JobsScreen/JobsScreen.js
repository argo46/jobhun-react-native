import React, {Component} from 'react';
import qs from 'qs';
import {Card, Button, Drawer, Header, Left, Container} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Intl from 'intl';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import SideBar from '../Drawer/SideBar';

import style from './style';

import {connect} from 'react-redux';
import {getJobs} from '../../redux/action/job';

class JobScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'JobHunt',
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.getParam('toogleDrawer')}
          style={navigation.getParam('style')}>
          <Icon name="menu" color="#6e6e6e" size={30} />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      query: {qname: '', qcompany: '', orderby: 'date_updated', order: 'asc'},
      isDrawerOpen: false,
    };
    let isDrawerOpen1 = false;
  }

  componentDidMount() {
    this.props.navigation.setParams({
      toogleDrawer: this.toogleDrawer,
      style: style.drawerMenu,
    });
    // this.openDrawer();
    this.getData();
  }

  getData = query => {
    if (query === undefined) {
      this.props.dispatch(getJobs(qs.stringify(this.state.query)));
      console.log(query);
    } else {
      this.props.dispatch(getJobs(query.toString()));
      console.log(query);
    }
    console.log(this.props);
  };

  closeDrawer() {
    this.drawer._root.close();
    this.isDrawerOpen1 = false;
  }

  openDrawer() {
    this.drawer._root.open();
    // this.setState({isDrawerOpen: true});
    this.isDrawerOpen1 = true;
  }

  toogleDrawer = () => {
    if (this.isDrawerOpen1) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
        <View style={style.wrapper}>
          <ScrollView>
            {!this.props.job.isLoading && !this.props.job.isError ? (
              this.props.job.data.result.map(job => (
                <Card key={job.id.toString()} button={true} style={style.card}>
                  <TouchableOpacity
                    style={style.cardContentContainer}
                    onPress={() =>
                      this.props.navigation.navigate('JobDetailScreen', job)
                    }>
                    <Image
                      style={style.jobImage}
                      source={{
                        uri:
                          'http://192.168.1.4:3000/' +
                          job.company_logo.slice(22, job.company_logo.lenght),
                      }}
                    />
                    <View style={style.rightContainer}>
                      <Text style={style.titleText}>
                        {job.name.trim().toUpperCase()}
                      </Text>
                      <Text style={style.categoryText}>{job.category}</Text>
                      <View style={style.textInfoContainer}>
                        <Icon name="map-marker" color="#0984e3" size={20} />
                        <Text style={style.jobInfoText}>{job.location}</Text>
                      </View>
                      <View style={style.textInfoContainer}>
                        <Icon name="cash-multiple" color="#0984e3" size={20} />
                        <Text style={style.jobInfoText}>{job.salary}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Card>
              ))
            ) : (
              <></>
            )}
          </ScrollView>
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  job: state.job,
});

export default connect(mapStateToProps)(JobScreen);
