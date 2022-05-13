import {Text, TextInput, View  } from 'react-native';
import styles from '../style/profileStyle';
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import { IconButton } from 'react-native-paper';



export function ProfileScreen({navigation}){
    return (
      <View style={{height:'100%'}}>
      <View
        style={{
          borderBottomColor: 'red',
          borderBottomWidth: 6,
          top:'35%',
          position:'absolute',
          zIndex:1,
          borderRadius: 7,
          width: 415
        }} ></View><View style={styles.container}>
          <View style={styles.border}>
            <IconButton icon='border-color' size={35}  containerStyle={{ left: '90%', top: 110 }} onPress={() => navigation.navigate('ModifyProfile')} />
            <Icon name='menu' size={40} iconStyle={{ color: 'black' }} containerStyle={{ left: '10%', top: 120 }} />
          </View>
          <View style={styles.upside}>
            <Icon name='circle' size={100} iconStyle={{ color: 'white' }} containerStyle={{ right: 130, marginTop: 0 }} />
            <View style={styles.header}>
              <Text style={{ marginLeft: 10, bottom: 170, fontSize: 20 }}>Prénom Nom</Text>
              <Text style={{ marginLeft: 10, bottom: 160, fontSize: 12 }}>Fonction + Etablissement</Text>
              <Text style={{ marginLeft: 10, bottom: 150, fontSize: 12 }}>Localisation + Contact (facultatif)</Text>

            </View>



          </View>

         
        </View>
        </View>
    );
  }