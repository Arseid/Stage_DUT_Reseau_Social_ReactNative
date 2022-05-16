import React, {useEffect,useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({navigations}){

    const {userInfo,followUser,post} = useContext(AuthContext);

    const [body, setBody] = useState ('');
    let chosenFile={};

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64:true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (pickerResult.type=='image') pickerResult.fileName='file'+userInfo.forename+userInfo.surname+'.jpg';
        else pickerResult.fileName='file'+userInfo.forename+userInfo.surname+'.mp4';

        if (!pickerResult.cancelled){
            chosenFile=pickerResult;
        }
    };

    const handlePost = () =>{
        if (body.length==0) alert('FILL PLS')
        else{
            let date=new Date();
            post(userInfo.email,body,chosenFile,date);
            setBody('');
            chosenFile={};
        }
    }

    const {userProfilesInfo} = useContext(AuthContext);

    return (

        <View style={styles.container}>
          <View style={styles.form2}><Ionicons name="add-outline" size={50} color="black" style={{alignSelf:'center', left:'2%', bottom:'4%'}}  onPress={() => (console.log('lessgo'))} /></View>
          <View>
          <Text style={styles.title}>Lorem Ipsum</Text>
          </View>
          
          <View style={styles.upside}>
    
            <ScrollView style={styles.form} alwaysBounceHorizontal={false}>
            <Text style={{alignSelf:'center', right:'2%'}}>Pour le moment, vous ne suivez personne !</Text>
            <Text style={{alignSelf:'flex-end'}}>Voici une liste de personnes que vous pourriez suivre :</Text>
            <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
            <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
            <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[0][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[0][1]} {userProfilesInfo[0][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => followUser(userInfo.email,userProfilesInfo[0][3])}  >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[1][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[1][1]} {userProfilesInfo[1][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => followUser(userInfo.email,userProfilesInfo[1][3])} >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[2][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[2][1]} {userProfilesInfo[2][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => followUser(userInfo.email,userProfilesInfo[2][3])} >
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[3][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[3][1]} {userProfilesInfo[3][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => followUser(userInfo.email,userProfilesInfo[3][3])}>
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
             <Image name='circle'  style={{width: 80, height: 80,left:'12%', top:'15%', borderRadius:100 }} source={{  uri: userProfilesInfo[4][8][3]}} />
            <Text style={{alignSelf: 'flex-end',bottom:60, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[4][1]} {userProfilesInfo[4][2]}</Text>
            <TouchableOpacity style={styles.button}  onPress={() => followUser(userInfo.email,userProfilesInfo[4][3])}>
               
               <Text style={styles.averageText}>S'abonner</Text>
             </TouchableOpacity>
             </View>
             <View style={{ flex: 1, borderWidth: 1, borderColor: 'lightgrey', flexDirection:'column', marginVertical:10}}/>
             
            </ScrollView>
    
          </View> 
        </View>
      );

    /*
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Spinner visible={isLoading}/>
            <Text>Feed d'actualité</Text>
            <TextInput style={{padding:5,margin:5,borderWidth: 1,}} value={body} onChangeText={text => setBody(text)}/>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={openImagePickerAsync}><Text>Upload File</Text></TouchableOpacity>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={handlePost}><Text>Post</Text></TouchableOpacity>
        </View>
    );
    */
    
}

export default HomeScreen;