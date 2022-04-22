import {Text, TextInput, View, Pressable } from 'react-native';
import styles from '../style/style';

export function ProfileScreen({navigation}){
    return (
      <View style={styles.container}>
  
        <View style={styles.upside}>
  

            <Text style={styles.titleLogin}>Je suis la page de profil</Text>
            
        </View>
      </View>
    );
  }