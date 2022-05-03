import React,{useState,useContext} from 'react';
import {Text, TextInput, View, Keyboard, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/loginStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';


export function ModifyProfileScreen({navigation}){

    const {userInfo,isLoading,modify} = useContext(AuthContext);
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');

    const handleModification = () =>{

        if (forename.length==0 && surname.length==0) alert('fill pls');
        else{
            if (forename.length==0) setForename(userInfo.forename);
            if (surname.length==0) setSurname(userInfo.surname);
            modify(forename,surname,userInfo.email);
            Keyboard.dismiss();
            navigation.goBack();
        }   
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Profile Screen</Text>
            <TextInput style={styles.infoInput} placeholder="Nouveau Prénom" value={forename} onChangeText={text => setForename(text)}/>
            <TextInput style={styles.infoInput} placeholder="Nouveau Nom" value={surname} onChangeText={text => setSurname(text)}/>
            <Button title='Annuler' onPress={() => navigation.goBack()}/>
            <Button title='Modifier' onPress={handleModification}/>
        </View> 
    );
}

