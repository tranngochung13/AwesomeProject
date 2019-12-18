/**
 * @format
 */

import {AppRegistry} from 'react-native';
import register from './src/register';
// import A from './src/components/A';
import test from './src/components/registration/test';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => register);
