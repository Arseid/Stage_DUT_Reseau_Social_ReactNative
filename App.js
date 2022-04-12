import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={{height:15, textAlign: 'center', fontSize: 20,marginTop: 20}}>Bienvenue !</Text>
      <StatusBar style="auto" />
      <View style={{ flex: 3, borderWidth: 2, borderColor: 'grey',justifyContent: 'center', alignItems: 'center'}}/>
      <View style={{ flex: 1, borderWidth: 2, borderColor: 'grey'}}/>
      
  
     
   
</View>
    
     
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    justifyContent: 'center',
  },

  Text: {
    
    
  }

});
