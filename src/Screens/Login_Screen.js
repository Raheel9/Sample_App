import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ImageBackground,Image,TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Lg = {uri:"https://thumbs.dreamstime.com/b/wooden-logs-background-14341154.jpg" };
export default class Login_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1}}>
          <View>
            <ImageBackground source={Lg} resizeMode='cover' style={{width:'100%',height:'100%'}}>
              
              <View style={{flexDirection:"row",marginTop: 250,}}>
              <MaterialIcons name='email' size={50} color='#733015' />
                <TextInput style={{borderWidth: 5,fontSize: 14,height: 50,width: 270,marginLeft:15,color:'#000000',borderColor:'#451c0d',}}>
                </TextInput>
              </View>
              <View style={{flexDirection:'row',marginTop: 50,}}>
                <Fontisto name='locked' size ={50} color='#733015' style={{marginLeft:5}}/>
              <TextInput style={{borderWidth: 5,fontSize: 14,height: 50,width: 270,marginLeft:15,color:'#000000',borderColor:'#451c0d',}}>
                </TextInput>
              </View>
            <View style={{padding: 20,}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')} style={{alignSelf:'center',backgroundColor:'#733015',width:120,borderRadius: 15,height:50, marginTop: 20,}} >
          <Text style={{width:100,marginLeft: 13,borderRadius: 15,fontSize: 26,padding: 7,}}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      
    </ImageBackground>
          </View>
        </View>
    );
  }
}
