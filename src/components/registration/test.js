import React, {Component} from 'react';
import {
  View,
  Alert,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  BackHandler,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Form from './Form';
import Submit from './Button';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,

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

  onRestart = () => {
    this.setState({userError: ''});
    this.setState({emailError: ''});
    this.setState({phoneNumberError: ''});
    this.setState({usernameError: ''});
    this.setState({passwordError: ''});
    this.setState({confirmPasswordError: ''});
  };

  onPress = () => {
    this.onRestart();
    let {
      user,
      email,
      phoneNumber,
      username,
      password,
      confirmPassword,
    } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (user === '') {
      this.setState({userError: 'You need type user'});
    }
    // Validation email
    if (email === '') {
      this.setState({emailError: 'You need type email'});
    } else if (reg.test(email) === false) {
      this.setState({emailError: 'Email wrong'});
    }
    //Validation phone number
    if (phoneNumber === '') {
      this.setState({phoneNumberError: 'You need type phone number'});
    } else if (phoneNumber.length < 9 || phoneNumber.length > 11) {
      this.setState({phoneNumberError: 'Phone number length error'});
    }
    // Validation username
    if (username === '') {
      this.setState({usernameError: 'You need type username'});
    }
    // Validation password
    if (password === '') {
      this.setState({passwordError: 'You need type password'});
    }
    // Validation confirm password
    if (confirmPassword === '') {
      this.setState({confirmPasswordError: 'You need type confirm password'});
    } else if (confirmPassword === password) {
    } else {
      this.setState({
        confirmPasswordError:
          'Password confirmation does not match the password',
      });
    }
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onExit = () =>
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.borders}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{flex: 1}}>
                  <Text
                    style={([styles.text], [styles.borders1])}
                    onPress={this.onExit}>
                    X
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <View style={{flex: 2.5}}>
                <Text style={([styles.text], [styles.borders1])}>
                  Registration
                </Text>
              </View>
              <View style={{flex: 0.5}} />
            </View>
            <Form
              labelName="Name of user*"
              placeHolder="John"
              getData={val => this.onChangeText('user', val)}
              valueError={this.state.userError}
            />
            <Form
              labelName="Email*"
              placeHolder="abc@gmail.com"
              getData={val => this.onChangeText('email', val)}
              valueError={this.state.emailError}
            />
            <Form
              labelName="Phone number*"
              placeHolder="012345678..."
              getData={val => this.onChangeText('phoneNumber', val)}
              valueError={this.state.phoneNumberError}
            />
            <Form
              labelName="Username*"
              placeHolder="john123"
              getData={val => this.onChangeText('username', val)}
              valueError={this.state.usernameError}
            />
            <Form
              labelName="Password*"
              placeHolder="****************"
              getData={val => this.onChangeText('password', val)}
              valueError={this.state.passwordError}
            />
            <Form
              labelName="Confirm password*"
              placeHolder="****************"
              getData={val => this.onChangeText('confirmPassword', val)}
              valueError={this.state.confirmPasswordError}
              secureTextEntry={true}
            />
            <View style={styles.buttonSubmit}>
              <Submit submit={this.onPress} labelSubmit="Register" />
              <Submit submit={this.onExit} labelSubmit="Exit" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  borders: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  borders1: {
    flex: 1,
    fontSize: 40,
  },
  buttonSubmit: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
  },
});
