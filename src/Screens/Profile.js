import React, { Component } from 'react';
import { View, Text ,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Pf = {uri:"https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29vZCUyMHRleHR1cmV8ZW58MHx8MHx8&w=1000&q=80"}
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Name: 'Raheel Akbar',
        Email: 'Akbarraheel9@gmail',
        Phone_NO: '03155281101',
        CNIC:'61101-1234567-8',
    };
  }

  render() {
    return (
        <SafeAreaView style={{flex: 1,justifyContent:'center'}}>
        <ImageBackground source={Pf} resizeMode="cover" style={{width:'100%',height:'100%'}}> 

    <View style={{flexDirection:'row',marginLeft:20, alignSelf:'flex-start',padding: 30,paddingTop: 100,}}>
      <Text style={{fontSize:20,textAlign:'center',fontWeight: "bold"}}> Name:</Text>
      <Text style={{fontSize:20,textAlign:'center',paddingLeft: 10,fontWeight: "bold"}}> {this.state.Name} </Text>
    </View>
    <View style={{flexDirection:'row',marginLeft:20,alignSelf:'flex-start',padding: 30,}}>
    <Text style={{fontSize:20,textAlign:'center',fontWeight: "bold"}}> Email:</Text>
      <Text style={{fontSize:20,textAlign:'center',paddingLeft: 10,fontWeight: "bold"}}> {this.state.Email} </Text>
    </View>
    <View style={{flexDirection:'row',marginLeft:20,alignSelf:'flex-start',padding: 30,}}>
    <Text style={{fontSize:20,textAlign:'center',fontWeight: "bold"}}> Phone:</Text>
    <Text style={{fontSize:20,textAlign:'center' ,paddingLeft: 10,fontWeight: "bold"}}>{this.state.Phone_NO}  </Text>
    </View> 
    <View style={{flexDirection:'row',alignSelf:'flex-start',padding: 20,marginLeft: 30,}}>
    <Text style={{fontSize:20,textAlign:'center',fontWeight: "bold"}}> CNIC:   </Text>
    <Text style={{fontSize:20,textAlign:'center',paddingLeft: 10,fontWeight: "bold"}}>{this.state.CNIC}</Text>
    </View>
    <View style={{flexDirection:'row',alignSelf:'flex-start',padding: 20,marginLeft: 30,}}>
    <Text style={{fontSize:20,textAlign:'center',fontWeight: "bold"}}> Course:</Text>
    <Text style={{fontSize:20,textAlign:'center',paddingLeft: 10,fontWeight: "bold"}}>React-Native:</Text>
    </View>
    <View style={{padding: 20,}}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FlatScreen')} style={{alignSelf:'center',backgroundColor:'#733015',width:150,borderRadius: 15,height:50,}} >
      <Text style={{width:100,marginLeft: 32,borderRadius: 15,fontSize: 26, marginTop: 5,}}>Submit</Text>
      </TouchableOpacity>
    </View>
    
  
  </ImageBackground>
    </SafeAreaView>
    );
  }
}
