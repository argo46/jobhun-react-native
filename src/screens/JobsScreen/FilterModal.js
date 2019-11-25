import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker, Icon, Card, Item, Button} from 'native-base';

export default class FilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qcompany: '',
      orderby: 'date_updated',
      order: 'asc',
    };
  }

  onCompanyValueChange(value) {
    this.setState({
      qcompany: value,
    });
  }

  onOrderByValueChange(value) {
    this.setState({
      orderby: value,
    });
  }

  onOrderValueChange(value) {
    this.setState({
      order: value,
    });
  }

  onSubmit = () => {
    let query = {...this.state};
    this.props.onFilterSubmit(query);
    this.props.toogleModal(false);
  };

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visibility}>
        <View style={style.root}>
          <Card style={style.container}>
            <Text style={style.titleText}>Search Filter</Text>
            <View style={style.filterListContainer}>
              <Text style={style.filterLabel}>Company</Text>
              <Item style={style.item}>
                <Picker
                  mode="dropdown"
                  style={style.picker}
                  selectedValue={this.state.qcompany}
                  onValueChange={this.onCompanyValueChange.bind(this)}>
                  <Picker.Item label="All Companies" value="" />
                  {this.props.companies.map((e, key) => {
                    return (
                      <Picker.Item key={key} label={e.name} value={e.name} />
                    );
                  })}
                </Picker>
              </Item>
            </View>
            <View style={style.filterListContainer}>
              <Text style={style.filterLabel}>Sort by</Text>
              <Item style={style.item}>
                <Picker
                  mode="dropdown"
                  style={style.picker}
                  selectedValue={this.state.orderby}
                  onValueChange={this.onOrderByValueChange.bind(this)}>
                  <Picker.Item label="Date Updated" value="date_updated" />
                  <Picker.Item label="Job Name" value="name" />
                  <Picker.Item label="Company" value="company" />
                </Picker>
              </Item>
            </View>
            <View style={style.filterListContainer}>
              <Text style={style.filterLabel}>Order</Text>
              <Item style={style.item}>
                <Picker
                  iosIcon={<Icon name="arrow-down" />}
                  style={style.picker}
                  selectedValue={this.state.order}
                  onValueChange={this.onOrderValueChange.bind(this)}>
                  <Picker.Item label="A..Z" value="asc" />
                  <Picker.Item label="Z..A" value="desc" />
                </Picker>
              </Item>
            </View>
            <View style={style.buttonContainer}>
              <Button style={style.button} transparent>
                <TouchableOpacity onPress={() => this.props.toogleModal(false)}>
                  <Text style={style.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </Button>
              <Button style={style.button} transparent>
                <TouchableOpacity onPress={this.onSubmit}>
                  <Text style={style.buttonText}>OK</Text>
                </TouchableOpacity>
              </Button>
            </View>
          </Card>
        </View>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  root: {
    marginTop: 50,
    backgroundColor: 'rgba(166, 166, 166, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingEnd: 18,
    height: '100%',
  },
  titleText: {
    alignSelf: 'stretch',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  container: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 12,
  },
  filterListContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  item: {
    flex: 1.8,
    marginLeft: 30,
  },
  filterLabel: {
    flex: 1,
    fontSize: 15,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  button: {
    width: 60,
    marginHorizontal: 5,
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
});
