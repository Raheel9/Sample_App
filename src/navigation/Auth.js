import React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login_Screen from '../Screens/Auth/Login_Screen';
import Sinup_Screen from '../Screens/Auth/Sinup_Screen';
import Home from "../Screens/Home";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login_Screen'screenOptions={{headerShown:false}}>
     
     <Stack.Screen name="Login_Screen" component={Login_Screen}/>
     <Stack.Screen name="Sinup_Screen" component={Sinup_Screen}/>
      </Stack.Navigator>
  );
}
export default MyStack