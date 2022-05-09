import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export function LoginScreen({navigation}){

  const [email, setEmail] = useState ('');
  const [pwd, setPwd] = useState ('');
  const {isLoading, login} = useContext(AuthContext);

  const handleLogin = () =>{
    login(email,pwd);
    Keyboard.dismiss();
  }

  return (

    <View style={styles.container}>
      <Spinner visible={isLoading}/>

      <View style={styles.upside}>

        <View style={styles.form}>
          <Text style={styles.title}>Lorem Ipsum</Text>

          <TextInput style={styles.infoInput} placeholder="Email" value={email} autoCapitalize='none' onChangeText={text => setEmail(text)}/>
          <TextInput style={styles.infoInput} placeholder="Mot de passe" secureTextEntry value={pwd} onChangeText={text => setPwd(text)}/>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.averageText}>Se connecter</Text>
          </TouchableOpacity>

          <Text style={styles.hyperlinkText}>Mot de passe oublié?</Text>
        </View>

        <View style={styles.subscription}>
          <Text style={styles.averageText}>Vous n'avez pas de compte?</Text>
          <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Register')}>
            Inscrivez-vous!
          </Text>
        </View>

      </View> 
    </View>
  );
}