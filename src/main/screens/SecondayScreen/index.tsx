import React, { ForwardRefExoticComponent, useImperativeHandle } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationHelpers } from '@react-navigation/native-stack/lib/typescript/src/types';
import { Button, StatusBar, View, Text } from 'react-native';
import { SecondayScreenProps, SecondayScreenRef } from './ISecondayScreen';
import ElementUtils from '/src/utils/ElementUtils';

const SecondayScreen: ForwardRefExoticComponent<SecondayScreenProps & React.RefAttributes<SecondayScreenRef>> = React.forwardRef((props, ref) =>
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
      <Text style={ { paddingBottom: 20 } }>SecondayScreen</Text>
      <Button title={ "ChangeScreen" } onPress={ () => { navigation.navigate("MainScreen"); } } />
    </View>);
});

export default SecondayScreen;