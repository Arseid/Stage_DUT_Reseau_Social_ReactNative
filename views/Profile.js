import React,{useEffect,useState,useContext} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TextInput,Keyboard } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import * as Modify from '../style/modifyStyle';
import { Overlay } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements'

export function ProfileScreen({navigation}){

  const {userInfo,logout,modify,modifyProfilePicture,backgroundPicture} = useContext(AuthContext);

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // Modification Part
  const [pronouns, setPronouns] = useState(userInfo.gender);
  const [bio, setBio] = useState(userInfo.description);
  const [videogames,setVideogames] = useState(false);
  const [sport,setSport] = useState(false);
  const [it,setIT] = useState(false);
  const [music,setMusic] = useState(false);
  const [trip,setTrip] = useState(false);
  const [draw,setDraw] = useState(false);
  const [foundInterest,setFoundInterest] = useState(false);
  const interestList=[];

  const handleModification = () =>{
    modify(pronouns,bio,userInfo.email);
    Keyboard.dismiss();
    toggleOverlay();
  }

  useEffect(() => {
    if (interestList.includes('Jeux Vidéo')){
      let index = interestList.indexOf('Jeux Vidéo');
      interestList.splice(index,1);
    } else {
      interestList.push('Jeux Vidéo');
    }
  }, [videogames])

  const addInterest = (interest) => {
    for (let i=0;i<interestList.length;i++){
      if (interestList[i]==interest){
        interestList.splice(i,1);
        setFoundInterest(true);
      } 
    }

    if (foundInterest===false){
      interestList.push(interest);
    }

    /*
    if (interestList.includes(interest,0)){
      let index = interestList.indexOf(interest);
      interestList.splice(index,1);
    } else {
      interestList.push(interest);
    }
    */
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
        <ScrollView>
          <View style={styles.focusProfile}>
              <Image source={{uri:userInfo.backgroundPicture}} style={styles.backgroundPicture}/>
              <View style={styles.viewPP}>
                <Image source={{uri:userInfo.pp}} style={styles.image}/>
              </View>
              <View style={styles.otherInfo}>
                <View>
                  <Text style={styles.averageText}>Abonnés</Text>
                  <Text style={styles.averageText}>{userInfo.followersCounter}</Text>
                </View>
                <View style={{marginLeft:'5%'}}>
                  <Text style={styles.averageText}>Abonnements</Text>
                  <Text style={styles.averageText}>{userInfo.followingCounter}</Text>
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
          </View>
          {userInfo.description || userInfo.interest ? 
          <>
            <View style={styles.detailsProfile}>
            {userInfo.description ? 
            <>
              <View style={styles.bio}>
                <Text style={styles.subtitle}>Bio</Text>
                <Text style={styles.bodyText}>{userInfo.description}</Text>
              </View>
            </>:<></>}
            {userInfo.interest ? 
            <>
              <View style={styles.hobbys}>
                <Text style={styles.subtitle}>Centre d'intérêt</Text>
                <Text style={styles.bodyText}></Text>
              </View>
            </>:<></>}
            </View>
          </>:<></>}
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay} fullScreen overlayStyle={{backgroundColor: '#eeeeee',}}>
            <View style={{marginTop:'1%'}}>
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
                {userInfo.type=='Eleve' &&
                  <>
                  <View style={Modify.styles.hobbys}>
                  <Text style={Modify.styles.subtitle}>Centre d'intérêt...</Text>
                  <View style={{flexDirection:'row', width:'100%'}}>
                    <View>
                      <CheckBox title='Jeux Vidéo' checked={videogames} onPress={() => {setVideogames(!videogames), console.log(interestList)}}/>
                      <CheckBox title='Musique' checked={music} onPress={() => {setMusic(!music)}}/>
                      <CheckBox title='Informatique' checked={it} onPress={() => {setIT(!it)}}/>
                    </View>
                    <View>
                      <CheckBox title='Voyage' checked={trip} onPress={() => {setTrip(!trip)}}/>
                      <CheckBox title='Dessiner' checked={draw} onPress={() => {setDraw(!draw)}}/>
                      <CheckBox title='Sport' checked={sport} onPress={() => {setSport(!sport)}}/>
                    </View>
                  </View>
                  </View>
                  </>
                }
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
