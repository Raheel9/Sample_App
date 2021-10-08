import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image
} from 'react-native';
import {Header} from 'react-native-elements';

import {siri,s} from '../assets';
import styles from './styles';
export default class flatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'apple',
          price: '50$',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'banana',
          price: '45$',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'beaf',
          price: '700$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'meat',
          price: '9$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'corn',
          price: '5$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'noodels',
          price: '1$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'fish',
          price: '5$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'grren leaves',
          price: '3$',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'beans',
          price: '2$',
        },
      ],
      modalVisible: false,price:''
    };
  }
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  renderItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() =>{ this.setModalVisible(!this.state.modalVisible),this.setState({price:item.price})}}
        key={index}
        style={{
          flex: 1,
          backgroundColor: '#733015',
          margin: 10,
          borderRadius: 10,
          height: 65,
        }}>
        <Text
          style={{
            fontSize: 27,
            padding:10,
            color: 'black',
            
          }}>
         
          {item.title} 
          
        </Text>
       
      </TouchableOpacity>
    );
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor={'#84dbce'}
          leftComponent={
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'black',
              }}>
              Items
            </Text>
          }
        />
        <FlatList
        
          contentContainerStyle={{}}
          data={this.state.DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}
          animated={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> {`Price:${this.state.price}`}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

