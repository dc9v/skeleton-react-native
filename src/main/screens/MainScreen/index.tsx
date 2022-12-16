import React, { ForwardRefExoticComponent, useImperativeHandle } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Button, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MainScreenProps, MainScreenRef } from './IMainScreen';
import ElementUtils from '/src/utils/ElementUtils';

const MainScreen: ForwardRefExoticComponent<MainScreenProps & React.RefAttributes<MainScreenRef>> = React.forwardRef((props, ref) =>
{
  const navigation: NativeStackNavigationHelpers = useNavigation<NativeStackNavigationHelpers>();

  /* const [ id, setId ] = React.useState<MainScreenProps>();
  const [ password, setPassword ] = React.useState(""); */

  useImperativeHandle(ref, () => ({
    reset: () =>
    {
      console.log("reset");
    }
  }));

  return (
    <View style={ { flex: 1, paddingTop: StatusBar.currentHeight } }>
      <Text style={ { paddingBottom: 20 } }>MainScreen</Text>
      <Button title={ "ChangeScreen" } onPress={ () => { navigation.navigate("SecondayScreen"); } } />
    </View>);
});

export default MainScreen;