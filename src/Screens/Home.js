import React, { Component } from 'react';
import { View, Text,ImageBackground, ImageBackgroundComponent,TouchableOpacity } from 'react-native';

import {Fonts} from '../utils/Fonts';
import Entypo  from 'react-native-vector-icons/Entypo';
const Lg = {uri:"https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZCUyMHRleHR1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" };
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex: 1,}}>
        <View>
          <ImageBackground source={Lg} resizeMode='cover' style={{width:'100%',height:'100%'}}>
            <View>
        <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()} style={{backgroundColor:'#733015',width:50,borderRadius: 10,height:45, marginTop: 10,}} >
          <Entypo name="menu" size={50}/>
          </TouchableOpacity>
        </View>
          <View style={{alignSelf:'center'}}>
            <Text style={{fontFamily:Fonts.opensansItalic,color:'#abe5e9',marginTop: 300,fontSize:26,marginLeft:50}}>
              WELCOME
            </Text>
            <Text style={{fontFamily:Fonts.opensansItalic,color:'#abe5e9',fontSize:26,marginLeft:100}}>
              TO
            </Text>
            <Text style={{fontFamily:Fonts.opensansItalic,color:'#abe5e9',fontSize:26,marginLeft:15}}>
              SOLUTION PLAYER
            </Text>


          </View>
          </ImageBackground>
        </View>
        </View>
        
        
    );
  }
}
