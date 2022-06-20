import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView,Image } from 'react-native';
import styles from '../style/loginStyle';
import { AuthContext } from '../context/AuthContext';
import * as Modify from '../style/modifyStyle';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

export function ModifyScreen({navigation}){

  const {userInfo,modifyProfilePicture,backgroundPicture,setModifyBio,setModifyFields,setModifyInfo,setModifyInterest,modifyBio,modifyFields,modifyInfo,modifyInterest,changeInfo,changeBio,changeFields,changeInterest} = useContext(AuthContext);

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

  var fieldsList=[]; 
  if (construction) fieldsList.push('Construction durable, bâtiments, travaux publics');
  if (alim) fieldsList.push('Alimentation');
  if (client) fieldsList.push('Relation client');
  if (batiment) fieldsList.push('Etudes et modélisation numérique du bâtiment');
  if (gestion) fieldsList.push('Gestion administrative,transport et logistique');
  if (comm) fieldsList.push('Industries graphiques et communication');
  if (beauty) fieldsList.push('Beauté et bien-être');
  if (aeronautic) fieldsList.push('Aéronautique');
  if (hotel) fieldsList.push('Hôtellerie-restauration');
  if (engine) fieldsList.push('Réalisation de produits mécanique');
  if (maintenance) fieldsList.push('Métiers de la maintenance');
  if (digital) fieldsList.push('Numérique et transition énergétique');
  if (autoInstall) fieldsList.push("Pilotage d'installations automatisées");
  if (wood) fieldsList.push('Métiers du bois');

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

  if (french) fieldsList.push('Français');
  if (math) fieldsList.push('Mathématiques');
  if (history) fieldsList.push('Histoire-Géographie');
  if (english) fieldsList.push('Anglais');
  if (german) fieldsList.push('Allemand');
  if (spanish) fieldsList.push('Espagnol');
  if (earthScience) fieldsList.push('SVT');
  if (physics) fieldsList.push('Physique-Chimie');
  if (technology) fieldsList.push('Technologie');
  if (musicLearning) fieldsList.push('Musiqe');
  if (artLearning) fieldsList.push('Arts Plastiques');
  if (pe) fieldsList.push('EPS');

  // state Interest
  const [tech,setTech] = useState(false);
  const [sport,setSport] = useState(false);
  const [music,setMusic] = useState(false);
  const [danse,setDanse] = useState(false);
  const [property,setProperty] = useState(false);
  const [architecture,setArchitecture] = useState(false);
  const [videogames,setVideogames] = useState(false);
  const [automobile,setAutomobile] = useState(false);
  const [cooking,setCooking] = useState(false);
  const [acting,setActing] = useState(false);
  const [aeronautics,setAeronautics] = useState(false);
  const [baking,setBaking] = useState(false);
  const [decoration,setDecoration] = useState(false);
  const [justice,setJustice] = useState(false);
  const [human,setHuman] = useState(false);
  const [medic,setMedic] = useState(false);

  var interstList=[];
  if (tech) interstList.push('Technologie');
  if (sport) interstList.push('Sport');
  if (music) interstList.push('Musique');
  if (danse) interstList.push('Danse');
  if (property) interstList.push('Immobilier');
  if (architecture) interstList.push('Architecture');
  if (videogames) interstList.push('Jeux Vidéo');
  if (automobile) interstList.push('Automobile');
  if (cooking) interstList.push('Cuisine');
  if (acting) interstList.push('Théâtre');
  if (aeronautics) interstList.push('Aéronautique');
  if (baking) interstList.push('Pâtisserie');
  if (decoration) interstList.push('Décoration');
  if (justice) interstList.push('Justice');
  if (human) interstList.push('Humanitaire');
  if (medic) interstList.push('Médecine');

  const [openMidSchool,setOpenMidSchool]=useState(false);
  const [midSchoolList, setMidSchoolList] = useState([
    {label: 'Collège Carnot (Grasse)', value: 'Collège Carnot (Grasse)'},
    {label: 'Collège Jules-Verne (Cagnes sur Mer)', value: 'Collège Jules-Verne (Cagnes sur Mer)'},
    {label: 'Collège Malraux (Cagnes sur Mer)', value: 'Collège Malraux (Cagnes sur Mer)'},
    {label: 'Collège International (Sophia Antipolis)', value: 'Collège International (Sophia Antipolis)'},
    {label: 'Collège Notre-Dame de la Tramontane (Antibes)', value: 'Collège Notre-Dame de la Tramontane (Antibes)'},
    {label: 'Collège Saint Barthélemy (Nice)', value: 'Collège Saint Barthélemy (Nice)'},
    {label: 'Collège Mont Saint Jean (Antibes)', value: 'Collège Mont Saint Jean (Antibes)'},
    {label: 'Collège Nazareth (Nice)', value: 'Collège Nazareth (Nice)'},
    {label: 'Collège Blanche de Castille (Nice)', value: 'Collège Blanche de Castille (Nice)'},
    {label: 'Collège Baous (Saint Jeannet)', value: 'Collège Baous (Saint Jeannet)'},
    {label: 'Collège Niki de Saint Phalle (Valbonne)', value: 'Collège Niki de Saint Phalle (Valbonne)'},
    {label: 'Collège Fénelon (Grasse)', value: 'Collège Fénelon (Grasse)'},
    {label: 'Collège Sasserno (Nice)', value: 'Collège Sasserno (Nice)'},
    {label: 'Collège Sainte-Marie (Cannes)', value: 'Collège Sainte-Marie (Cannes)'},
    {label: 'Collège Albert Camus (Mandelieu)', value: 'Collège Albert Camus (Mandelieu)'},
    {label: 'Collège Or Torah (Nice)', value: 'Collège Or Torah (Nice)'},
    {label: 'Collège Saint Philippe Néri (Antibes)', value: 'Collège Saint Philippe Néri (Antibes)'},
    {label: 'Collège Kerem Menahem (Nice)', value: 'Collège Kerem Menahem (Nice)'},
    {label: 'Collège Colombier Sainte Thérèse (Nice)', value: 'Collège Colombier Sainte Thérèse (Nice)'}
  ]);
  const [chosen1rstOption,setChosen1rstOption]=useState(userInfo.option1);

  const [openGrade,setOpenGrade]=useState(false);
  const [gradeList, setGradeList] = useState([
    {label: '4e', value: '4e'},
    {label: '3e', value: '3e'}
  ]);
  const [chosen2ndOption,setChosen2ndOption]=useState(userInfo.option2);

  const handleModification = () =>{
    if (modifyInfo) changeInfo(chosen1rstOption,chosen2ndOption,userInfo.email);
    else if (modifyBio) changeBio(bio,userInfo.email);
    else if (modifyFields) changeFields(fieldsList,userInfo.email);
    else if (modifyInterest) changeInterest(interstList,userInfo.email);
    Keyboard.dismiss();
    setModifyBio(false);
    setModifyFields(false);
    setModifyInfo(false);
    setModifyInterest(false);
    navigation.goBack();
  }

  const handleCancel = () => {
    setModifyBio(false);
    setModifyFields(false);
    setModifyInfo(false);
    setModifyInterest(false);
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
              <View style={{width:350}}>
              {modifyInfo ? 
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
                    {userInfo.type!=='Eleve' ?
                    <Text style={Modify.styles.averageText}>{userInfo.type} {userInfo.type=='Eleve' ? userInfo.option2 : ""} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
                    : 
                    <>
                        <Text style={Modify.styles.averageText}>{userInfo.type}</Text>
                        <View style={{flexDirection:'row', marginVertical:'5%'}}>
                        <DropDownPicker
                          containerStyle={{width:'40%'}}
                          dropDownDirection="TOP"
                          open={openGrade}
                          setOpen={setOpenGrade}
                          items={gradeList}
                          setItems={setGradeList}
                          value={chosen2ndOption}
                          setValue={setChosen2ndOption}
                          placeholder='Classe...'
                        />
                        <DropDownPicker
                          containerStyle={{marginLeft:'10%',width:'40%'}}
                          dropDownDirection="TOP"
                          open={openMidSchool}
                          setOpen={setOpenMidSchool}
                          items={midSchoolList}
                          setItems={setMidSchoolList}
                          value={chosen1rstOption}
                          setValue={setChosen1rstOption}
                          placeholder='Collège...'
                        />
                        </View>
                    </>}
                  </View>
                </View>
              :<></>}
              </View>
              <ScrollView>
              <View style={Modify.styles.detailsProfile}>
                {modifyBio ?
                <>
                <Text style={{textAlign:'center',marginTop:'5%',fontSize:15}}>Description de 200 caractères maximum</Text>
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
                </>
                : <></>}
              {userInfo.type=='Eleve' &&
                <>
                {modifyFields ?
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
                :<></>}
                </>
              }
              {userInfo.type=='Enseignant' &&
                <>
                {modifyFields ?
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
                : <></>}
                </>
              }
              {userInfo.type!=='Entreprise' &&
                <>
                {modifyInterest ?
                <View style={Modify.styles.hobbys}>
                  <Text style={Modify.styles.subtitle}>Centres d'intérêt</Text>
                  <View style={{width:'100%'}}>
                    <View> 
                      <CheckBox title='Technologie' checked={tech} onPress={() => {setTech(!tech)}}/>
                      <CheckBox title='Sport' checked={sport} onPress={() => {setSport(!sport)}}/>
                      <CheckBox title='Musique' checked={music} onPress={() => {setMusic(!music)}}/>
                      <CheckBox title='Danse' checked={danse} onPress={() => {setDanse(!danse)}}/>
                      <CheckBox title='Immobilier' checked={property} onPress={() => {setProperty(!property)}}/>
                      <CheckBox title="Architecture" checked={architecture} onPress={() => {setArchitecture(!architecture)}}/>
                      <CheckBox title='Jeux vidéo' checked={videogames} onPress={() => {setVideogames(!videogames)}}/>
                      <CheckBox title='Automobile' checked={automobile} onPress={() => {setAutomobile(!automobile)}}/>
                      <CheckBox title='Cuisine' checked={cooking} onPress={() => {setCooking(!cooking)}}/>
                      <CheckBox title='Théâtre' checked={acting} onPress={() => {setActing(!acting)}}/>
                      <CheckBox title='Aéronautique' checked={aeronautics} onPress={() => {setAeronautics(!aeronautics)}} />
                      <CheckBox title="Pâtisserie" checked={baking} onPress={() => {setBaking(!baking)}}/>
                      <CheckBox title="Décoration" checked={decoration} onPress={() => {setDecoration(!decoration)}}/>
                      <CheckBox title="Justice" checked={justice} onPress={() => {setJustice(!justice)}}/>
                      <CheckBox title="Humanitaire" checked={human} onPress={() => {setHuman(!human)}}/>
                      <CheckBox title="Médecine" checked={medic} onPress={() => {setMedic(!medic)}}/>
                    </View>
                  </View>
                </View>
                
                : <></>}
                </>
              }
              <View style={Modify.styles.changeView}>
                <TouchableOpacity style={Modify.styles.button} onPress={() => {handleCancel()}}>
                  <Text style={Modify.styles.buttonText}>Annuler</Text>
                </TouchableOpacity>
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