import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView,Image } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';
import * as Modify from '../style/modifyStyle';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements';
import Navigation from '../navigation/Navigation';

export function ModifyScreen({navigation}){

  const [email, setEmail] = useState ('');
  const [pwd, setPwd] = useState ('');
  const {isLoading, login} = useContext(AuthContext);

  const [construction,setConstruction] = useState(false);
  const [alim,setAlim] = useState(false);
  const [client,setClient] = useState(false);
  const [batiment,setBatiment] = useState(false);
  const [gestion,setGestion] = useState(false);
  const [comm,setComm] = useState(false);
  const [foundInterest,setFoundInterest] = useState(false);
  const [interest,setInterest] = useState({});
  var interestList={};

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [pronouns, setPronouns] = useState(userInfo?._gender);

  const [visible, setVisible] = useState(false);
  const [followersVisible, setFollowersVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);

 

 
  const addConstruction = () => {

    if (construction){
      interestList.construction=true;
      setInterest(interestList);
    } else {
      interestList.construction=false;
      setInterest(interestList);
    }
    console.log(interestList);
  }

  const addBatiment = () => {

    if (batiment){
      interestList.batiment=true;
      setInterest(interestList);
    } else {
      interestList.batiment=false;
      setInterest(interestList);
    }
    console.log(interestList);
  }

  const handleLogin = () =>{
    login(email,pwd);
    Keyboard.dismiss();
  }

  const handleModification = () =>{
    modify(pronouns,bio,userInfo.email);
    Keyboard.dismiss();
    toggleOverlay();
  }

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

  const [bio, setBio] = useState(userInfo?._description);


 

  const {userInfo,logout,modify,modifyProfilePicture,backgroundPicture,checkPosts,followersList,followingList,unfollowUser,removeFollower,retrievePosts,showUserProfiles} = useContext(AuthContext);
  return (

    <View style={styles.container}>

      <View style={styles.upside}>

        <View>
            <View>
              <ScrollView>
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
                  <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}</Text>
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
                    <Text style={Modify.styles.subtitle}>Filières favorites</Text>
                    <View style={{flexDirection:'row', width:'100%'}}>
                      <View> 
                        <CheckBox title='Construction durable, bâtiments, travaux publics' checked={construction} onPress={() => {addConstruction(),setConstruction(!construction)}}/>
                        <CheckBox title='Etudes et modélisation numérique du bâtiment' checked={batiment} onPress={() => {addBatiment(),setBatiment(!batiment)}}/>
                        <CheckBox title='Relation client ' checked={client} onPress={() => {setClient(!client)}}/>
                        <CheckBox title='Gestion administrative,transport et logistique' checked={gestion} onPress={() => {setGestion(!gestion)}}/>
                        <CheckBox title='Industries graphiques et communication' checked={comm} onPress={() => {setComm(!comm)}}/>
                        <CheckBox title="Alimentation" checked={alim} onPress={() => {setAlim(!alim)}}/>
                        <CheckBox title='Beauté et bien-être'/>
                        <CheckBox title='Aéronautique'/>
                        <CheckBox title='Hôtellerie-restauration'/>
                        <CheckBox title='Réalisation de produits mécanique' />
                        <CheckBox title='Métiers de la maintenance' />
                        <CheckBox title="Numérique et transition énergétique" />
                        <CheckBox title="Pilotage d'installations automatisées"/>
                        <CheckBox title="Métiers du bois" />
                      </View>
                    </View>
                  </View>
                  </>
                }
                {userInfo.type=='Enseignant' &&
                  <>
                  <View style={Modify.styles.hobbys}>
                    <Text style={Modify.styles.subtitle}>Matières enseignées...</Text>
                    <View style={{flexDirection:'row', width:'55%'}}>
                      <View style={{right:'8%'}}>
                        <CheckBox title='Français' checked={french} onPress={() => {setFrench(!french)}}/>
                        <CheckBox title='Mathématiques' checked={math} onPress={() => {setMath(!math)}}/>
                        <CheckBox title='Arts plastiques' checked={artLearning} onPress={() => {setArtLearning(!artLearning)}}/>
                        <CheckBox title='SVT' checked={earthScience} onPress={() => {setEarthScience(!earthScience)}}/>
                        <CheckBox title='Sciences Physiques' checked={physics} onPress={() => {setPhysics(!physics)}}/>
                        <CheckBox title='EPS' checked={pe} onPress={() => {setPe(!pe)}}/>
                      </View>
                      <View style={{right:'8%'}}>
                        <CheckBox title='Anglais' checked={english} onPress={() => {setEnglish(!english)}}/>
                        <CheckBox title='Espagnol' checked={spanish} onPress={() => {setSpanish(!spanish)}}/>
                        <CheckBox title='Allemand' checked={german} onPress={() => {setGerman(!german)}}/>
                        <CheckBox title='Technologie' checked={technology} onPress={() => {setTechnology(!technology)}}/>
                        <CheckBox title='Education musicale' checked={musicLearning} onPress={() => {setMusicLearning(!musicLearning)}}/>
                        <CheckBox title='Histoire-Géographie' checked={history} onPress={() => {setHistory(!history)}}/>
                      </View>
                    </View>
                  </View>
                  </>
                }
                <View style={Modify.styles.changeView}>
                  <TouchableOpacity style={Modify.styles.button} onPress={navigation.navigate('Profil')}>
                    <Text style={Modify.styles.buttonText}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Modify.styles.button} onPress={() => navigation.navigate('Profil')}>
                    <Text style={Modify.styles.buttonText}>Enregistrer</Text>
                  </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
            </View>
        </View>

      </View> 
    </View>
  );
}