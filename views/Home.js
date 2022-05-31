import React, {useEffect,useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView,SafeAreaView,TextInput,FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';
import styles from '../style/searchStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Overlay } from 'react-native-elements';

function HomeScreen({navigations}){

  const {userInfo,followUser,post,retrievedPosts,retrievePosts,randomProfiles,setRandomProfiles,showUserProfiles,followingList} = useContext(AuthContext);

  const removeItem = (id) => {
    let arr = randomProfiles.filter(function(item) {
      return item.id !== id
    })
    setRandomProfiles(arr);
  }

  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const verifyIfSubscribed = (userID) => {
    const verification = followingList.some(item => item.key === userID);
    return verification;
  }

  // For posting

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
      toggleOverlay();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form2}>
        <Ionicons name="add-outline" size={50} color="black" style={{alignSelf:'center', left:'2%', bottom:'4%'}} onPress={() => {toggleOverlay()}} />
        <Overlay  isVisible={visible} onBackdropPress={toggleOverlay} fullScreen overlayStyle={{backgroundColor:'#FFFAF0'}}>
          <View style={{marginTop:'15%',padding:5}}>
            <View style={{flexDirection:'row',marginHorizontal:'10%'}}>
              <Ionicons name="close-outline" size={50} color="black" style={{alignSelf:'flex-start'}} onPress={() =>{toggleOverlay()} } />
              <Ionicons name="image-outline" size={50} color="black" style={{marginLeft:'60%'}} />
            </View>
            <TextInput 
              style={{backgroundColor:'white', width:'80%', marginTop:'10%', borderRadius:10, padding:5}} 
              fontSize={20} maxLength={200} multiline={true} alignSelf='center' numberOfLines={5} textAlignVertical='top' height={200} 
              value={body} onChangeText={text => setBody(text)}
              placeholder='Ecrivez quelque chose ici...'
            />
            <TouchableOpacity style={styles.buttonO} onPress={handlePost}>        
              <Text style={styles.averageText}>Publier</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
      <View>
        <Text style={styles.title}>Lorem Ipsum</Text>
      </View>
      
        { (retrievedPosts.length<1) &&
          <View style={{marginTop:20}}>
            <Text style={styles.textSuggestion}>C'est vide par ici...</Text>
            <Text style={styles.textSuggestion}>Postez ou suivez des personnes pour alimenter votre feed!</Text>
            <View style={styles.containerSuggestion}>
              <FlatList
                data={randomProfiles} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                  <>
                    <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                      <View style={{flexDirection:'row',padding:5}}>
                        <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                        <View style={{alignItems:'center',height:60}}>
                          <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                          <Text style={{bottom:10,left:15,fontSize:15,position:'absolute',marginTop:15}}>{item.type}</Text>
                        </View>
                        {(verifyIfSubscribed(item.id)==false) &&
                        <>
                          <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email);removeItem(item.id)}}>
                            <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
                          </TouchableOpacity>
                        </>
                        }
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
        } 
        { (retrievedPosts.length>=1) &&
          <>
            <View style={{marginTop:20}}>
              <View style={styles.containerSuggestion2}>
                <FlatList
                data={retrievedPosts} renderItem={({item}) => 
                <>
                    <View style={{borderBottomWidth:1,borderColor:'#d2b48c', marginBottom:20}}>
                      <View style={{flexDirection:'row'}}>
                        <Image source={{uri:item.pp}} style={{width:'21%',height:'100%',borderRadius:100}}/>  
                        <Text style={{fontSize:15, height:60, top:20, marginLeft:20}}>{item.forename} {item.surname} | {item.type}</Text>
                      </View>
                      <Text style={{margin:10}}>{item.body}</Text>
                    </View>
                </>
                }
                />
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonReload} onPress={() => {retrievePosts(userInfo.email,userInfo.following)}}>
                  <Text style={styles.buttonText}>Recharger</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
    </SafeAreaView>
  );
}

/*
<View style={{backgroundColor:'#FFFAF0',borderColor:"#FFFAF0",borderWidth:1,borderRadius: 10,marginHorizontal:'10%'}}>
  <FlatList
    data={randomProfiles} showsHorizontalScrollIndicator={false} horizontal={true} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
    <>
      <View style={{marginBottom:-35}}>
        <View style={{flexDirection:'row',padding:5,height:100,justifyContent:'center',marginTop:15}}>
          <Image source={{uri:item.ppPath}} style={{width:'28%',height:'60%',borderRadius:100}}/>  
          <Text style={{fontSize:15,top:15,left:10}}>{item.forename} {item.surname}</Text>
          <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email);removeItem(item.id)}}>
            <Text style={{fontSize: 15, textAlign:"center"}}>S'abonner</Text>
        </TouchableOpacity>
        </View>
      </View>
    </>
  }
  />
</View>
*/

export default HomeScreen;