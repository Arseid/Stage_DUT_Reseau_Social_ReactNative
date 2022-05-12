import React,{useReducer,useState,useContext,useEffect} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export function ProfileScreen({navigation}){

  const {userInfo,isLoading,logout,retrievedInfo,retrieveUserProfileInfo,modifyProfilePicture,showUserProfiles,showProfiles} = useContext(AuthContext);

  useEffect(()=>{retrieveUserProfileInfo(userInfo.email)},[retrievedInfo]);

  useEffect(()=>{showUserProfiles(userInfo.email)},[showProfiles]);

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
                <View style={{marginLeft:'5%'}}>
                  <Text style={styles.averageText}>Following</Text>
                  <Text style={styles.averageText}>{userInfo.following}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                  <Image source={{uri:"http://isis.unice.fr/~ey001600/ext/icons/logout.png"}} style={{width:30,height:30,marginLeft:'25%'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.personalInfo}>
                <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename} ({userInfo.gender})</Text>
                <Text style={styles.averageText}>{userInfo.type} | {userInfo.option1}</Text>
              </View>
              <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Modifier le profil')}>
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
