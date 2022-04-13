import {Text, TextInput, View, Pressable, RadioButton } from 'react-native';
import styles from '../style/style';
import React from 'react';
  

export function RegisterScreen(navigation){
    return(
        <View style={styles.container}>

        <View style={styles.upside}>
  
          <View style={styles.formRegister}>
            <Text style={styles.titleRegister}>Lorem Ipsum</Text>
            <Text style={styles.subtitle}>Créer un nouveau compte</Text>
            <TextInput style={styles.infoInputFirstName} placeholder="Prénom"/>
            <TextInput style={styles.infoInputLastName} placeholder="Nom de famille"/>
            <TextInput style={styles.infoInput} placeholder="Numéro de téléphone ou email"/>
            <TextInput style={styles.infoInput} placeholder=" Entrez un mot de passe"/>
            <TextInput style={styles.infoInput} placeholder=" Confirmez votre mot de passe"/>
            <View style={styles.downside}>
           <Text style ={{fontSize: 11}}> En cliquant sur S’inscrire, vous acceptez nos Conditions générales. Découvrez comment nous recueillons,utilisons et partageons vos données en lisant notre Politique d’utilisation des données et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</Text>
        </View>
            <Pressable style={styles.buttonRegister}>
              <Text style={styles.averageText}>S'inscrire</Text>
            </Pressable>
            <Text style={styles.hyperlinkTextLogin} onPress={() => navigation.navigate('Login')}>
                Vous avez déjà un compte?
                </Text>
          </View>
  
        </View> 

      </View>
    );
  }