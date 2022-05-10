import React, {useState,useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Text, TextInput, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';


function HomeScreen({navigations}){

    const {isLoading,userProfilesInfo,logout,refresh,userInfo,followUser,post,test} = useContext(AuthContext);
    const [body, setBody] = useState ('');
    let chosenFile={};

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64:true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (pickerResult.type=='image') pickerResult.fileName='file'+userInfo.forename+userInfo.surname+'.jpg';
        else pickerResult.fileName='file'+userInfo.forename+userInfo.surname+'.mp4';

        if (!pickerResult.cancelled){
            chosenFile=pickerResult;
        }
    };

    const handlePost = () =>{
        if (body.length==0) alert('FILL PLS')
        else{
            let date=new Date();
            post(userInfo.email,body,chosenFile,date);
            setBody('');
            chosenFile={};
        }
    }
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Feed d'actualité</Text>
            <TextInput style={{padding:5,margin:5,borderWidth: 1,}} value={body} onChangeText={text => setBody(text)}/>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={openImagePickerAsync}><Text>Upload File</Text></TouchableOpacity>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={handlePost}><Text>Post</Text></TouchableOpacity>
        </View>
    );
    
}

export default HomeScreen;