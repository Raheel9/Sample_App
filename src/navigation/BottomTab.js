import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto  from 'react-native-vector-icons/Fontisto';
import React, { Component } from 'react';
import Details from '../Screens/Details';
import Home from '../Screens/Home';
import Login_Screen from '../Screens/Auth/Login_Screen';
import Profile from '../Screens/Profile';
import Sinup_Screen from '../Screens/Auth/Sinup_Screen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="home" size={26}/>),}}/>
      <Tab.Screen name="lOGIN" component={Login_Screen} options={{tabBarIcon:({color})=>(<Fontisto name="person" size={26}/>),}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({color})=>(<Fontisto name="persons" size={26}/>),}}/>
      
    </Tab.Navigator>
  );
}
export default MyTabs