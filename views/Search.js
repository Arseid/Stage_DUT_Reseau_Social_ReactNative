import React, {useEffect,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigations}){

    const {randomProfiles,followUser} = useContext(AuthContext);

    return (
        <View style={styles.container}>
          <View style={styles.viewSearchBar}>
            <Ionicons style={{margin:5}} name='search-outline' size={25} color={'#808080'}/>
            <TextInput placeholderTextColor={'#808080'} placeholder='Rechercher un compte...' style={{marginLeft:5,width:'85%'}}></TextInput>
          </View>
          <View style={{marginTop:20}}>
            <Text style={styles.textSuggestion}>Voici une liste de personnes que vous pourriez suivre :</Text>
            <View style={styles.containerSuggestion}>
              <FlatList
                  data={randomProfiles} renderItem={({item}) => 
                      <>
                          <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                              <View style={{flexDirection:'row',padding:5}}>
                                  <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                                      <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                                      <TouchableOpacity style={styles.buttonList} onPress={()=>followUser(userInfo.email,item.email)}>
                                          <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                                      </TouchableOpacity>
                              </View>
                          </View>
                      </>
                  }
              />
            </View>
          </View>
        </View>
      );
    
}

export default SearchScreen;