import React,{useEffect,useState,useContext} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TextInput,Keyboard,FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import { Overlay } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

export function ProfileScreen({navigation}){

  const {userInfo,logout,checkPosts,followersList,followingList,unfollowUser,removeFollower,retrievePosts,spectateProfile,retrievedPosts} = useContext(AuthContext);

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
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Modifier le profil')}}>
                  <Text style={styles.buttonText}>Modifier le profil</Text>
                </TouchableOpacity>
              </View>
          </View>
          {userInfo.description || userInfo.interest || retrievedPosts ? 
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
                <Text style={styles.subtitle}>Filières</Text>
                <Text style={styles.bodyText}>{userInfo.interest}</Text>
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
                            <TouchableOpacity onPress={() => handleSpectate(item.email)}>
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
                  <FlatList
                    data={followingList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <TouchableOpacity onPress={() => handleSpectate(item.email)}>
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