import React, {useEffect,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigations}){

    const {userProfilesInfo} = useContext(AuthContext);

    return (

        <View style={styles.container}>
          <View>
          <Text style={styles.title}>Lorem Ipsum</Text>
          </View>
          
          <View style={styles.upside}>
    
            <ScrollView style={styles.form} alwaysBounceHorizontal={false}>
            <Text style={{alignSelf:'flex-end'}}>Voici une liste de personnes que vous pourriez suivre :</Text>
            <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
            <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
            <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[0][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[0][1]} {userProfilesInfo[0][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))}  >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[1][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[1][1]} {userProfilesInfo[1][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))} >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[2][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[2][1]} {userProfilesInfo[2][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))} >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[3][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[3][1]} {userProfilesInfo[3][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))}>
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[4][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[4][1]} {userProfilesInfo[4][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))}>
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
             
            </ScrollView>
    
          </View> 
        </View>
      );
    
}

export default SearchScreen;