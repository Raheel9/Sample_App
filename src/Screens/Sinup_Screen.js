import React, { Component, } from 'react';
import { View, Text,TouchableOpacity,TextInput, ImageBackground} from 'react-native';
const SS = {uri:"https://i.pinimg.com/originals/7c/97/e7/7c97e71cfa06040c056afb33455d93b3.jpg"}

export default class Sinup_Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {Name:"",Phone_NO:'',Email:'',CNIC:'',};
  }
  onparam(){
    const{Name,Phone_NO,Email,CNIC,}=this.state
    this.props.navigation.navigate('Details',{Name,Email,Phone_NO,CNIC,})
  }
    
  render() {
    return (
        <View style={{flex:1}}>
           <View>
          <ImageBackground source={SS} resizeMode='cover' style={{width:'100%',height:'100%'}}>
          <View style={{padding: 20,}}>
          <View>
                <TextInput style={{borderWidth: 5,fontSize: 18,height: 50,width: 300,marginLeft:10,color:'#000000',borderColor:'#451c0d',marginTop: 100,}}onChangeText={(txt)=>this.setState({Name:txt})}
                  Name/>
              
              </View>
              <View>
                <TextInput style={{borderWidth: 5,fontSize: 18,height: 50,width: 300,marginLeft:10,color:'#000000',borderColor:'#451c0d',marginTop: 20,}}onChangeText={(txt)=>this.setState({Phone_NO:txt})}
                  Phone_No/>
              </View>
              <View>
                <TextInput style={{borderWidth: 5,fontSize: 18,height: 50,width: 300,marginLeft:10,color:'#000000',borderColor:'#451c0d',marginTop: 20,}}onChangeText={(txt)=>this.setState({Email:txt})}
                  Email/>
              </View>
              <View>
                <TextInput style={{borderWidth: 5,fontSize: 18,height: 50,width: 300,marginLeft:10,color:'#000000',borderColor:'#451c0d',marginTop: 20,}}onChangeText={(txt)=>this.setState({CNIC:txt})}
                  CNIC/>
              </View>
              <View>
                <TextInput style={{borderWidth: 5,fontSize: 18,height: 50,width: 300,marginLeft:10,color:'#000000',borderColor:'#451c0d',marginTop: 20,}}
                  Password/>

              </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')} style={{alignSelf:'center',backgroundColor:'#733015',width:150,borderRadius: 15,height:50, marginTop: 30,}}onPress={() => this.onparam()}>
          <Text style={{width:100,marginLeft: 25,borderRadius: 15,fontSize: 24,padding: 7,}}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
            </ImageBackground>

          </View>
        </View>
    );
  }
}
