import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView, Image, SafeAreaView } from 'react-native';
import styles from '../style/feedStyle';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Ionicons } from '@expo/vector-icons'; 
import { Overlay } from 'react-native-elements';

export function FeedScreen({navigation}){

  const [email, setEmail] = useState ('');
  const [pwd, setPwd] = useState ('');
  const {isLoading, login} = useContext(AuthContext);

  const handleLogin = () =>{
    login(email,pwd);
    Keyboard.dismiss();
  }

 let cpt=0;

 const [subscribed, setSubscribed] = useState(false);

 const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  

 
  return (

    <SafeAreaView style={styles.container}>
      
      <Spinner visible={isLoading}/>
      <View style={styles.form2}><Ionicons name="add-outline" size={50} color="black" style={{alignSelf:'center', left:'2%', bottom:'4%'}} 
       onPress={() => {toggleOverlay()}} />
        <Overlay  isVisible={visible} onBackdropPress={toggleOverlay} fullScreen overlayStyle={{backgroundColor:'#FFFAF0', borderWidth:3, borderColor:'#d2b48c'}}>
        <Ionicons name="close-outline" size={50} color="black" style={{alignSelf:'flex-start'}} onPress={() =>{toggleOverlay(null)} } />
  <TextInput  style={{backgroundColor:'white', height:'40%', width:'80%', marginTop:'25%', borderRadius:10, padding:5}} fontSize={20} maxLength={200} multiline={true} alignSelf='center' numberOfLines={5} textAlignVertical='top' height={50} placeholder='Ecrivez quelque chose ici...'/>
  <TouchableOpacity style={styles.buttonO}  >
           
           <Text style={styles.averageText}>Publier</Text>
         </TouchableOpacity>
         <Ionicons name="image-outline" size={50} color="black" style={{alignSelf:'flex-end',marginLeft:'15%', position:'absolute',top:'1%'}} />
</Overlay>
       </View>
      <View>
      <Text style={styles.title}>Lorem Ipsum</Text>
      </View>
      
      <View style={styles.upside}>
      { (subscribed == false) &&
        <ScrollView style={styles.form} alwaysBounceHorizontal={false}>
        <Text style={{alignSelf:'center', right:'2%'}}>Pour le moment, vous ne suivez personne !</Text>
        <Text style={{alignSelf:'flex-end'}}>Voici une liste de personnes que vous pourriez suivre :</Text>
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
        <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => {cpt++;setSubscribed(true)}}  >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
         <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => {cpt++;setSubscribed(true)}} >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
         <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => {cpt++;setSubscribed(true)}} >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
         <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => {cpt++;setSubscribed(true)}}>
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
         <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => {cpt++;setSubscribed(true)}}>
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
         
        </ScrollView>
} 

{ (subscribed == true) &&
<ScrollView style={styles.form3}><Text>Ici apparaitront les posts !</Text></ScrollView>
}



       

      </View> 
     
    </SafeAreaView>
  );
}