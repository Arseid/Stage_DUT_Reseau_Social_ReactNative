import React,{useState,useContext} from 'react';
import {Text, Image, View, Keyboard, TouchableOpacity,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/modifyStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import * as ImagePicker from 'expo-image-picker';

export function ModifyProfileScreen({navigation}){

    const {userInfo,isLoading,modify,modifyProfilePicture,backgroundPicture} = useContext(AuthContext);
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');

    const handleModification = () =>{

        if (forename.length==0 && surname.length==0) alert('fill pls');
        else{
            if (forename.length==0) setForename(userInfo.forename);
            if (surname.length==0) setSurname(userInfo.surname);
            modify(forename,surname,userInfo.email);
            Keyboard.dismiss();
            navigation.goBack();
        }   
    }

    let changePP = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64:true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 1,
        });
        pickerResult.fileName='pp'+userInfo.forename+userInfo.surname+'.jpg';

        if (!pickerResult.cancelled){
            let date=new Date();
            modifyProfilePicture(pickerResult,userInfo.email,date);
        }
    };

    let changeBackgroundPicture = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64:true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [6, 3],
            quality: 1,
        });
        pickerResult.fileName='pp'+userInfo.forename+userInfo.surname+'.jpg';

        if (!pickerResult.cancelled){
            let date=new Date();
            backgroundPicture(pickerResult,userInfo.email,date);
        }
    };

    return(
        <View style={styles.container}>
        <Spinner visible={isLoading}/>
          <View style={styles.focusProfile}>
              <TouchableOpacity onPress={changeBackgroundPicture}>
                <Image source={{uri:userInfo.backgroundPicture}} style={styles.backgroundPicture}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={changePP}>
                <View style={styles.viewPP}>
                    <Image source={{uri:userInfo.pp}} style={styles.image}/>
                </View>
              </TouchableOpacity>
              <View style={styles.personalInfo}>
                <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}</Text>
                <Text style={styles.averageText}>{userInfo.type}</Text>
                <Text style={styles.averageText}>{userInfo.option1}</Text>
              </View>

              <View style={styles.personalInfoChange}>
                <View style={styles.genderField}>
                    <View style={styles.leftSide}>
                        <Text style={styles.averageTextChange}>Pronoms </Text>
                    </View>
                    <TextInput style={styles.inputPronouns}></TextInput>
                </View>
                <View style={styles.bioField}>
                    <View style={styles.leftSide}>
                        <Text style={styles.averageTextChange}>Bio </Text>
                    </View>
                    <TextInput style={styles.inputBio} multiline={true}></TextInput>
                </View>
              </View>
              <View style={{alignItems:'center',marginTop:'5%'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Changer</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View> 
    );
}

