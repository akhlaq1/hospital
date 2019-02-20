import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Footer,Body,Title } from 'native-base';
import Sample from './content';
import {View, StyleSheet} from 'react-native';
import { BottomNavigation} from 'react-native-paper';

const FieldsTab = () => <Sample/>;

const DataTab = () => <Text>Albums</Text>;


export default class Nav extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'fields', icon: 'add-circle-outline' },
      { key: 'data', icon: 'supervisor-account' },
    ],
  }

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    fields: FieldsTab,
    data: DataTab,
  });

  render() {
    return (
      <Container>
         <Header style={style.header} hasTabs>
          <Body style={{alignItems:'center'}}>
            <Title style={{color:'black'}}><Icon type="FontAwesome" name="plus" style={{color:'red', fontSize:20,}}/> Holy hospital</Title>
          </Body>
        </Header>

      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}
      />
      </Container>
    );
  }
}


const style = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        borderBottomWidth:0.3,
        borderBottomColor:'grey'
    },
}
)