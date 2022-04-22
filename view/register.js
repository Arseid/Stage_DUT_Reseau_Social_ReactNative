import {Text, TextInput, View, Pressable,Button } from 'react-native';
import styles from '../style/style';
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const data = [
  {
    label: 'Elève',
   },
   {
    label: 'Parent',
   },
   {
    label: 'Enseignant',
   },
   {
    label: 'Entreprise',
   }

  ];
export function RegisterScreen(){
  const [selectedIndex, setSelectedIndex] = useState();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Jules-Verne', value: 'Jules-Verne'},
    {label: 'Malraux', value: 'Malraux'},
    {label: 'International', value: 'International'},
    {label: 'Notre-Dame de la Tramontane', value: 'Notre-Dame de la Tramontane'},
    {label: 'Saint Barthélemy', value: 'Saint Barthélemy'},
    {label: 'Mont Saint Jean', value: 'Mont Saint Jean'},
    {label: 'Nazareth', value: 'Nazareth'},
    {label: 'Blanche de Castille', value: 'Blanche de Castille'},
    {label: 'Baous', value: 'Baous'},
    {label: 'Niki de Saint Phalle', value: 'Niki de Saint Phalle'},
    {label: 'Fénélon', value: 'Fénélon'},
    {label: 'Sasserno', value: 'Sasserno'},
    {label: 'Sainte-Marie', value: 'Sainte-Marie'},
    {label: 'Albert Camus', value: 'Albert Camus'},
    {label: 'Or Torah', value: 'Or Torah'},
    {label: 'Saint Philippe Néri', value: 'Saint Philippe Néri'},
    {label: 'Kerem Menahem', value: 'Kerem Menahem'},
    {label: 'Colombier Sainte Thérèse', value: 'Colombier Sainte Thérèse'}
    
  ]);

  const [items2, setItems2] = useState([
    {label: '4ème', value: '4ème'},
    {label: '3ème', value: '3ème'}
    
  ]);

  const [items3, setItems3] = useState([
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
    
  ]);

  

  const [identificationDone, setIdentificationDone] = useState(false);
  const [selectedUserType, setSelectedUserTypê] = useState(null);
  
  const ContinueSubscription = () => {

    setIdentificationDone(true);

  };

  const RadioButtonSelected = (e) => {

    setSelectedUserTypê(e.label);

  };


    return(
        <View style={styles.container}>
 
        <View style={styles.upside}>
          <View style={styles.formRegister}>
            <Text style={styles.titleRegister}>Lorem Ipsum</Text>
            <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  bottom: 20
                }} />
            { (identificationDone == false) &&
            <><Text style={styles.subtitle}>Créer un nouveau compte</Text><Text style={styles.info}>Vous êtes un(e)...</Text><View>
                  <RadioButtonRN
                    style={{ backgroundColor: '#FFFAF0', bottom: 60 }}
                    data={data}
                    selectedBtn={(e) => RadioButtonSelected(e)}
                    icon={<Icon
                      name="check-circle"
                      size={25}
                      color="#2c9dd1" />}
                    textColor="black" />
                  <Button
                    title="Continuer >"
                    color="#ffaf7a"
                    onPress={() => ContinueSubscription()} />
                </View></>
      }
      { (identificationDone == true) &&
      <View>
        <Text>Entrer les infos ici pour {selectedUserType} :</Text>
        <Text style={styles.subtitle2}>Créer un compte {selectedUserType}</Text>
        <TextInput style={styles.infoInputFirstName} placeholder="Prénom"/>
        <TextInput style={styles.infoInputLastName} placeholder="Nom de famille"/>
        <TextInput style={styles.infoInputRegister} placeholder=" Entrez une adresse e-mail" autoCapitalize='none'/>
        <TextInput style={styles.infoInputRegister} placeholder=" Entrez un mot de passe" secureTextEntry autoCapitalize='none'/>
        <TextInput style={styles.infoInputRegister} placeholder=" Confirmez votre mot de passe" secureTextEntry autoCapitalize='none'/>
        <View style={styles.downside}>
           <Text style ={{fontSize: 9, height: 110, top: 70}}> En cliquant sur S’inscrire, vous acceptez nos Conditions générales. Découvrez comment nous recueillons,utilisons et partageons vos données en lisant notre Politique d’utilisation des données et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</Text>
        </View>
        <Pressable  style={styles.buttonRegister}> 
              <Text style={styles.averageText} onPress={() =>navigation.navigate('Profile')} >S'inscrire</Text>
            </Pressable>
        { selectedUserType == 'Elève' && 
        <><DropDownPicker
                    dropDownContainerStyle={{top:-271,width:150, left:35}}
                    style={styles.dropDownLeft}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Etablissement"
                    placeholderStyle={{ color: 'darkgrey' }} /><DropDownPicker
                      dropDownContainerStyle={{top:-301,width:150, right:20}}
                      style={styles.dropDownRight}
                      open={open2}
                      value={value}
                      items={items2}
                      setOpen={setOpen2}
                      setValue={setValue}
                      setItems={setItems2}
                      placeholder="Classe"
                      placeholderStyle={{ color: 'darkgrey' }} /></>
        }
        { selectedUserType == 'Parent' && 
        <><DropDownPicker
                    dropDownContainerStyle={{top:-271,width:150, left:35}}
                    style={styles.dropDownLeft}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Etablissement Elève"
                    placeholderStyle={{ color: 'darkgrey' }} /><DropDownPicker
                      dropDownContainerStyle={{top:-301,width:150, right:20}}
                      style={styles.dropDownRight}
                      open={open2}
                      value={value}
                      items={items2}
                      setOpen={setOpen2}
                      setValue={setValue}
                      setItems={setItems2}
                      placeholder="Classe Elève"
                      placeholderStyle={{ color: 'darkgrey' }} /></>
        }
        { selectedUserType == 'Enseignant' && <><DropDownPicker
                  dropDownContainerStyle={{ top: -271, width: 150, left: 35 }}
                  style={styles.dropDownLeft}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Etablissement"
                  placeholderStyle={{ color: 'darkgrey' }} /><TextInput
                    style={styles.infoInputRight}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Chef d'établissement" /></>}
        { selectedUserType == 'Entreprise' && <><TextInput
                  style={styles.infoInputLeft}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Nom d'entreprise" /><DropDownPicker
                    dropDownContainerStyle={{top:-311,width:150, right:15 }}
                    style={styles.dropDownRight2}
                    open={open}
                    value={value}
                    items={items3}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems3}
                    placeholder="Secteur d'activité"
                    placeholderStyle={{ color: 'darkgrey' }} /></>}
       </View>
      }
            <Text style={styles.hyperlinkTextRegister} onPress={() =>navigation.navigate('Login')}>
                Vous avez déjà un compte?
                </Text>
          </View>
  
        </View> 

      </View>
    );
  }