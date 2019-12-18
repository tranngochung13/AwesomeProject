import React, {Component} from 'react';
import B from '../B';
import A from '../A';
import C from '../C';
import {View, Text} from 'react-native';
import users from './users';

export default class test extends Component {
  render() {
    return (
      <View>
        <B onSendData={this.onReceiveData} />
        <A />
        <users />
      </View>
    );
  }
}
