import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class B extends Component {
  sendData = () => {
    this.props.onSendData('B truyen du lieu den A');
  };

  render() {
    return (
      <View onTouchStart={this.sendData}>
        <Text>Hello, I am B</Text>
        <TextInput />
      </View>
    );
  }
}
