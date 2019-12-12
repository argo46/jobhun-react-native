import React from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';

import {Header, Left, Button, Icon, Body, Title, Right} from 'native-base';

const HeaderComponent = props => {
  return (
    <Header style={{backgroundColor: '#0760a6'}}>
      <StatusBar backgroundColor="#003777" barStyle="light-content" />
      <Left>
        <Button transparent>
          <TouchableOpacity onPress={props.toogleDrawer}>
            <Icon name="menu" />
          </TouchableOpacity>
        </Button>
      </Left>
      <Body>
        <Title>JobHunt</Title>
      </Body>
      <Right>
        <Button transparent>
          <TouchableOpacity onPress={props.toogleIsSearch}>
            <Icon name="search" />
          </TouchableOpacity>
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComponent;
