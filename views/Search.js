import React, {useEffect,useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Text, Image, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

function SearchScreen({navigations}){

    const {isLoading,userProfilesInfo,logout,refresh,userInfo,followUser,test} = useContext(AuthContext);
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={refresh}><Text>Refresh</Text></TouchableOpacity>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={logout}><Text>Log out</Text></TouchableOpacity>

            <Text>Liste d'utilisateurs qui pourraient vous intéresser</Text>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[0][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[0][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[0][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[0][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[1][1]}</Text>    
                <Text style={{margin:5}}>{userProfilesInfo[1][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[1][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[1][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[2][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[2][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[2][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[2][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[3][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[3][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[3][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[3][3])}/>
            </View>

            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={()=>{test(userInfo.email)}}><Text>Test</Text></TouchableOpacity>

            <FlatList

            />
        </View>
    );
    
}

export default SearchScreen;