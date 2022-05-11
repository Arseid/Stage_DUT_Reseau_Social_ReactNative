import React,{useReducer,useState,useContext,useEffect} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import * as ImagePicker from 'expo-image-picker';

export function ProfileScreen({navigation}){

  const {userInfo,isLoading,logout,retrievedInfo,retrieveUserProfileInfo,modifyProfilePicture,showUserProfiles,showProfiles} = useContext(AuthContext);

  useEffect(()=>{retrieveUserProfileInfo(userInfo.email)},[retrievedInfo]);

  useEffect(()=>{showUserProfiles(userInfo.email)},[showProfiles]);
  
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

  const handleGoHome = () => {
    navigation.navigate('Home');
  }

  const handleGoSearch = () => {
    navigation.navigate('Search');
  }

  return(
    <View style={styles.container}>
      <Spinner visible={isLoading}/>
        <ScrollView>
          <View style={styles.focusProfile}>
              <Image source={{uri:userInfo.backgroundPicture}} style={styles.backgroundPicture}/>
              <View style={styles.viewPP}>
                <Image source={{uri:userInfo.pp}} style={styles.image}/>
              </View>
              <View style={styles.otherInfo}>
                <View>
                  <Text style={styles.averageText}>Followers</Text>
                  <Text style={styles.averageText}>{userInfo.followers}</Text>
                </View>
                <View style={{marginLeft:20}}>
                  <Text style={styles.averageText}>Following</Text>
                  <Text style={styles.averageText}>{userInfo.following}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                  <Image source={{uri:"http://isis.unice.fr/~ey001600/ext/icons/logout.png"}} style={{width:30,height:30,marginLeft:25}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.personalInfo}>
                <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}</Text>
                <Text style={styles.averageText}>{userInfo.type}</Text>
                <Text style={styles.averageText}>{userInfo.option1}</Text>
              </View>
              <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
                  <Text style={styles.buttonText}>Modifier le profil</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.detailsProfile}>

          </View>
        </ScrollView>
    </View> 
  );
}
