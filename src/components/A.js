import React, {Component} from 'react';
import B from './B';
import C from './C';
import {Text, View} from 'react-native';

export default class A extends Component {
  onReceiveData = data => {
    console.log('Log tai A: ', data);
  };

  render() {
    return (
      <View>
        <Text>Hello, I am A</Text>
        <B onSendData={this.onReceiveData} />
        <C />
      </View>
    );
  }
}
