import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView,Image } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';
import * as Modify from '../style/modifyStyle';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements';

export function ModifyScreen({navigation}){

  const {userInfo,modify,modifyProfilePicture,backgroundPicture} = useContext(AuthContext);

  const [bio, setBio] = useState(userInfo.description);

  // State sector
  const [construction,setConstruction] = useState(false);
  const [alim,setAlim] = useState(false);
  const [client,setClient] = useState(false);
  const [batiment,setBatiment] = useState(false);
  const [gestion,setGestion] = useState(false);
  const [comm,setComm] = useState(false);
  const [beauty,setBeauty] = useState(false);
  const [aeronautic,setAeronautic] = useState(false);
  const [hotel,setHotel] = useState(false);
  const [engine,setEngine] = useState(false);
  const [maintenance,setMaintenance] = useState(false);
  const [digital,setDigital] = useState(false);
  const [autoInstall,setAutoInstall] = useState(false);
  const [wood,setWood] = useState(false);

  /*
  for (let i=0;i<userInfo.interestArray.length;i++){
    if (userInfo.interestArray[i]=='Construction durable, bâtiments, travaux publics') setConstruction(true);
    if (userInfo.interestArray[i]=='Alimentation') setAlim(true);
    if (userInfo.interestArray[i]=='Relation client') setClient(true);
    if (userInfo.interestArray[i]=='Etudes et modélisation numérique du bâtiment') setBatiment(true);
    if (userInfo.interestArray[i]=='Gestion administrative,transport et logistique') setGestion(true);
    if (userInfo.interestArray[i]=='Industries graphiques et communication') setComm(true);
    if (userInfo.interestArray[i]=='Beauté et bien-être') setBeauty(true);
    if (userInfo.interestArray[i]=='Aéronautique') setAeronautic(true);
    if (userInfo.interestArray[i]=='Hôtellerie-restauration') setHotel(true);
    if (userInfo.interestArray[i]=='Réalisation de produits mécanique') setEngine(true);
    if (userInfo.interestArray[i]=='Métiers de la maintenance') setMaintenance(true);
    if (userInfo.interestArray[i]=='Numérique et transition énergétique') setDigital(true);
    if (userInfo.interestArray[i]=="Pilotage d'installations automatisées") setAutoInstall(true);
    if (userInfo.interestArray[i]=='Métiers du bois') setWood(true);
  }
  */

  var interestList=[]; 
  if (construction) interestList.push('Construction durable, bâtiments, travaux publics');
  if (alim) interestList.push('Alimentation');
  if (client) interestList.push('Relation client');
  if (batiment) interestList.push('Etudes et modélisation numérique du bâtiment');
  if (gestion) interestList.push('Gestion administrative,transport et logistique');
  if (comm) interestList.push('Industries graphiques et communication');
  if (beauty) interestList.push('Beauté et bien-être');
  if (aeronautic) interestList.push('Aéronautique');
  if (hotel) interestList.push('Hôtellerie-restauration');
  if (engine) interestList.push('Réalisation de produits mécanique');
  if (maintenance) interestList.push('Métiers de la maintenance');
  if (digital) interestList.push('Numérique et transition énergétique');
  if (autoInstall) interestList.push("Pilotage d'installations automatisées");
  if (wood) interestList.push('Métiers du bois');

  // State subjects
  const [french,setFrench] = useState(false);
  const [math,setMath] = useState(false);
  const [history,setHistory] = useState(false);
  const [english,setEnglish] = useState(false);
  const [german,setGerman] = useState(false);
  const [spanish,setSpanish] = useState(false);
  const [earthScience,setEarthScience] = useState(false);
  const [physics,setPhysics] = useState(false);
  const [technology,setTechnology] = useState(false);
  const [musicLearning,setMusicLearning] = useState(false);
  const [artLearning,setArtLearning] = useState(false);
  const [pe,setPe] = useState(false);

  const handleModification = () =>{
    modify(interestList,bio,userInfo.email);
    Keyboard.dismiss();
    navigation.goBack();
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
                        <CheckBox title='Construction durable, bâtiments, travaux publics' checked={construction} onPress={() => {setConstruction(!construction)}}/>
                        <CheckBox title='Etudes et modélisation numérique du bâtiment' checked={batiment} onPress={() => {setBatiment(!batiment)}}/>
                        <CheckBox title='Relation client ' checked={client} onPress={() => {setClient(!client)}}/>
                        <CheckBox title='Gestion administrative,transport et logistique' checked={gestion} onPress={() => {setGestion(!gestion)}}/>
                        <CheckBox title='Industries graphiques et communication' checked={comm} onPress={() => {setComm(!comm)}}/>
                        <CheckBox title="Alimentation" checked={alim} onPress={() => {setAlim(!alim)}}/>
                        <CheckBox title='Beauté et bien-être' checked={beauty} onPress={() => {setBeauty(!beauty)}}/>
                        <CheckBox title='Aéronautique' checked={aeronautic} onPress={() => {setAeronautic(!aeronautic)}}/>
                        <CheckBox title='Hôtellerie-restauration' checked={hotel} onPress={() => {setHotel(!hotel)}}/>
                        <CheckBox title='Réalisation de produits mécanique' checked={engine} onPress={() => {setEngine(!engine)}}/>
                        <CheckBox title='Métiers de la maintenance' checked={maintenance} onPress={() => {setMaintenance(!maintenance)}} />
                        <CheckBox title="Numérique et transition énergétique" checked={digital} onPress={() => {setDigital(!digital)}}/>
                        <CheckBox title="Pilotage d'installations automatisées" checked={autoInstall} onPress={() => {setAutoInstall(!autoInstall)}}/>
                        <CheckBox title="Métiers du bois" checked={wood} onPress={() => {setWood(!wood)}}/>
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
                  <TouchableOpacity style={Modify.styles.button} onPress={() => {handleModification()}}>
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