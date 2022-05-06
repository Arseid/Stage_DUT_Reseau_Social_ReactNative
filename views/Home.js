import React, {useEffect,useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Text, Image, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useIsFocused } from '@react-navigation/native';

function HomeScreen({navigations}){

    const {userInfo,isLoading,userProfilesInfo,logout,showUserProfiles} = useContext(AuthContext);
    const isFocused=useIsFocused();

    const refresh = () => {
        showUserProfiles(userInfo.email);
        console.log(userProfilesInfo);
    }

    useEffect(()=>{showUserProfiles(userInfo.email)},[isFocused]);

    //showUserProfiles(userInfo.email);
    //console.log(userProfilesInfo);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={refresh}><Text>Refresh</Text></TouchableOpacity>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={logout}><Text>Log out</Text></TouchableOpacity>

            <Text>Non recup</Text>

            <FlatList

            />
        </View>
    );
    
}

export default HomeScreen;