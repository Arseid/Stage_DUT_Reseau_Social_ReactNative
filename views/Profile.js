import React,{useContext} from 'react';
import {Text, TextInput, View, Pressable, Linking, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/loginStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useState } from 'react';


export function ProfileScreen({navigation}){

    const {userInfo,isLoading,logout,retrievedInfo,retrieveUserProfileInfo} = useContext(AuthContext);

    if (!retrievedInfo) retrieveUserProfileInfo(userInfo.email);    

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Profile Screen</Text>
            <Text>Prénom: {userInfo.forename}</Text>
            <Text>Nom: {userInfo.surname}</Text>
            <Text>Email: {userInfo.email}</Text>
            <Text>Pwd : {userInfo.pwd}</Text>
            <Text>Option1 : {userInfo.option1}</Text>
            <Text>Option2 : {userInfo.option2}</Text>
            <Text>Gender : {userInfo.gender}</Text>
            <Text>Description : {userInfo.description}</Text>
            <Text>PP : {userInfo.pp}</Text>
            <Text>Followers: {userInfo.followers}</Text>
            <Text>Following: {userInfo.following}</Text>
            <Button title='Logout' onPress={logout}/>
            <Button title='Modifier' onPress={() => navigation.navigate('ModifyProfile')}/>
        </View> 
    );
}

