import React, { Component,YellowBox } from 'react';
import { View, Text, } from 'react-native';
import Home from "e:/Reactnative/sample_app/src/Screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import Rs from "./src/navigation/Main";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <NavigationContainer>
       <Rs/>
      </NavigationContainer>

      </View>
    );
  }
}
