import React, {Component} from 'react';
import B from '../B';
import A from '../A';
import {View} from 'react-native';
import User from './User';
import Form from './Form';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      phoneNumber: '',
      username: '',
      password: '',
      confirmPassword: '',

      userError: '',
      emailError: '',
      phoneNumberError: '',
      usernameError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  }
  render() {
    return (
      <>
        <Form
          labelName="Name of user*"
          placeHolder="User"
          onChangeText={val => this.onChangeText('user', val)}
        />
        <Form
          labelName="Email*"
          placeHolder="Email"
          onChangeText={val => this.onChangeText('email', val)}
        />
      </>
    );
  }
}
