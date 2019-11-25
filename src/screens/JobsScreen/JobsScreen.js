import React, {Component} from 'react';
import qs from 'qs';
import {Card, Drawer, Button, Picker, Icon, Item} from 'native-base';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {BASE_URL} from 'react-native-dotenv';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';

import SideBar from '../Drawer/SideBar';
import HeaderComponent from './HeaderComponent';
import HeaderSearchComponent from './HeaderSearchComponent';
import FilterModal from './FilterModal';

import style from './style';

import {connect} from 'react-redux';
import {getJobs} from '../../redux/action/job';
import {getCompanies} from '../../redux/action/company';

import {NavigationEvents} from 'react-navigation';

class JobScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // title: 'JobHunt',
      // headerLeft: () => (
      //   <TouchableOpacity
      //     onPress={navigation.getParam('toogleDrawer')}
      //     style={navigation.getParam('style')}>
      //     <Icon name="menu" color="#6e6e6e" size={30} />
      //   </TouchableOpacity>
      // ),
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      query: {
        qname: '',
        qcompany: '',
        orderby: 'date_updated',
        order: 'asc',
      },
      page: '1',
      isDrawerOpen: false,
      isSearch: false,
      modalVisible: false,
    };
  }

  componentDidMount() {
    // this.props.navigation.setParams({
    //   toogleDrawer: this.toogleDrawer,
    //   style: style.drawerMenu,
    // });
    // this.openDrawer();
    // this.getData();
    if (this.props.company.data.length < 1) {
      this.props.dispatch(getCompanies());
    }
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
    this.setState({isDrawerOpen: false});
    // this.isDrawerOpen1 = false;
  }

  openDrawer() {
    this.drawer._root.open();
    // this.isDrawerOpen1 = true;
    this.setState({isDrawerOpen: true});
  }

  toogleDrawer = () => {
    if (this.state.isDrawerOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  };

  toogleIsSearch = () => {
    this.setState({isSearch: !this.state.isSearch});
    // this.isSearch1 = !this.isSearch1;
  };

  onSearchChange = qname => {
    let queryTemp = {...this.state.query, qname: qname};
    this.setState({query: queryTemp});
  };

  onSearchSubmit = () => {
    this.getData();
  };

  onPaginationButtonClicked = (url, nextOrPrev) => {
    let pageTemp = parseInt(this.state.page);
    if (nextOrPrev === 'next') {
      pageTemp++;
      this.setState({page: pageTemp.toString()});
    } else {
      pageTemp--;
      this.setState({page: pageTemp.toString()});
    }
    this.getData(url);
  };

  toogleModal = visibility => {
    if (visibility !== undefined) {
      this.setState({modalVisible: visibility});
    } else {
      this.setState({modalVisible: !this.state.modalVisible});
    }
  };

  onFilterSubmit = query => {
    let queryTemp = {...this.state.query, ...query};
    console.log(queryTemp);
    this.setState({query: queryTemp});
    this.getData(qs.stringify(queryTemp));
  };

  onPageValueChange = page => {
    let queryTemp = {...this.state.query, page: page};
    this.getData(qs.stringify(queryTemp));
    this.setState({page});
  };

  goToLoginScreen = () => {
    this.props.navigation.navigate('Loginscreen');
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <SideBar
            navigator={this.navigator}
            goToLoginScreen={this.goToLoginScreen}
            properties={this.props}
          />
        }
        onClose={() => this.closeDrawer()}>
        {this.state.isSearch ? (
          <HeaderSearchComponent
            toogleIsSearch={this.toogleIsSearch}
            onSearchChange={this.onSearchChange}
            onSearchSubmit={this.onSearchSubmit}
            toogleModal={this.toogleModal}
          />
        ) : (
          <HeaderComponent
            toogleDrawer={this.toogleDrawer}
            toogleIsSearch={this.toogleIsSearch}
          />
        )}
        <FilterModal
          visibility={this.state.modalVisible}
          toogleModal={this.toogleModal}
          onFilterSubmit={this.onFilterSubmit}
          companies={this.props.company.data}
        />
        <NavigationEvents onDidFocus={() => this.getData()} />
        <View style={style.wrapper}>
          <ScrollView>
            {!this.props.job.isLoading && !this.props.job.isError ? (
              <View>
                {this.props.job.data.result.map(job => (
                  <Card
                    key={job.id.toString()}
                    button={true}
                    style={style.card}>
                    <TouchableOpacity
                      style={style.cardContentContainer}
                      onPress={() =>
                        this.props.navigation.navigate('JobDetailScreen', job)
                      }>
                      <Image
                        style={style.jobImage}
                        source={{
                          uri:
                            BASE_URL +
                            '' +
                            job.company_logo.slice(22, job.company_logo.lenght),
                        }}
                      />
                      <View style={style.rightContainer}>
                        <Text style={style.titleText} numberOfLines={2}>
                          {job.name.trim()}
                        </Text>
                        <Text style={style.categoryText}>{job.category}</Text>
                        <View style={style.textInfoContainer}>
                          <IconMat
                            name="map-marker"
                            color="#0984e3"
                            size={20}
                          />
                          <Text style={style.jobInfoText}>{job.location}</Text>
                        </View>
                        <View style={style.textInfoContainer}>
                          <IconMat
                            name="cash-multiple"
                            color="#0984e3"
                            size={20}
                          />
                          <Text style={style.jobInfoText}>{job.salary}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Card>
                ))}
                <View style={style.paginationContainer}>
                  <Button transparent style={style.paginationButton}>
                    {this.props.job.data.prev_page ? (
                      <TouchableOpacity
                        onPress={() =>
                          this.onPaginationButtonClicked(
                            this.props.job.data.prev_page,
                            'prev',
                          )
                        }>
                        <Text style={style.buttonTextEnabled}>{'< Prev'}</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={style.buttonTextDisabled}>{'< Prev'}</Text>
                    )}
                  </Button>
                  <Item style={style.pickerItem}>
                    <Picker
                      iosIcon={<Icon name="arrow-down" />}
                      style={style.picker}
                      selectedValue={this.state.page}
                      onValueChange={this.onPageValueChange.bind(this)}>
                      {(function(pickers, i, len) {
                        while (++i <= len) {
                          pickers.push(
                            <Picker.Item
                              key={i + 'saldfjsdfjlsad'}
                              label={i + ''}
                              value={i + ''}
                            />,
                          );
                        }
                        return pickers;
                      })([], 0, parseInt(this.props.job.data.total_pages))}
                    </Picker>
                  </Item>
                  <Button transparent style={style.paginationButton}>
                    {this.props.job.data.next_page ? (
                      <TouchableOpacity
                        onPress={() =>
                          this.onPaginationButtonClicked(
                            this.props.job.data.next_page,
                            'next',
                          )
                        }>
                        <Text style={style.buttonTextEnabled}>{'Next >'}</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={style.buttonTextDisabled}>{'Next >'}</Text>
                    )}
                  </Button>
                </View>
              </View>
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
  company: state.company,
});

export default connect(mapStateToProps)(JobScreen);
