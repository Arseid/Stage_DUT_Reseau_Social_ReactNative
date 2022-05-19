import React, {useEffect,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';

export function LoadingScreen({navigation}){

    const {userInfo,retrieveUserProfileInfo,showUserProfiles,getListFollowersFollowing} = useContext(AuthContext);

    useEffect(()=> retrieveUserProfileInfo(userInfo.email),[]);
    useEffect(()=> showUserProfiles(userInfo.email),[]);
    useEffect(()=> getListFollowersFollowing(userInfo.email),[]);

    return (
        <View style={styles.container}>
        </View>
    );
}