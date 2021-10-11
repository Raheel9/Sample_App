
import React, { Component } from 'react';
import { View, Text, } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import FlatScreen from '../Screens/FlatScreen';
import Profile from '../Screens/Profile';
import BottomTab from './BottomTab';
import Auth from './Auth';
import Drawer from './Drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Drawer'screenOptions={{headerShown:false}}>
     <Stack.Screen name="Drawer" component={Drawer}/>
     {/* <Stack.Screen name="BottomTab" component={BottomTab}/> */}
     <Stack.Screen name="Auth" component={Auth}/>
     
      <Stack.Screen name="FlatScreen" component={FlatScreen}/>
      
    </Stack.Navigator>
  );
} 
export default MyStack
