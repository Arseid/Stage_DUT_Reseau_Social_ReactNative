import React,{useState,useContext} from 'react';
import {Text, TextInput, View, Keyboard, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/loginStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Icon } from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';


export function ModifyProfileScreen({navigation}){

    const {userInfo,isLoading,modify} = useContext(AuthContext);
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');

    const handleModification = () =>{
        if (forename.length==0 || surname.length==0){
            alert("FILL PLS")
        }
        else{
            modify(forename,surname,userInfo.email);
            Keyboard.dismiss();
            navigation.goBack();
        }
    }

    

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Profile Screen</Text>
            <Icon name='circle' size={100}  iconStyle={{color:'white'}} containerStyle={{right:130, bottom:190}}/>
            <TextInput style={styles.infoInput} placeholder="Photo de profil" />
            <TextInput style={styles.infoInput} placeholder="Nouveau Prénom" value={forename} onChangeText={text => setForename(text)}/>
            <TextInput style={styles.infoInput} placeholder="Nouveau Nom" value={surname} onChangeText={text => setSurname(text)}/>
            <TextInput style={styles.infoInput} placeholder="Nom d'utilisateur" />
            <DropDownPicker style={styles.infoInput} placeholder="Genre" />
            <TextInput style={styles.infoInput} placeholder="Description" />
            <Button title='Annuler' onPress={() => navigation.goBack()}/>
            <Button title='Modifier' onPress={handleModification}/>
        </View> 
    );
}
