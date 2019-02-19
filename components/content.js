import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,Label } from 'native-base';
import {View, StyleSheet} from 'react-native';

export default class Sample extends Component {

  render() {

    return (

      <Container>

        <Header style={style.header}>
          <Body style={{alignItems:'center'}}>
            <Title style={{color:'black'}}><Icon type="FontAwesome" name="plus" style={{color:'red', fontSize:20,}}/> Holy hospital</Title>
          </Body>
        </Header>


        <Content padder>
        <View style={{alignItems:"center"}}>  
      
        <Item floatingLabel style={style.txtInput}>
        <Label style={{fontSize:13}}>Name</Label>
              <Input />
            </Item>
      
            <Item floatingLabel style={style.txtInput}>
        <Label style={{fontSize:13}}>Father's name</Label>
              <Input />
            </Item>
      
            <Item floatingLabel style={style.txtInput}>
        <Label style={{fontSize:13}}>Mobile</Label>
              <Input />
            </Item>
      
            <Item floatingLabel style={style.txtInput}>
        <Label style={{fontSize:13}}>CNIC</Label>
              <Input />
            </Item>

            <Button block success style={{marginTop:15,}}>
                <Icon name="checkmark" />
                <Text>Submit</Text>
            </Button>
      
        </View>
        </Content>


<Footer>

</Footer>
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
txtInput:{
    borderColor:'red',
    borderBottomWidth:0.5,
    marginTop:10
}
}

)