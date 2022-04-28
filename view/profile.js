import {Text, TextInput, View,  } from 'react-native';
import styles from '../style/styleProfile';
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'


export function ProfileScreen({navigation}){
    return (
        <View style={styles.container}>
    <View style={styles.border}>
    <Icon name='edit' size={35}  iconStyle={{color:'black'}} containerStyle={{left:320, top:120}}/>
    <Icon name='menu' size={40}  iconStyle={{color:'black'}} containerStyle={{left:330, top:120}}/>
    </View>
        <View style={styles.upside}>
        <Icon name='circle' size={100}  iconStyle={{color:'white'}} containerStyle={{right:130, bottom:190}}/>
        <View style={styles.header}>
          <Text style={{right:100, bottom: 170, fontSize:20}}>Prénom Nom</Text>
          <Text style={{right:100, bottom: 160, fontSize:12}}>Fonction + Etablissement</Text>
          <Text style={{right:100, bottom: 150, fontSize:12}}>Localisation + Contact (facultatif)</Text>
          
          </View>
          <View
                style={{
                  borderBottomColor: 'lightgrey',
                  borderBottomWidth: 6,
                  bottom: 160,
                  borderRadius: 7,
                  width:415
                }} />
          
  
        </View> 
  
        <View style={styles.downside}>
        <Icon name='home' size={50}  iconStyle={{right:160}} />
        <Icon name='search' size={50}  iconStyle={{right:80}} containerStyle={{bottom:50}}/>
        <Icon name='notifications' size={50}  iconStyle={{}} containerStyle={{bottom:100}}/>
        <Icon name='chat' size={50}  iconStyle={{left:80}} containerStyle={{bottom:150}}/>
        <Icon name='circle' size={50}  iconStyle={{left:160,color:'grey'}} containerStyle={{bottom:200}}/>
        </View>
      </View>
    );
  }