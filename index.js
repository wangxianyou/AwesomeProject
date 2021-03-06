/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {name as scrollviewName} from './helloScrollview.json';
import {name as flatlistName} from './helloFlatList.json';
import {name as sectionlistName} from './helloSectionList.json';
import {name as filmName} from './hello_film'
import HelloWorldApp from "./js/HelloWorldApp";
import HelloScrollview from "./js/HelloScrollview";
import HelloFlatList from "./js/HelloFlatList";
import {HelloSectionList} from "./js/HelloSectionListDemo";
import HelloFilm from "./js/HelloFilm"
import HelloReactNavigation from "./js/HelloNavigator"

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HelloWorldApp);
AppRegistry.registerComponent(scrollviewName, () => HelloScrollview);
AppRegistry.registerComponent(flatlistName, () => HelloFlatList);
AppRegistry.registerComponent(sectionlistName, () => HelloSectionList);
AppRegistry.registerComponent(filmName,() => HelloFilm);
AppRegistry.registerComponent("HelloReactNavigation",() => HelloReactNavigation);
