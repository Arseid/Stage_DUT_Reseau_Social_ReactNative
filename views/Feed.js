import React, {useState,useContext} from 'react';
import {Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import styles from '../style/feedStyle';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Icon } from 'react-native-elements'
import { IconButton } from 'react-native-paper';

export function FeedScreen({navigation}){

  const [email, setEmail] = useState ('');
  const [pwd, setPwd] = useState ('');
  const {isLoading, login} = useContext(AuthContext);

  const handleLogin = () =>{
    login(email,pwd);
    Keyboard.dismiss();
  }

  let cpt=0;

  return (

    <View style={styles.container}>
      <Spinner visible={isLoading}/>
      <View style={styles.form2}>
      <Text style={styles.title}>MyTrainee</Text>
      <IconButton icon='plus-box-outline' size={35} style={{left:'75%', bottom:'50%'}}  onPress={() => (console.log('lessgo'))} />
      </View>
      <View style={styles.upside}>

        <ScrollView style={styles.form} alwaysBounceHorizontal={false}>
        <Text style={{alignSelf:'center', right:'2%'}}>Pour le moment, vous ne suivez personne !</Text>
        <Text style={{alignSelf:'flex-end'}}>Voici une liste de personnes que vous pourriez suivre :</Text>
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
        <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))}  >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))} >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))} >
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
        <TouchableOpacity style={styles.button}  onPress={() => cpt++ &&(console.log(cpt))}>
           
           <Text style={styles.averageText}>S'abonner</Text>
         </TouchableOpacity>
         </View>
         <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>Prénom Nom</Text>
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