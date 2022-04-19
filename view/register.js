import {Text, TextInput, View, Pressable } from 'react-native';
import styles from '../style/style';
import React, {useState} from 'react'
import { ButtonGroup  } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';


export function RegisterScreen(){
  const [selectedIndex, setSelectedIndex] = useState();
  const navigation = useNavigation();
  const [display, onDisplay] = useState(false);
  const [display2, onDisplay2] = useState(false);
  const [display3, onDisplay3] = useState(false);
  const [display4, onDisplay4] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
  ]);
  

  function displayInput(){
    onDisplay(true);
  }

  function displayInput2(){
    onDisplay2(true);
  }

  function displayInput3(){
    onDisplay3(true);
  }

  function displayInput4(){
    onDisplay4(true);
  }

    return(
        <View style={styles.container}>

        <View style={styles.upside}>
          <View style={styles.formRegister}>
            <Text style={styles.titleRegister}>Lorem Ipsum</Text>
            <Text style={styles.subtitle}>Créer un nouveau compte</Text>
            <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    top: -100
  }}
/>
            <Text style={styles.info}>Vous êtes un(e)...</Text>
          
    <ButtonGroup 
      buttons={['Elève','Parent', 'Profetestsseur', 'Professionnel']}
      selectedButtonStyle={{backgroundColor: '#ffaf7a'}}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value); 
        if(value===0){
          onDisplay2(false);
          onDisplay3(false);
          onDisplay4(false);
          displayInput();  
        }

        if(value===1){
          onDisplay(false);
          onDisplay3(false);
          onDisplay4(false);
          displayInput2();  
        }

        if(value===2){
          onDisplay(false);
          onDisplay2(false);
          onDisplay4(false);
          displayInput3();  
        }

        if(value===3){
          onDisplay(false);
          onDisplay2(false);
          onDisplay3(false);
          displayInput4();  
        }
        
      }}
      containerStyle={{ marginBottom: 20, marginTop: -100,  backgroundColor: '#ffaf7a',width:370 }}
      
    />
           { display? 
            <><DropDownPicker
                style={styles.dropDownLeft}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Etablissement"
                placeholderStyle={{color: 'darkgrey'}} /><DropDownPicker
                  style={styles.dropDownRight}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Classe"
                  placeholderStyle={{color: 'darkgrey'}} /></>

          : null}

{ display3? 
            <><DropDownPicker
                style={styles.dropDown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Etablissement" 
                placeholderStyle={{color: 'darkgrey'}} 
               /></>

          : null}

{ display4? 
            <><TextInput
                style={styles.infoInputLeft}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Nom d'entreprise" /><DropDownPicker
                  style={styles.dropDownRight}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Secteur d'activité"
                  placeholderStyle={{color: 'darkgrey'}} /></>

          : null}
             <TextInput style={styles.infoInputFirstName} placeholder="Prénom"/>
            <TextInput style={styles.infoInputLastName} placeholder="Nom de famille"/>
            <TextInput style={styles.infoInputRegister} placeholder="Numéro de téléphone ou email" autoCapitalize='none'/>
            <TextInput style={styles.infoInputRegister} placeholder=" Entrez un mot de passe" secureTextEntry autoCapitalize='none'/>
            <TextInput style={styles.infoInputRegister} placeholder=" Confirmez votre mot de passe" secureTextEntry autoCapitalize='none'/>
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