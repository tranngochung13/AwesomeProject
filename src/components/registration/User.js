import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import B from '../B';
import C from '../C';

export default class User extends Component {
  onReceiveData = data => {
    console.log('Log tai A: ', data);
  };

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      userError: '',
    };
  }

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  onPress = () => {
    let {user} = this.state;
    // Validation user
    if (user === '') {
      this.setState({userError: 'You need type user'});
    } else {
      this.setState({userError: ''});
    }
  };

  render() {
    return (
      <>
        <View style={styles.borders}>
          <Text style={styles.text}>Name of user*</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="User"
          onChangeText={val => this.onChangeText('user', val)}>
          {this.state.user}
        </TextInput>
        <Text style={styles.textError}>{this.state.userError}</Text>
      </>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  borders: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  input: {
    borderColor: 'pink',
    borderWidth: 1,
    width: 380,
    height: 55,
    margin: 5,
    padding: 8,
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 15,
  },
  textError: {
    color: 'red',
  },
});
