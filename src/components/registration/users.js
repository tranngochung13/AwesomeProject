import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

export default class users extends Component {
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
