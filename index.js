/**
 * @format
 */

import {AppRegistry} from 'react-native';
import register from './src/register';
// import A from './src/components/A';
import Test from './src/components/registration/Test';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Test);
