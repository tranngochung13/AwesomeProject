import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Form extends Component {
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  render() {
    const {value, labelName, placeHolder, changeText, valueError} = this.props;
    return (
      <>
        <View style={styles.borders}>
          <Text style={styles.text}>{labelName ? labelName : ''}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeHolder ? placeHolder : ''}
          onChangeText={val => this.onChangeText(changeText, val)}>
          {value && value}
        </TextInput>
        <Text style={styles.textError}>{valueError ? valueError : ''}</Text>
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
