import React, {useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigations}){

  const {randomProfiles,setRandomProfiles,followUser,userInfo,showUserProfiles,searchUser,searchedUsers,followingList} = useContext(AuthContext);

  const [searchInput,setSearchInput]=useState('');

  const removeItem = (id) => {
    let arr = randomProfiles.filter(function(item) {
      return item.id !== id
    })
    setRandomProfiles(arr);
  }

  const searching = (text) => {
    setSearchInput(text);
    searchUser(userInfo.email,text);
  }

  const verifyIfSubscribed = (userID) => {
    const verification = followingList.some(item => item.key === userID);
    return verification;
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchBar}>
        <Ionicons style={{margin:5}} name='search-outline' size={25} color={'#808080'}/>
        <TextInput value={searchInput} onChangeText={text => searching(text)} placeholderTextColor={'#808080'} placeholder='Rechercher un compte...' style={{marginLeft:5,width:'85%'}}></TextInput>
      </View>
      
      <View style={{marginTop:20}}>
        {(searchInput=='') &&
        <>
          <Text style={styles.textSuggestion}>Voici une liste de personnes que vous pourriez suivre :</Text>
          <View style={styles.containerSuggestion}>
            <FlatList
              data={randomProfiles} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                <>
                  <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                    <View style={{flexDirection:'row',padding:5}}>
                      <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                      <View style={{alignItems:'center',height:60}}>
                        <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                        <Text style={{bottom:10,left:15,fontSize:15,position:'absolute',marginTop:15}}>{item.type}</Text>
                      </View>
                      {(verifyIfSubscribed(item.id)==false) &&
                      <>
                        <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email);removeItem(item.id)}}>
                          <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                        </TouchableOpacity>
                      </>
                      }
                    </View>
                  </View>
                </>
              }
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonReload} onPress={() => {showUserProfiles(userInfo.email)}}>
              <Text style={styles.buttonText}>Recharger</Text>
            </TouchableOpacity>
          </View>
        </>
        }
        {(searchInput!=='') &&
        <>
          <View style={styles.containerSuggestion}>
          <FlatList
            data={searchedUsers} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
              <>
                <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                  <View style={{flexDirection:'row',padding:5}}>
                    <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                    <View style={{alignItems:'center',height:60}}>
                      <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                      <Text style={{bottom:10,left:15,fontSize:15,position:'absolute',marginTop:15}}>{item.type}</Text>
                    </View>
                    {(verifyIfSubscribed(item.id)==false) &&
                    <>
                      <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email)}}>
                        <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                      </TouchableOpacity>
                    </>
                    }
                  </View>
                </View>
              </>
            }
          />
          </View>
        </>
        }
      </View>
      
    </View>
  );
  
}

export default SearchScreen;