import React,{useState,useContext} from 'react';
import {Text, Image, View, Keyboard, TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/modifyStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import * as ImagePicker from 'expo-image-picker';

export function ModifyProfileScreen({navigation}){

    const {userInfo,isLoading,modify,modifyProfilePicture,backgroundPicture} = useContext(AuthContext);
    const [pronouns, setPronouns] = useState(userInfo.gender);
    const [bio, setBio] = useState(userInfo.description);

    const handleModification = () =>{
        modify(pronouns,bio,userInfo.email);
        Keyboard.dismiss();
        navigation.goBack();
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
            <ScrollView>
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
                        <TextInput 
                            style={styles.inputPronouns}
                            placeholderTextColor='#808080'
                            placeholder='Genre ou Pronoms à utiliser...'
                            value={pronouns}
                            onChangeText={text => setPronouns(text)}
                        />
                    </View>
                    <View style={styles.bioField}>
                        <View style={styles.leftSide}>
                            <Text style={styles.averageTextChange}>Bio </Text>
                        </View>
                        <TextInput 
                            style={styles.inputBio} 
                            multiline={true} 
                            maxLength={200} 
                            placeholderTextColor='#808080'
                            placeholder='Bio de 200 caractères maximum...'
                            value={bio}
                            onChangeText={text => setBio(text)}
                        />
                    </View>
                </View>
                <View style={styles.changeView}>
                    <TouchableOpacity style={styles.button} onPress={handleModification}>
                        <Text style={styles.buttonText}>Changer</Text>
                    </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
        </View> 
    );
}

