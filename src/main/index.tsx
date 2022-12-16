import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import MainScreen from "/src/main/screens/MainScreen";
import * as React from 'react';
import { v4 as uuid4 } from 'uuid';
import ElementUtils from '../utils/ElementUtils';
import SecondayScreen from './screens/SecondayScreen';
import { StatusBar } from 'react-native';

const App = () =>
{
  const Stack = createNativeStackNavigator();
  const options: NativeStackNavigationOptions = { headerShown: false, statusBarStyle: "dark", statusBarColor: "transparent", statusBarAnimation: "slide", statusBarTranslucent: true };

  /* const [ text, setText ] = React.useState("");
  const [ rootState, setRootState ] = React.useState(""); */

  React.useEffect(() =>
  {
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen key={ ElementUtils.keygen() } name={ "MainScreen" } component={ MainScreen } options={ { ...options, animation: 'fade' } } />
        <Stack.Screen key={ ElementUtils.keygen() } name={ "SecondayScreen" } component={ SecondayScreen } options={ { ...options, animation: 'fade' } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { App as default };

