import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard} from 'react-native';
import {useState, useEffect, useContext} from "react";
import styles from '../style/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../config';
//import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export function RegisterScreen(){

  
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [pupil, setPupil] = useState(false);
  const [parent, setParent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [company, setCompany] = useState(false);

  const {isLoading, register}=useContext(AuthContext);

  /*
  useEffect(() => {
      const authenticate = async() => {
          axios.post("http://isis.unice.fr/phpmyadmin/sql.php",
              JSON.stringify({
              forename : forename,
              surname : surname,
              email : email,
              pwd : pwd,
          })
          ).then((response) => {
              console.log(response);
              setIsSubmited(false);
          }).catch((e) => {
              console.log(e);
          }) 
      };
      if (isSubmited) authenticate();
  }, [isSubmited]);

  const handleRegister = () => {
      setIsSubmited(true);
      axios({}).then(() =>{}).catch((e) => {
          console.warn(e);
          setError("");
      })
  };
  */
  /*
  const register = () =>{

    if (forename.length==0 || surname.length==0 || email.length==0 || pwd.length==0){
      alert("FILL PLS")
    }

    else{
      var APIURLInsert=`${BASE_URL}/insert.php`;

      var headers={
          'Accept' : 'application/json',
          'Content-Type':'application.json'
      };

      var Data={
          forename:forename,
          surname:surname,
          email:email,
          pwd:pwd,
      };

      fetch(APIURLInsert,
          {
              method:'POST',
              headers:headers,
              body: JSON.stringify(Data)
          })
          .then((response)=>response.json())
          .then((response)=>
          {
              alert(response[0].Message);
          })
          .catch((e)=>{
              alert("Error"+e);
          })
      }
  }
  */

  const navigation=useNavigation();

  const goToLogin = () => {
      navigation.goBack();
  };

  const handleRegister = () =>{
    register(forename,surname,email,pwd);
    Keyboard.dismiss();
  }

  const typePupil = () => {
    setPupil(true);
    setParent(false);
    setTeacher(false);
    setCompany(false);
  }

  const typeParent = () => {
    setPupil(false);
    setParent(true);
    setTeacher(false);
    setCompany(false);
  }

  const typeTeacher = () => {
    setPupil(false);
    setParent(false);
    setTeacher(true);
    setCompany(false);
  }

  const typeCompany = () => {
    setPupil(false);
    setParent(false);
    setTeacher(false);
    setCompany(true);
  }

  return(
      <View style={styles.container}>
      <Spinner visible={isLoading}/>

      <View style={styles.upside}>

        <View style={styles.form}>
          <Text style={styles.title}>Lorem Ipsum</Text>

          <TextInput style={styles.infoInput} placeholder="Prénom" value={forename} onChangeText={text => setForename(text)}/>
          <TextInput style={styles.infoInput} placeholder="Nom" value={surname} onChangeText={text => setSurname(text)}/>
          <TextInput style={styles.infoInput} placeholder="Email" autoCapitalize='none' value={email} onChangeText={text => setEmail(text)}/>
          <TextInput style={styles.infoInput} placeholder="Mot de passe" secureTextEntry autoCapitalize='none' value={pwd} onChangeText={text => setPwd(text)}/>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.averageText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subscription}>
          <Text style={styles.hyperlinkText} onPress={goToLogin}>
            Déjà un compte?
          </Text>
        </View>

      </View> 

    </View>
  );
}
