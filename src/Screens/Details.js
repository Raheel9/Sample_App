import React, { Component } from 'react';
import { View, Text , Button, TouchableOpacity,ImageBackground,Dimensions} from 'react-native';
const image = { uri: "https://image.freepik.com/free-vector/wood-background-realistic_107791-102.jpg?1" };


export default class Details  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Raheel Akbar',
      Email: 'Akbarraheel9@gmail',
      Phone_NO: '03155281101',
      CNIC:'61101-1234567-8',
    };
  }
  componentDidMount(){
  
    const Email=this.props.route.params.Email
    const Name=this.props.route.params.Name
    const CNIC=this.props.route.params.CNIC
    const Phone_NO=this.props.route.params.Phone_NO
    console.log('data===>\n',Email,Name,CNIC,Phone_NO)
      this.setState({Email,Name,CNIC,Phone_NO,})
  }
  render() {
    return (
      <View style={{flex: 1,}}>
          <ImageBackground source={image} resizeMode="cover" style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}>
  
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
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{alignSelf:'center',backgroundColor:'#733015',width:150,borderRadius: 15,height:50,}} >
      <Text style={{width:100,marginLeft: 32,borderRadius: 15,fontSize: 26, marginTop: 5,}}>Submit</Text>
      </TouchableOpacity>
    </View>
    
    </ImageBackground>
      </View>
      
    );
  }
}
