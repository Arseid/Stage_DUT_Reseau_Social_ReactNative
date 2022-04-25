import {Text, TextInput, View,  } from 'react-native';
import styles from '../style/style';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react'


export function ProfileScreen({navigation}){
    return (
        <View style={styles.container}>
  
        <View style={styles.upside}>
  
          <View style={styles.formLogin}>
            <Text style={styles.titleLogin}>Votre profil</Text>
           
            <TextInput style={styles.infoInputLogin} placeholder="Ville"/>
            <TextInput style={styles.infoInputLogin} placeholder="Département" />
            <Text style={styles.infoProfile}>Responsable légal :</Text>
            <TextInput style={styles.infoInputLogin} placeholder="Entrez son adresse e-mail" autoCapitalize='none'/>
          </View>
  
        </View> 
  
        
      </View>
    );
  }