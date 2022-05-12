import React,{useState,useContext} from 'react';
import {Text, Image, View, Keyboard,TouchableWithoutFeedback, TouchableOpacity,TextInput,ScrollView,CheckBox} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import * as Modify from '../style/modifyStyle';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import * as ImagePicker from 'expo-image-picker';

export function ModifyProfileScreen({navigation}){

    const {userInfo,isLoading,modify,modifyProfilePicture,backgroundPicture} = useContext(AuthContext);
    const [pronouns, setPronouns] = useState(userInfo.gender);
    const [bio, setBio] = useState(userInfo.description);

    const DismissKeyboard = ({children}) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

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

    /*
    <Overlay isVisible={visibleModificationOverlay} onBackdropPress={toggleMofificationOverlay}>
        <View style={{height:'103%',width:'106%',backgroundColor: '#eeeeee',}}>
        <ScrollView>
        <View style={Modify.styles.focusProfile}>
          <TouchableOpacity onPress={changeBackgroundPicture}>
              <Image source={{uri:userInfo.backgroundPicture}} style={Modify.styles.backgroundPicture}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={changePP}>
              <View style={Modify.styles.viewPP}>
                  <Image source={{uri:userInfo.pp}} style={Modify.styles.image}/>
              </View>
          </TouchableOpacity>
          <View style={Modify.styles.personalInfo}>
            <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}{userInfo.gender ? " ("+userInfo.gender+")" : ""}</Text>
            <Text style={Modify.styles.averageText}>{userInfo.type} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
          </View>
        </View>
        <View style={Modify.styles.detailsProfile}>
                <View style={Modify.styles.personalInfoChange}>
                    <View style={Modify.styles.genderField}>
                        <View style={Modify.styles.leftSide}>
                            <Text style={Modify.styles.averageTextChange}>Pronoms </Text>
                        </View>
                        <TextInput 
                            style={Modify.styles.inputPronouns}
                            maxLength={10} 
                            placeholderTextColor='#808080'
                            placeholder='Genre ou Pronoms à utiliser...'
                            value={pronouns}
                            onChangeText={text => setPronouns(text)}
                        />
                    </View>
                    <View style={Modify.styles.bioField}>
                      <View style={Modify.styles.leftSide}>
                          <Text style={Modify.styles.averageTextChange}>Bio </Text>
                      </View>
                      <TextInput 
                          style={Modify.styles.inputBio} 
                          multiline={true} 
                          maxLength={200} 
                          placeholderTextColor='#808080'
                          placeholder='Bio de 200 caractères maximum...'
                          value={bio}
                          onChangeText={text => setBio(text)}
                      />
                    </View>
                </View>
            <View style={Modify.styles.hobbys}>
              <Text style={Modify.styles.subtitle}>Centre d'intérêt...</Text>
            </View>
            <View style={Modify.styles.changeView}>
              <TouchableOpacity style={Modify.styles.button} onPress={toggleMofificationOverlay}>
                <Text style={Modify.styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Modify.styles.button} onPress={handleModification}>
                <Text style={Modify.styles.buttonText}>Changer</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
        </View>
      </Overlay>
      */

    // TO DO
    // Centre d'intérêt : les matières, ce qu'on aime
    return(
        <View style={Modify.styles.container}>
            <Spinner visible={isLoading}/>
            <ScrollView>
            <View style={Modify.styles.focusProfile}>
                <TouchableOpacity onPress={changeBackgroundPicture}>
                    <Image source={{uri:userInfo.backgroundPicture}} style={Modify.styles.backgroundPicture}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={changePP}>
                    <View style={Modify.styles.viewPP}>
                        <Image source={{uri:userInfo.pp}} style={Modify.styles.image}/>
                    </View>
                </TouchableOpacity>
                <View style={Modify.styles.personalInfo}>
                    <Text style={{fontSize:25, marginBottom:5}}>{userInfo.surname} {userInfo.forename}{userInfo.gender ? " ("+userInfo.gender+")" : ""}</Text>
                    <Text style={Modify.styles.averageText}>{userInfo.type} {userInfo.option1 ? " | "+userInfo.option1 : ""}</Text>
                </View>
            </View>

            <View style={Modify.styles.detailsProfile}>
                <DismissKeyboard>
                    <View style={Modify.styles.personalInfoChange}>
                        <View style={Modify.styles.genderField}>
                            <View style={Modify.styles.leftSide}>
                                <Text style={Modify.styles.averageTextChange}>Pronoms </Text>
                            </View>
                            <TextInput 
                                style={Modify.styles.inputPronouns}
                                maxLength={10} 
                                placeholderTextColor='#808080'
                                placeholder='Genre ou Pronoms à utiliser...'
                                value={pronouns}
                                onChangeText={text => setPronouns(text)}
                            />
                        </View>
                        <View style={Modify.styles.bioField}>
                            <View style={Modify.styles.leftSide}>
                                <Text style={Modify.styles.averageTextChange}>Bio </Text>
                            </View>
                            <TextInput 
                                style={Modify.styles.inputBio} 
                                multiline={true} 
                                maxLength={200} 
                                placeholderTextColor='#808080'
                                placeholder='Bio de 200 caractères maximum...'
                                value={bio}
                                onChangeText={text => setBio(text)}
                            />
                        </View>
                    </View>
                </DismissKeyboard>
                <View style={Modify.styles.hobbys}>
                    <Text style={Modify.styles.subtitle}>Centre d'intérêt...</Text>
                </View>
                <View style={Modify.styles.changeView}>
                    <TouchableOpacity style={Modify.styles.button} onPress={handleModification}>
                        <Text style={Modify.styles.buttonText}>Changer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View> 
    );
}

