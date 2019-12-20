import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  BackHandler,
  Alert,
  TouchableNativeFeedback,
  SafeAreaView,
} from 'react-native';
import User from './components/registration/User';

class register extends Component {
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

  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  onPress = () => {
    let {
      user,
      email,
      phoneNumber,
      username,
      password,
      confirmPassword,
    } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Validation email
    if (email === '') {
      this.setState({emailError: 'You need type email'});
    } else if (reg.test(email) === false) {
      this.setState({emailError: 'Email wrong'});
    } else {
      this.setState({emailError: ''});
    }
    //Validation phone number
    if (phoneNumber === '') {
      this.setState({phoneNumberError: 'You need type phone number'});
    } else if (phoneNumber.length < 9 || phoneNumber.length > 11) {
      this.setState({phoneNumberError: 'Phone number length error'});
    } else {
      this.setState({phoneNumberError: ''});
    }
    // Validation username
    if (username === '') {
      this.setState({usernameError: 'You need type username'});
    } else {
      this.setState({usernameError: ''});
    }
    // Validation password
    if (password === '') {
      this.setState({passwordError: 'You need type password'});
    } else {
      this.setState({passwordError: ''});
    }
    // Validation confirm password
    if (confirmPassword === '') {
      this.setState({confirmPasswordError: 'You need type confirm password'});
    } else if (confirmPassword === password) {
      this.setState({confirmPasswordError: ''});
      Alert.alert('Success');
    } else {
      this.setState({
        confirmPasswordError:
          'Password confirmation does not match the password',
      });
    }
    // password and confirm password
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.borders}>
            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={{flex: 1}}>
                <Text
                  style={([styles.text], [styles.borders1])}
                  onPress={() =>
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
                    )
                  }>
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

          <User />

          <View style={styles.borders}>
            <Text style={styles.text}>Email*</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onSubmitEditing={() => {
              this.userTextInput.focus();
            }}
            blurOnSubmit={false}
            onChangeText={val => this.onChangeText('email', val)}>
            {this.state.email}
          </TextInput>
          <Text style={styles.textError}>{this.state.emailError}</Text>

          <View style={styles.borders}>
            <Text style={styles.text}>Phone number*</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="numeric"
            maxLength={11}
            ref={input => {
              this.userTextInput = input;
            }}
            onSubmitEditing={() => {
              this.usernameTextInput.focus();
            }}
            onChangeText={val => this.onChangeText('phoneNumber', val)}>
            {this.state.phoneNumber}
          </TextInput>
          <Text style={styles.textError}>{this.state.phoneNumberError}</Text>

          <View style={styles.borders}>
            <Text style={styles.text}>Username*</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              ref={input => {
              this.usernameTextInput = input;
            }}
              placeholder="Username"
              onChangeText={val => this.onChangeText('username', val)}>
              {this.state.username}
            </TextInput>
          </View>
          <Text style={styles.textError}>{this.state.usernameError}</Text>

          <View style={styles.borders}>
            <Text style={styles.text}>Password*</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={val => this.onChangeText('password', val)}>
            {this.state.password}
          </TextInput>
          <Text style={styles.textError}>{this.state.passwordError}</Text>

          <View style={styles.borders}>
            <Text style={styles.text}>Confirm password*</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="confirm password"
            secureTextEntry={true}
            onChangeText={val => this.onChangeText('confirmPassword', val)}>
            {this.state.confirmPassword}
          </TextInput>
          <Text style={styles.textError}>
            {this.state.confirmPasswordError}
          </Text>

          <View style={styles.buttonSubmit}>
            <TouchableNativeFeedback
              onPress={this.onPress}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={[styles.borders2]}>
                <Text style={styles.fontSizeText}>Register</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={styles.borders2}>
                <Text
                  style={styles.fontSizeText}
                  onPress={() =>
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
                    )
                  }>
                  Exit
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  text: {
    fontSize: 22,
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
  borders2: {
    flex: 1,
    fontWeight: 'bold',
    borderColor: 'pink',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 55,
    borderRadius: 15,
    backgroundColor: 'skyblue',
    margin: 10,
  },
  buttonSubmit: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 15,
  },
  textError: {
    color: 'red',
  },
});

export default register;
