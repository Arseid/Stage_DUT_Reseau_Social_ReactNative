import React, {useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigations}){

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
          <View style={styles.viewSearchBar}>
            <Ionicons style={{margin:5}} name='search-outline' size={25} color={'#808080'}/>
            <TextInput value={searchInput} onChangeText={text => searching(text)} placeholderTextColor={'#808080'} placeholder='Rechercher un compte...' style={{marginLeft:5,width:'85%'}}></TextInput>
          </View>
          <View style={{marginTop:20}}>
            <Text style={styles.textSuggestion}>Voici une liste de personnes que vous pourriez suivre :</Text>
            <View style={styles.containerSuggestion}>
              <FlatList
                data={randomProfiles} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                  <>
                    <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                      <View style={{flexDirection:'row',padding:5}}>
                        <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                          <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                          <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email);removeItem(item.id)}}>
                            <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                          </TouchableOpacity>
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
          </View>
        </View>
      );
    
}

export default SearchScreen;