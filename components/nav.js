import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Footer,Body,Title } from 'native-base';
import Sample from './content';
import {View, StyleSheet} from 'react-native';

export default class Nav extends Component {
  render() {
    return (
      <Container>
         <Header style={style.header} hasTabs>
          <Body style={{alignItems:'center'}}>
            <Title style={{color:'black'}}><Icon type="FontAwesome" name="plus" style={{color:'red', fontSize:20,}}/> Holy hospital</Title>
          </Body>
        </Header>

        <Tabs >
          <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Sample />
          </Tab>
          <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
            <Text>Hello</Text>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Text>Ali</Text>
          </Tab>
        </Tabs>
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