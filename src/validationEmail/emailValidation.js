import React, {Component} from 'react';
import {Text, View, TextInput, TouchableNativeFeedback} from 'react-native';
import {validate} from 'validate.js';

import constraints from './constraints';

class emailValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validated: false,
    };
  }

  go = () => {
    if (
      this.state.email.test(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ==
      0
    ) {
      this.setState({validated: true});
    } else {
      this.setState({validated: false});
    }
  };
  render() {
    return (
      <View style={{alignSelf: 'center', marginTop: 100}}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            height: 20,
            width: 200,
            backgroundColor: 'blue',
            color: 'red',
          }}
          value={this.setState.email}
        />

        <TouchableNativeFeedback onPress={this.go.bind(this)}>
          <Text> GO </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
export default emailValidation;
