import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator()
function drawer() {
    return (
     
        <Drawer.Navigator initialRouteName="BottomTab" >
          <Drawer.Screen name="BottomTab" component={BottomTab} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contact Us" component={Profile} />
        </Drawer.Navigator>
      
    );
  }
  export default drawer