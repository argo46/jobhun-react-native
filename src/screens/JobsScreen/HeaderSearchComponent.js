import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Item,
  Input,
} from 'native-base';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderSearchComponent = props => {
  return (
    <Header style={style.root}>
      <Left>
        <Button transparent>
          <TouchableOpacity onPress={props.toogleIsSearch}>
            <Icon name="arrow-back" />
          </TouchableOpacity>
        </Button>
      </Left>
      <Right>
        <View style={style.searchContainer}>
          <Item inlineLabel style={style.searchItem}>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onSubmitEditing={() => props.onSearchSubmit()}
              onChangeText={qname => props.onSearchChange(qname)}
            />
          </Item>
        </View>
        <Button transparent>
          <TouchableOpacity onPress={() => props.toogleModal()}>
            <IconMat name="tune" color="#fff" size={25} />
          </TouchableOpacity>
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderSearchComponent;

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    // flexGrow: 1,
    borderRadius: 24,
    height: 43,
    width: '100%',
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchItem: {
    paddingVertical: 10,
  },
});
