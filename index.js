/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from "./js/HelloWorldApp";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HelloWorldApp);
