import { AppRegistry, LogBox } from 'react-native';
import { name as AppName } from './app.json';
import App from "/src/main/index";

LogBox.ignoreAllLogs();
AppRegistry.registerComponent(AppName, () => App);
