
import React, { Component } from 'react';
import { View, Text, } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import FlatScreen from '../Screens/FlatScreen';
import Profile from '../Screens/Profile';
import BottomTab from './BottomTab';
import Auth from './Auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName='BottomTab'screenOptions={{headerShown:false}}>
     <Stack.Screen name="BottomTab" component={drawer}/>
     <Stack.Screen name="Auth" component={Auth}/>
    
      <Stack.Screen name="FlatScreen" component={FlatScreen}/>
      
    </Stack.Navigator>
  );
} function drawer() {
  return (
   
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={BottomTab} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
export default MyStack
