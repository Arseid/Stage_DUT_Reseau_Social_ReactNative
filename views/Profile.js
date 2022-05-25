import React,{useEffect,useState,useContext} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TextInput,Keyboard,FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import * as Modify from '../style/modifyStyle';
import { Overlay } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { CheckBox } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

export function ProfileScreen({navigation}){

  const {userInfo,logout,modify,modifyProfilePicture,backgroundPicture,checkPosts,followersList,followingList,unfollowUser,removeFollower,retrievePosts} = useContext(AuthContext);

  const [visible, setVisible] = useState(false);
  const [followersVisible, setFollowersVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleFollowersOverlay = () => {
    setFollowersVisible(!followersVisible);
  };

  const toggleFollowingOverlay = () => {
    setFollowingVisible(!followingVisible);
  };

  useEffect(()=> retrievePosts(userInfo.email,userInfo.following),[checkPosts]);

  // Modification Part
  const [pronouns, setPronouns] = useState(userInfo.gender);
  const [bio, setBio] = useState(userInfo.description);

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

  // State interest
  const [videogames,setVideogames] = useState(false);
  const [sport,setSport] = useState(false);
  const [it,setIT] = useState(false);
  const [music,setMusic] = useState(false);
  const [trip,setTrip] = useState(false);
  const [draw,setDraw] = useState(false);
  const [foundInterest,setFoundInterest] = useState(false);
  const [interest,setInterest] = useState({});
  var interestList={};

  const handleModification = () =>{
    modify(pronouns,bio,userInfo.email);
    Keyboard.dismiss();
    toggleOverlay();
  }
 
  const addVideoGames = () => {

    if (videogames){
      interestList.videogames=true;
      setInterest(interestList);
    } else {
      interestList.videogames=false;
      setInterest(interestList);
    }
    console.log(interestList);
  }

  const addMusic = () => {

    if (music){
      interestList.music=true;
      setInterest(interestList);
    } else {
      interestList.music=false;
      setInterest(interestList);
    }
    console.log(interestList);
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
      <Spinner visible={false} textContent={'Loading...'} textStyle={{color: '#FFF'}}/>
        <ScrollView>
          <View style={styles.focusProfile}>
              <Image source={{uri:userInfo.backgroundPicture}} style={styles.backgroundPicture}/>
              <View style={styles.viewPP}>
                <Image source={{uri:userInfo.pp}} style={styles.image}/>
              </View>
              <View style={styles.otherInfo}>
                <View>
                  <TouchableOpacity onPress={toggleFollowersOverlay}>
                    <Text style={styles.averageText}>Abonnés</Text>
                    <Text style={styles.averageText}>{userInfo.followersCounter}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginLeft:'5%'}}>
                  <TouchableOpacity onPress={toggleFollowingOverlay}>
                    <Text style={styles.averageText}>Abonnements</Text>
                    <Text style={styles.averageText}>{userInfo.followingCounter}</Text>
                  </TouchableOpacity>
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
                <TouchableOpacity style={styles.button} onPress={() => {retrievePosts(userInfo.email,userInfo.following)}}>
                  <Text style={styles.buttonText}>Test</Text>
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
            <View style={{marginTop:'15%'}}>
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
                    <Text style={Modify.styles.subtitle}>Centre d'intérêt...</Text>
                    <View style={{flexDirection:'row', width:'100%'}}>
                      <View>
                        <CheckBox title='Jeux Vidéo' checked={videogames} onPress={() => {addVideoGames(),setVideogames(!videogames)}}/>
                        <CheckBox title='Musique' checked={music} onPress={() => {addMusic(),setMusic(!music)}}/>
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
                  <TouchableOpacity style={Modify.styles.button} onPress={toggleOverlay}>
                    <Text style={Modify.styles.buttonText}>Annuler</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Modify.styles.button} onPress={handleModification}>
                    <Text style={Modify.styles.buttonText}>Enregistrer</Text>
                  </TouchableOpacity>
                </View>
              </View>
              </ScrollView>
            </View>
          </Overlay>
          <Overlay isVisible={followersVisible} onBackdropPress={toggleFollowersOverlay} fullScreen overlayStyle={{backgroundColor: '#eeeeee',}}>
            <View style={{marginTop:'15%'}}>
              {userInfo.followersCounter<1 && 
                <>
                  <Text style={styles.noSubscribe}>Vous avez 0 abonné</Text>
                </>
              }
              {userInfo.followersCounter>=1 &&
                <>
                  <FlatList
                    data={followersList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
                            <TouchableOpacity style={styles.buttonData} onPress={() => removeFollower(userInfo.email,item.email)}>
                              <Text style={styles.buttonText}>Supprimer</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    }
                  /> 
                </>
              }
                <View style={{alignItems:'center'}}>
                  <TouchableOpacity style={styles.button} onPress={toggleFollowersOverlay}>
                    <Text style={styles.buttonText}>Retour</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </Overlay>
          <Overlay isVisible={followingVisible} onBackdropPress={toggleFollowingOverlay} fullScreen overlayStyle={{backgroundColor: '#eeeeee',}}>
            <View style={{marginTop:'15%'}}>
              {userInfo.followingCounter<1 &&
                <>
                  <Text style={styles.noSubscribe}>Vous êtes abonné à aucun utilisateur</Text>
                </>
              }
              {userInfo.followingCounter>=1 &&
                <>
                  <FlatList
                    data={followingList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
                            <TouchableOpacity style={styles.buttonData} onPress={()=>unfollowUser(userInfo.email,item.email)}>
                              <Text style={styles.buttonText}>Se désabonner</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </>
                    }
                  /> 
                </>
              }
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={toggleFollowingOverlay}>
                  <Text style={styles.buttonText}>Retour</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Overlay>
        </ScrollView>
    </View> 
  );
}
