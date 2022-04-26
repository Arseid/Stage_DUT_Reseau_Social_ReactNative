import React,{useContext} from 'react';
import {Text, TextInput, View, Pressable, Linking, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/loginStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';


export function ProfileScreen({navigation}){

    const {userInfo,isLoading,logout} = useContext(AuthContext);



    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Profile Screen</Text>
            <Text>Prénom: {userInfo.forename}</Text>
            <Text>Nom: {userInfo.surname}</Text>
            <Text>Email: {userInfo.email}</Text>
            <Text>Pwd : {userInfo.pwd}</Text>
            <Button title='Logout' onPress={logout}/>
            <Button title='Modifier' onPress={() => navigation.navigate('ModifyProfile')}/>
        </View> 
    );
}

