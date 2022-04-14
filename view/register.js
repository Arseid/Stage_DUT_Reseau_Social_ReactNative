import {Text, TextInput, View, Pressable } from 'react-native';
import styles from '../style/style';
import React, {useState} from 'react'
import { ButtonGroup,DropdownButton  } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';


export function RegisterScreen(){
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();

    return(
        <View style={styles.container}>

        <View style={styles.upside}>
  
          <View style={styles.formRegister}>
            <Text style={styles.titleRegister}>Lorem Ipsum</Text>
            <Text style={styles.subtitle}>Créer un nouveau compte</Text>
    <ButtonGroup
      buttons={['Elève','Parent', 'Professeur', 'Professionnel']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);   
        <TextInput style={styles.infoInputFirstName} placeholder="Prénom"/>
      }}
      containerStyle={{ marginBottom: 20, marginTop: -100,  backgroundColor: '#ffaf7a',width:345}}
      
    />
            <TextInput style={styles.infoInputFirstName} placeholder="Prénom"/>
            <TextInput style={styles.infoInputLastName} placeholder="Nom de famille"/>
            <TextInput style={styles.infoInputRegister} placeholder="Numéro de téléphone ou email"/>
            <TextInput style={styles.infoInputRegister} placeholder=" Entrez un mot de passe"/>
            <TextInput style={styles.infoInputRegister} placeholder=" Confirmez votre mot de passe"/>
            <View style={styles.downside}>
           <Text style ={{fontSize: 9, height: 110}}> En cliquant sur S’inscrire, vous acceptez nos Conditions générales. Découvrez comment nous recueillons,utilisons et partageons vos données en lisant notre Politique d’utilisation des données et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</Text>
        </View>
            <Pressable style={styles.buttonRegister}> 
              <Text style={styles.averageText}>S'inscrire</Text>
            </Pressable>
            <Text style={styles.hyperlinkTextLogin} onPress={() =>navigation.navigate('Login')}>
                Vous avez déjà un compte?
                </Text>
          </View>
  
        </View> 

      </View>
    );
  }