import React, {useEffect,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigations}){

    const {randomProfiles} = useContext(AuthContext);

    return (
        <View style={styles.container}>
          <View style={{top:60,width:'80%',borderColor:"#FFFAF0", backgroundColor:"#FFFAF0", borderWidth:1,alignSelf:'center',borderRadius: 10,padding:10,}}>
            <FlatList
                data={randomProfiles} renderItem={({item}) => 
                    <>
                        <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={{uri:item.ppPath}} style={{width:'20%',height:'100%',borderRadius:100}}/>  
                                    <Text style={{fontSize:15, height:60}}>{item.forename} {item.surname}</Text>
                                    <TouchableOpacity style={{backgroundColor: '#ffaf7a', borderRadius: 4, padding:5, position:'absolute',left:220}} onPress={()=>unfollowUser(userInfo.email,item.email)}>
                                        <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </>
                }
            />
          </View>
        </View>
      );
    
}
/*

  dataView:{
    borderBottomColor:'#808080',
    borderBottomWidth:1,
    padding:10
  },

  dataAlignment:{
    flexDirection:'row',
    alignItems:'center'
  },

  imageData:{
    borderRadius:100,
    width:'15%',
    height:'100%',
    left:5
  },

  textData:{
    left:25,
    top:18,
    fontSize:15,
    height:60
  },

  buttonData:{
    backgroundColor: '#ffaf7a',
    borderRadius: 4,
    padding:5,
    position:'absolute',
    left:'65%'
  }

<FlatList
    data={randomProfiles} renderItem={({item}) => 
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
*/
export default SearchScreen;