import React, {useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/messageStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MessageScreen({navigation}){

    const {randomProfiles,setRandomProfiles,followUser,userInfo,showUserProfiles} = useContext(AuthContext);

    const [searchInput,setSearchInput]=useState('');

    const removeItem = (id) => {
      let arr = randomProfiles.filter(function(item) {
        return item.id !== id
      })
      setRandomProfiles(arr);
    }

    const searching = (text) => {

    }

    return (
        <View style={styles.container}>
          <View style={{marginTop:'20%'}}>
            <View style={styles.containerSuggestion}>
              <FlatList
                data={randomProfiles} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                  <>
                    <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                      <View style={{flexDirection:'row',padding:5}}>
                        <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                          <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                      </View>
                      <Text style={styles.msg}>Lorem ipsum dolor sit amet, consectetur...</Text>
                    </View>
                  </>
                }
              />
            </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={styles.buttonReload} onPress={() => {showUserProfiles(userInfo.email)}}>
                <Text style={styles.buttonText}>Actualiser</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    
}

export default MessageScreen;