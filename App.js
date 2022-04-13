import {Text, TextInput, View, Pressable , Alert } from 'react-native';
import React from 'react';
import styles from './style/style';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.upside}>

        <View style={styles.form}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <TextInput style={styles.infoInput} placeholder="Numéro de téléphone ou email"/>
          <TextInput style={styles.infoInput} placeholder="Mot de passe"/>
          <Pressable style={styles.button}>
            <Text style={styles.averageText}>Se connecter</Text>
          </Pressable>
          <Text style={styles.hyperlinkText}>Mot de passe oublié?</Text>
        </View>

        <View style={styles.subscription}>
          <Text style={styles.averageText}>Vous n'avez pas de compte?</Text>
          <Text style={styles.hyperlinkText} onPress={() => Linking.openURL('https://patelkrunal008.medium.com/navigate-from-one-screen-to-another-in-react-native-navigation-v5-69da74d5c676')}>
            Inscrivez-vous!
          </Text>
        </View>

      </View> 

      <View style={styles.downside}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel hendrerit elit. Nunc et laoreet quam. Praesent finibus tristique elit. Phasellus id velit consequat nulla tempus maximus sit amet a lorem. Morbi eget elit auctor, mollis lorem ut, egestas leo. Nullam euismod pulvinar risus at iaculis. Fusce commodo turpis vitae velit feugiat lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fermentum tempor luctus. Duis pretium vulputate ex, ut consequat dui. Praesent eu turpis non elit vehicula tincidunt a et neque. Pellentesque lobortis imperdiet orci, ullamcorper scelerisque massa consequat vitae. Aenean vel dui sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam at massa sit amet magna fringilla sagittis id quis purus. Mauris id scelerisque sapien.
      </View>
    </View>
  );
}
