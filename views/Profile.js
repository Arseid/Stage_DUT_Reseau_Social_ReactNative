import React,{useContext} from 'react';
import {Text, Image, View, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import * as ImagePicker from 'expo-image-picker';

export function ProfileScreen({navigation}){

  const {userInfo,isLoading,logout,retrievedInfo,retrieveUserProfileInfo,modifyProfilePicture} = useContext(AuthContext);

  if (!retrievedInfo) retrieveUserProfileInfo(userInfo.email);
  
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    pickerResult.fileName='pp'+userInfo.forename+userInfo.surname+'.jpg';

    if (!pickerResult.cancelled){
      let date=new Date();
      modifyProfilePicture(pickerResult,userInfo.email,date);
    }
  };


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Spinner visible={isLoading}/>
      <Text>Profile Screen</Text>
      <Image style={styles.image} source={{uri: userInfo.pp}}/>
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}><Text style={styles.averageText}>Upload</Text></TouchableOpacity>
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
      <Button title='Home' onPress={() => navigation.navigate('Home')}/>
    </View> 
  );
}
