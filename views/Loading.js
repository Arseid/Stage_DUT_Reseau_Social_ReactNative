import React, {useEffect,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export function LoadingScreen({navigation}){

    const {userInfo,retrieveUserProfileInfo,showUserProfiles,retrievedInfo,showProfiles} = useContext(AuthContext);

    useEffect(()=>{retrieveUserProfileInfo(userInfo.email)},[retrievedInfo]);
    useEffect(()=>{showUserProfiles(userInfo.email)},[showProfiles]);

    return (
        <View style={styles.container}>
        </View>
    );
}