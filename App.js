import React, { Component } from 'react';
import { View, Text , Button, TouchableOpacity,ImageBackground} from 'react-native';
const image = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" };


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1,padding: 10,}}>
          <ImageBackground source={image} resizeMode="cover" style={{width:'100%',height:'100%'}}>
  
      <View style={{flexDirection:'row',marginLeft:20, alignSelf:'flex-start',padding: 30,paddingTop: 100,}}>
        <Text style={{fontSize:18,textAlign:'center',}}>  Name:  </Text>
        <Text style={{fontSize:18,textAlign:'center'}}> "RAHEEL AKBAR" </Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:20,alignSelf:'flex-start',padding: 30,}}>
      <Text style={{fontSize:18,textAlign:'center'}}>  Email :   </Text>
        <Text style={{fontSize:18,textAlign:'center'}}> akbarraheel9@gmail.com </Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:20,alignSelf:'flex-start',padding: 30,}}>
      <Text style={{fontSize:18,textAlign:'center'}}>  Phone No.  :   </Text>
      <Text style={{fontSize:18,textAlign:'center'}}>  0315-5281101 :   </Text>
      </View> 
      <View style={{flexDirection:'row',alignSelf:'flex-start',padding: 20,marginLeft: 30,}}>
      <Text style={{fontSize:18,textAlign:'center'}}>  CNIC:   </Text>
      <Text style={{fontSize:18,textAlign:'center'}}>  61101-9857937-7 :   </Text>
      </View>
      <View style={{flexDirection:'row',alignSelf:'flex-start',padding: 20,marginLeft: 30,}}>
      <Text style={{fontSize:18,textAlign:'center'}}>  Course :   </Text>
      <Text style={{fontSize:18,textAlign:'center'}}>  React-Native:   </Text>
      </View>
      <View style={{padding: 20,}}>
    <TouchableOpacity style={{alignSelf:'center',backgroundColor:'#8cd8e6',width:100,borderRadius: 15,height:25,}} ><Text style={{width:100,textAlign:'center',borderRadius: 15,}}>Submit</Text></TouchableOpacity>
    </View>
    
    </ImageBackground>
      </View>
      
    );
  }
}
