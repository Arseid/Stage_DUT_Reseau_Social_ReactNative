import React,{useReducer,useState,useContext,useEffect} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TouchableWithoutFeedback,TextInput,Keyboard } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import * as Modify from '../style/modifyStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Overlay } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

export function ProfileScreen({navigation}){

  const {userInfo,isLoading,logout,modify,modifyProfilePicture,backgroundPicture,retrieveUserProfileInfo,showUserProfiles,retrievedInfo,showProfiles,test} = useContext(AuthContext);

  useEffect(()=>{retrieveUserProfileInfo(userInfo.email)},[retrievedInfo]);
  useEffect(()=>{showUserProfiles(userInfo.email)},[showProfiles]);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // Modification Part
  const [pronouns, setPronouns] = useState(userInfo.gender);
  const [bio, setBio] = useState(userInfo.description);

  const handleModification = () =>{
    modify(pronouns,bio,userInfo.email);
    Keyboard.dismiss();
    toggleOverlay();
  }

  let changePP = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });
    pickerResult.fileName='pp'+userInfo.forename+userInfo.surname+'.jpg';

    if (!pickerResult.cancelled){
      let date=new Date();
      modifyProfilePicture(pickerResult,userInfo.email,date);
    }
  };

  let changeBackgroundPicture = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64:true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 3],
      quality: 1,
    });
    pickerResult.fileName='pp'+userInfo.forename+userInfo.surname+'.jpg';

    if (!pickerResult.cancelled){
      let date=new Date();
      backgroundPicture(pickerResult,userInfo.email,date);
    }
  };

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
                  <Text style={styles.averageText}>Abonnés</Text>
                  <Text style={styles.averageText}>{userInfo.followers}</Text>
                </View>
                <View style={{marginLeft:'5%'}}>
                  <Text style={styles.averageText}>Abonnements</Text>
                  <Text style={styles.averageText}>{userInfo.following}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                  <Image source={{uri:"http://isis.unice.fr/~ey001600/ext/icons/logout.png"}} style={{width:30,height:30,marginLeft:'25%'}}/>
                </TouchableOpacity>
              </View>
              <View style={styles.personalInfo}>
                <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}</Text>
                <Text style={styles.averageText}>{userInfo.type} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
              </View>
              <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
                  <Text style={styles.buttonText}>Modifier le profil</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button} onPress={()=>test(userInfo.email)}>
                  <Text style={styles.buttonText}>Test</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.detailsProfile}>
            <View style={styles.bio}>
              <Text style={styles.subtitle}>Bio</Text>
              <Text style={styles.bodyText}>{userInfo.description}</Text>
            </View>
            <View style={styles.hobbys}>
              <Text style={styles.subtitle}>Centre d'intérêt</Text>
              <Text style={styles.bodyText}>Informatique, Physique-Chimie, Mathématiques,  Manga, Anime, Jeux-Vidéo</Text>
            </View>
          </View>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay} fullScreen overlayStyle={{backgroundColor: '#eeeeee',}}>
            <View style={{marginTop:'12%'}}>
              <View style={Modify.styles.focusProfile}>
                <TouchableOpacity onPress={changeBackgroundPicture}>
                    <Image source={{uri:userInfo.backgroundPicture}} style={Modify.styles.backgroundPicture}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={changePP}>
                    <View style={Modify.styles.viewPP}>
                        <Image source={{uri:userInfo.pp}} style={Modify.styles.image}/>
                    </View>
                </TouchableOpacity>
                <View style={Modify.styles.personalInfo}>
                    <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}{userInfo.gender ? " ("+userInfo.gender+")" : ""}</Text>
                    <Text style={Modify.styles.averageText}>{userInfo.type} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
                </View>
              </View>
              <View style={Modify.styles.detailsProfile}>
                  <View style={Modify.styles.personalInfoChange}>
                    <View style={Modify.styles.bioField}>
                      <View style={Modify.styles.leftSide}>
                        <Text style={Modify.styles.averageTextChange}>Bio </Text>
                      </View>
                      <TextInput 
                        style={Modify.styles.inputBio} 
                        multiline={true} 
                        maxLength={200} 
                        placeholderTextColor='#808080'
                        placeholder='Bio de 200 caractères maximum...'
                        value={bio}
                        onChangeText={text => setBio(text)}
                      />
                    </View>
                  </View>
                <View style={Modify.styles.hobbys}>
                  <Text style={Modify.styles.subtitle}>Centre d'intérêt...</Text>
                </View>
                <View style={Modify.styles.changeView}>
                  <TouchableOpacity style={Modify.styles.button} onPress={toggleOverlay}>
                    <Text style={Modify.styles.buttonText}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Modify.styles.button} onPress={handleModification}>
                    <Text style={Modify.styles.buttonText}>Enregistrer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Overlay>
        </ScrollView>
    </View> 
  );
}
