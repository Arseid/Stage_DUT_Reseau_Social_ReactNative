import React,{useEffect,useState,useContext} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TextInput,Keyboard,FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import { Overlay } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

export function ProfileScreen({navigation}){

  const {userInfo,logout,checkPosts,followersList,followingList,unfollowUser,removeFollower,retrievePosts,spectateProfile,modifyProfilePicture,backgroundPicture,
  setModifyBio,setModifyFields,setModifyInfo,setModifyInterest} = useContext(AuthContext);

  const [followersVisible, setFollowersVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);

  const toggleFollowersOverlay = () => {
    setFollowersVisible(!followersVisible);
  };

  const toggleFollowingOverlay = () => {
    setFollowingVisible(!followingVisible);
  };

  useEffect(()=> {retrievePosts(userInfo.email,userInfo.following)},[checkPosts]);
  
  const handleSpectate = (email) => {
    spectateProfile(email);
    navigation.navigate('Inspecter Profil');
  }

  const handleModifyInfo = () => {
    setModifyInfo(true);
    navigation.navigate('Modifier le profil');
  }

  const handleModifyBio = () => {
    setModifyBio(true);
    navigation.navigate('Modifier le profil');
  }

  const handleModifyFields = () => {
    setModifyFields(true);
    navigation.navigate('Modifier le profil');
  }

  const handleModifyInterest = () => {
    setModifyInterest(true);
    navigation.navigate('Modifier le profil');
  }

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
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}</Text>
                <TouchableOpacity onPress={() => handleModifyInfo()}>
                  <Ionicons name='create-outline' size={15} color="black" style={{marginLeft:5}}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.averageText}>{userInfo.type} {userInfo.type=='Eleve' ? userInfo.option2 : ""} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
            </View>
          </View>

          <View style={styles.detailsProfile}>
            <View style={styles.field}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.subtitle}>Bio</Text>
                <TouchableOpacity onPress={() => handleModifyBio()}>
                  <Ionicons name='create-outline' size={15} color="black" style={{marginLeft:5}}/>
                </TouchableOpacity>
              </View>
              {userInfo.description ? 
              <Text style={styles.bodyText}>{userInfo.description}</Text>:
              <Text style={styles.bodyText}>Vous n'avez publié aucune bio.</Text>}
            </View>
          </View>
          <View style={styles.detailsProfile}>
            <View style={styles.field}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.subtitle}>{userInfo.type!=='Enseignant' ? 'Filières' : 'Matières enseignées'}</Text>
                <TouchableOpacity onPress={() => handleModifyFields()}>
                  <Ionicons name='create-outline' size={15} color="black" style={{marginLeft:5}}/>
                </TouchableOpacity>
              </View>
              {userInfo.interest ? 
              <Text style={styles.bodyText}>{userInfo.interest}</Text>:
              <Text style={styles.bodyText}>Vous n'avez partagé aucunes fillières.</Text>}
            </View>
          </View>
          {userInfo.type!=='Entreprise' ?
          <View style={styles.detailsProfile}>
            <View style={styles.field}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.subtitle}>Centres d'intérêt</Text>
                <TouchableOpacity onPress={() => handleModifyInterest()}>
                  <Ionicons name='create-outline' size={15} color="black" style={{marginLeft:5}}/>
                </TouchableOpacity>
              </View>
              {userInfo.interest2 ? 
              <Text style={styles.bodyText}>{userInfo.interest2}</Text>:
              <Text style={styles.bodyText}>Vous n'avez partagé aucun centres d'intérêt.</Text>}
            </View>
          </View>
          : <></>}
         
          <Overlay isVisible={followersVisible} onBackdropPress={toggleFollowersOverlay} fullScreen overlayStyle={{backgroundColor: '#eeeeee',}}>
            <View style={{marginTop:'15%'}}>
              {userInfo.followersCounter<1 && 
                <>
                  <Text style={styles.noSubscribe}>Vous avez 0 abonné</Text>
                </>
              }
              {userInfo.followersCounter>=1 &&
                <>
                  <Text style={{fontSize:25,textAlign:'center'}}>Mes abonnés</Text>
                  <FlatList
                    data={followersList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <TouchableOpacity onPress={() => {toggleFollowersOverlay();handleSpectate(item.email)}}>
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
                            </TouchableOpacity>
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
                  <Text style={{fontSize:25,textAlign:'center'}}>Mes abonnements</Text>
                  <FlatList
                    data={followingList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <TouchableOpacity onPress={() => {toggleFollowingOverlay(),handleSpectate(item.email)}}>
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
                            </TouchableOpacity>
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