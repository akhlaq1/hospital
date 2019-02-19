import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,Label,Form, Picker  } from 'native-base';
import {View, StyleSheet,ScrollView} from 'react-native';


const payment = [
  {
      label: 'Cash',
      value: 'cash',
  },
  {
      label: 'Paypal',
      value: 'Paypal',
  },
  {
      label: 'Bank',
      value: 'bank',
  },
];

export default class Sample extends Component {
  state={
    selected: undefined,
  }
  onValueChange = (value) => {
    this.setState({
      selected: value
    })
  }
  render() {
    
    return (

      <Container>
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

              <RNPickerSelect
              placeholder={{label:"Select payment method", value: null,
              color: '#9EA0A4',}}
              style={pickerSelectStyles}
              items={payment}
              onValueChange={(value) => this.onValueChange }
              />

            <Button block success style={{marginTop:15,}}>
                <Icon name="checkmark" />
                <Text>Submit</Text>
            </Button>
      
          
        </View>
        </Content>

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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      marginTop:10,
      borderColor: 'red',
      borderRadius: 8,
      color: 'black', // to ensure the text is never behind the icon
  },
});