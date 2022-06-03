import React,{useEffect,useState,useContext} from 'react';
import {Text, Image, View,ScrollView, TouchableOpacity,TextInput,Keyboard,FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/profileStyle';
import Spinner from 'react-native-loading-spinner-overlay';
import { Overlay } from 'react-native-elements';

export function SpectateProfile({navigation}){

  const {userInfo,spectatedUserInfo,spectatedFollowersList,spectatedFollowingList,followingList,followUser} = useContext(AuthContext);

  const [followersVisible, setFollowersVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);

  const toggleFollowersOverlay = () => {
    setFollowersVisible(!followersVisible);
  };

  const toggleFollowingOverlay = () => {
    setFollowingVisible(!followingVisible);
  };

  const verifyIfSubscribed = (userID) => {
    const verification = followingList.some(item => item.key === userID);
    return verification;
  }

  return(
    <View style={styles.container}>
      <Spinner visible={false} textContent={'Loading...'} textStyle={{color: '#FFF'}}/>
        <ScrollView>
          <View style={styles.focusProfile}>
              <Image source={{uri:spectatedUserInfo.backgroundPicture}} style={styles.backgroundPicture}/>
              <View style={styles.viewPP}>
                <Image source={{uri:spectatedUserInfo.pp}} style={styles.image}/>
              </View>
              <View style={styles.otherInfo}>
                <View style={{marginLeft:'5%'}}>
                  <TouchableOpacity onPress={toggleFollowersOverlay}>
                    <Text style={styles.averageText}>Abonnés</Text>
                    <Text style={styles.averageText}>{spectatedUserInfo.followersCounter}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginLeft:'10%'}}>
                  <TouchableOpacity onPress={toggleFollowingOverlay}>
                    <Text style={styles.averageText}>Abonnements</Text>
                    <Text style={styles.averageText}>{spectatedUserInfo.followingCounter}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.personalInfo}>
                <Text style={{fontSize:25, marginBottom:5}}>{spectatedUserInfo.surname} {spectatedUserInfo.forename}</Text>
                <Text style={styles.averageText}>{spectatedUserInfo.type} {spectatedUserInfo.option1 ? " | "+spectatedUserInfo.option1 : ""}</Text>
              </View>
              {(verifyIfSubscribed(spectatedUserInfo.userID)==false) &&
                <View style={{alignItems:'center', marginBottom:10}}>
                <TouchableOpacity style={styles.button} onPress={() => followUser(userInfo.email,spectatedUserInfo.email)}>
                    <Text style={styles.buttonText}>S'abonner</Text>
                </TouchableOpacity>
                </View>
               }
          </View>
          {spectatedUserInfo.description || spectatedUserInfo.interest ? 
          <>
            <View style={styles.detailsProfile}>
            {spectatedUserInfo.description ? 
            <>
              <View style={styles.bio}>
                <Text style={styles.subtitle}>Bio</Text>
                <Text style={styles.bodyText}>{spectatedUserInfo.description}</Text>
              </View>
            </>:<></>}
            {spectatedUserInfo.interest ? 
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
              {spectatedUserInfo.followersCounter<1 && 
                <>
                  <Text style={styles.noSubscribe}>Cet utilisateur possède 0 abonné</Text>
                </>
              }
              {spectatedUserInfo.followersCounter>=1 &&
                <>
                  <FlatList
                    data={spectatedFollowersList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
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
              {spectatedUserInfo.followingCounter<1 &&
                <>
                  <Text style={styles.noSubscribe}>Cet utilisateur est abonné à aucun utilisateur</Text>
                </>
              }
              {spectatedUserInfo.followingCounter>=1 &&
                <>
                  <FlatList
                    data={spectatedFollowingList} renderItem={({item}) => 
                      <>
                        <View style={styles.dataView}>
                          <View style={styles.dataAlignment}>
                            <Image source={{uri:item.ppPath}} style={styles.imageData}/>  
                            <Text style={styles.textData}>{item.forename} {item.surname}</Text>
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
