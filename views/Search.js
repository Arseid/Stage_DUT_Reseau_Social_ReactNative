import React, {useEffect,useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {Text, Image, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { Icon } from 'react-native-elements'
import { IconButton } from 'react-native-paper';
import styles from '../style/searchStyle';

function SearchScreen({navigations}){

    const {isLoading,userProfilesInfo,logout,refresh,userInfo,followUser,test} = useContext(AuthContext);

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
                        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} source={{uri: userProfilesInfo[0][8][3]}}/>
                        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[0][1]} {userProfilesInfo[0][2]}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.averageText}>S'abonner</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
                        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
                        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[1][1]} {userProfilesInfo[1][2]}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.averageText}>S'abonner</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
                        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
                        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[2][1]} {userProfilesInfo[2][2]}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.averageText}>S'abonner</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
                        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
                        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[3][1]} {userProfilesInfo[3][2]}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.averageText}>S'abonner</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, borderWidth: 2, borderColor: '#d2b48c', borderRadius:10, height:120, marginBottom:10 }}>
                        <Icon name='circle' size={100}  iconStyle={{color:'white', alignSelf:'flex-start', marginLeft:40}} containerStyle={{top:7}} />
                        <Text style={{alignSelf: 'flex-end',bottom:80, marginRight:'15%',  fontSize:20}}>{userProfilesInfo[4][1]} {userProfilesInfo[4][2]}</Text>
                        <TouchableOpacity style={styles.button}>
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
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={refresh}><Text>Refresh</Text></TouchableOpacity>
            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={logout}><Text>Log out</Text></TouchableOpacity>

            <Text>Liste d'utilisateurs qui pourraient vous intéresser</Text>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[0][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[0][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[0][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[0][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[1][1]}</Text>    
                <Text style={{margin:5}}>{userProfilesInfo[1][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[1][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[1][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[2][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[2][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[2][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[2][3])}/>
            </View>

            <View style={{flexDirection:'row', margin:5}}>
                <Text style={{margin:5}}>{userProfilesInfo[3][1]}</Text>
                <Text style={{margin:5}}>{userProfilesInfo[3][2]}</Text>
                <Image style={{width:'50%', height:50, resizeMode:'contain', margin:5}} source={{uri: userProfilesInfo[3][8][3]}}></Image>
                <Button title="S'abonner" onPress={()=>followUser(userInfo.email,userProfilesInfo[3][3])}/>
            </View>

            <TouchableOpacity style={{width:300, borderRadius: 4,backgroundColor: '#ffaf7a',padding:5,margin:5}} onPress={()=>{test(userInfo.email)}}><Text>Test</Text></TouchableOpacity>

            <FlatList

            />
        </View>
    );
    */
    
}

export default SearchScreen;