import { StyleSheet, Text, TextInput, View, Pressable , Alert } from 'react-native';
import React from 'react';



export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.form}>
        <View>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <TextInput style={styles.infoInput} placeholder="Numéro de téléphone ou email"/>
          <TextInput style={styles.infoInput} placeholder="Mot de passe"/>
          <Pressable style={styles.button}>
            <Text style={styles.averageText}>Se connecter</Text>
          </Pressable>
        </View>
      </View> 

      <View style={styles.subscription}>

      </View>



    </View>
    
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },

  form:{
    flex:1,
    borderColor:"white",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    height:15, 
    justifyContent: 'flex-end', 
    alignItems: 'flex-end',
    textAlign: 'center', 
    fontSize: 30,
    margin:50,
  },

  infoInput:{
    width: 300,
    height: 40, 
    borderWidth: 1,
    padding:5,
    margin:5
  },

  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    margin:5
  },

  averageText:{
    fontSize: 20,
  },

  subscription:{

  }

});