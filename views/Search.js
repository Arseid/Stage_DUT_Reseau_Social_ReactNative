import React, {useState,useContext} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, FlatList,TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import styles from '../style/searchStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchScreen({navigation}){

  const {spectateProfile,randomProfiles,setRandomProfiles,followUser,userInfo,showUserProfiles,searchUser,searchedUsers,followingList} = useContext(AuthContext);

  const [searchInput,setSearchInput]=useState('');

  const removeItem = (id) => {
    let arr = randomProfiles.filter(function(item) {
      return item.id !== id
    })
    setRandomProfiles(arr);
  }

  const searching = (text) => {
    setSearchInput(text);
    searchUser(userInfo.email,text,chosenType);
  }

  const verifyIfSubscribed = (userID) => {
    const verification = followingList.some(item => item.key === userID);
    return verification;
  }

  const [openType,setOpenType]=useState(false);
  const [typeItems,setTypeItems]=useState([
    {label: 'Construction durable, bâtiments, travaux publics', value: 'construction'},
    {label: 'Etudes et modélisation numérique du bâtiment', value: 'batiment'},
    {label: 'Relation client', value: 'client'},
    {label: 'Gestion administrative,transport et logistique', value: 'gestion'},
    {label: 'Industries graphiques et communication', value: 'comm'},
    {label: 'Alimentation', value: 'alim'},
    {label: 'Beauté et bien-être', value: 'beau'},
    {label: 'Aéronautique', value: 'aero'},
    {label: 'Hôtellerie-restauration', value: 'resto'},
    {label: 'Réalisation de produits mécanique', value: 'meca'},
    {label: 'Métiers de la maintenance', value: 'maintenance'},
    {label: 'Numérique et transition énergétique', value: 'energie'},
    {label: "Pilotage d'installations automatisées", value: 'auto'},
    {label: 'Métiers du bois', value: 'bois'},
  ]);
  const [chosenType,setChosenType]=useState('');

  /*
  const [openDomain,setOpenDomain]=useState(false);
  const [domainItems,setDomainItems]=useState([
    {label: 'Agroalimentaire', value: 'Agroalimentaire'},
    {label: 'Banque/Assurance', value: 'Banque/Assurance'},
    {label: 'Bois / Papier / Carton / Imprimerie', value: 'Bois / Papier / Carton / Imprimerie'},
    {label: 'BTP / Matériaux de construction', value: 'BTP / Matériaux de construction'},
    {label: 'Chimie / Parachimie', value: 'Chimie / Parachimie'},
    {label: 'Commerce / Négoce', value: 'Commerce / Négoce / Distribution'},
    {label: 'Édition / Communication', value: 'Édition / Communication / Multimédia'},
    {label: 'Électronique / Électricité', value: 'Électronique / Électricité'},
    {label: 'Etudes et conseils', value: 'Etudes et conseils'},
    {label: 'Industrie phramaceutique', value: 'Industrie phramaceutique'},
    {label: 'Informatique/Télécoms', value: 'Informatique/Télécoms'},
    {label: 'Machines et équipements', value: 'Machines et équipements/Automobile'},
    {label: 'Métallurgie/Travail du métal', value: 'Métallurgie/Travail du métal'},
    {label: 'Plastique/Caoutchouc', value: 'Plastique/Caoutchouc'},
    {label: 'Services aux entreprises', value: 'Services aux entreprises'},
    {label: 'Textile/Habillement/Chaussure', value: 'Textile/Habillement/Chaussure'},
    {label: 'Transport/Logistique', value: 'Transport/Logistique'},
    {label: 'Autres', value: 'Autres'}
  ])
  const [domainChosen,setDomainChosen]=useState('');
  */

  const handleSpectate = (email) => {
    spectateProfile(email);
    navigation.navigate('Inspecter Profil');
  }

  return (
    <View style={styles.container}>
      
      <View style={{position:'absolute',left:5,top:'15%'}}>
        <View style={styles.viewSearchBar}>
          <Ionicons style={{margin:5}} name='search-outline' size={25} color={'#808080'}/>
          <TextInput value={searchInput} onChangeText={text => searching(text)} placeholderTextColor={'#808080'} placeholder='Rechercher un compte...' style={{marginLeft:5,width:'85%'}}></TextInput>
        </View>
        
        <View style={{marginTop:20,}}>
          {(searchInput=='') &&
          <>
            <Text style={styles.textSuggestion}>Voici une liste de personnes que vous pourriez suivre :</Text>
            <View style={styles.containerSuggestion2}>
              <FlatList
                data={randomProfiles} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                  <>
                    <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                      <View style={{flexDirection:'row',padding:5}}>
                        <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                        <View style={{alignItems:'center',height:60}}>
                          <TouchableOpacity onPress={() => handleSpectate(item.email)}>
                            <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                            <Text style={{bottom:10,left:15,fontSize:15,position:'absolute',marginTop:15}}>{item.type}</Text>
                          </TouchableOpacity>
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
                <Text style={styles.buttonText}>Actualiser</Text>
              </TouchableOpacity>
            </View>
          </>
          }
          {(searchInput!=='') &&
          <>
            <View style={styles.containerSuggestion}>
            <FlatList
              data={searchedUsers} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => 
                <>
                  <View style={{borderBottomWidth:1,borderColor:'#d2b48c'}}>
                    <View style={{flexDirection:'row',padding:5}}>
                      <Image source={{uri:item.ppPath}} style={styles.imageList}/>  
                      <View style={{alignItems:'center',height:60}}>
                        <TouchableOpacity onPress={() => handleSpectate(item.email)}>
                          <Text style={styles.textList}>{item.forename} {item.surname}</Text>
                          <Text style={{bottom:10,left:15,fontSize:15,position:'absolute',marginTop:15}}>{item.type}</Text>
                        </TouchableOpacity>
                      </View>
                      {(verifyIfSubscribed(item.id)==false) &&
                      <>
                        <TouchableOpacity style={styles.buttonList} onPress={()=>{followUser(userInfo.email,item.email)}}>
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
          </>
          }
        </View>
      </View>
      <View style={{position:'absolute',left:'5%',top:'20%'}}>
        <TouchableOpacity style={styles.rebootFilterButton} onPress={() => {setChosenType('')}}>
          <Text style={styles.buttonText}>Réinitialiser le filtre</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:'5%',marginTop:'20%',alignSelf:'center'}}>
        <DropDownPicker
          style={{width:'100%'}}
          open={openType}
          setOpen={setOpenType}
          items={typeItems}
          setItems={setTypeItems}
          value={chosenType}
          setValue={setChosenType}
          placeholder='Filière...'
        />
      </View>
    </View>
  );
  
}

/*
{(chosenType=='entreprise') && 
        <View style={{marginHorizontal:'5%',marginTop:'5%',alignSelf:'center'}}>
          <DropDownPicker
            style={{width:'75%'}}
            open={openDomain}
            setOpen={setOpenDomain}
            items={domainItems}
            setItems={setDomainItems}
            value={domainChosen}
            setValue={setDomainChosen}
            placeholder="Secteur d'activité"
          />
        </View>
      }
      */

export default SearchScreen;