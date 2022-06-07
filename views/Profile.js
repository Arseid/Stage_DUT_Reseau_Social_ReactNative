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

  const {userInfo,logout,modify,modifyProfilePicture,backgroundPicture,checkPosts,followersList,followingList,unfollowUser,removeFollower,retrievePosts,showUserProfiles} = useContext(AuthContext);

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

  useEffect(()=> {retrievePosts(userInfo.email,userInfo.following)},[checkPosts]);

  // Modification Part
  const [pronouns, setPronouns] = useState(userInfo.gender);
  const [bio, setBio] = useState(userInfo?._description);

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
                <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate('Modifier le profil')}}>
                  <Text style={styles.buttonText}>Modifier le profil</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Test</Text>
                </TouchableOpacity>
              </View>
          </View>
          {userInfo?._description || userInfo.interest ? 
          <>
            <View style={styles.detailsProfile}>
            {userInfo?._description ? 
            <>
              <View style={styles.bio}>
                <Text style={styles.subtitle}>Bio</Text>
                <Text style={styles.bodyText}>{userInfo?._description}</Text>
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