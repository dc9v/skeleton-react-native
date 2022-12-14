import { AppRegistry, LogBox } from 'react-native';
import "react-native-gesture-handler";
import "reflect-metadata";
import { name as appName } from './app.json';
import App from "/src/main/index";

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
