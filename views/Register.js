import {Text, TextInput, View, TouchableOpacity,Button, Keyboard } from 'react-native';
import styles from '../style/registerStyle';
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import RadioForm from 'react-native-simple-radio-button';

const PROP = [
	{
		label: 'Elève',
		value: 'Elève',
	},
	{
		label: 'Parent',
		value: 'Parent',
	},
	{
		label: 'Enseignant',
		value: 'Enseignant',
	},
	{
		label: 'Entreprise',
		value: 'Entreprise',
  },
];

export function RegisterScreen(){
  //Yves part begin
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');

  const [type, setType] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const {isLoading, register}=useContext(AuthContext);

  const navigation = useNavigation();

  const validateEmail = (email) => {
    return email.match(
      //Doit contenir @ et .
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validatePwd = (pwd,checkPwd) => {
    if (pwd==checkPwd){
      //Au moins 1 chiffre, 1 minuscule, 1 majuscule, 8 caracteres
      return pwd.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      );
    }
    else{
      return false;
    }
  }

  const handleRegister = () =>{
    if (forename.length==0 || surname.length==0 || email.length==0 || pwd.length==0 || checkPwd.length==0){
      alert("Veuillez remplir les champs svp.")
    }
    else{
      if (validateEmail(email) && validatePwd(pwd,checkPwd)){
        register(forename,surname,email,pwd,type,option1,option2);
        Keyboard.dismiss();
      }
      else{
        alert("Syntaxe email ou mot de passe incorrect");
      }
    }
  }
  //Yves part stop

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
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
  const [selectedUserType, setSelectedUserType] = useState(null);
  
  const ContinueSubscription = () => {
    if (selectedUserType==null){
      alert ("Veuillez choisir une option")
    }
    else{
      if (selectedUserType=='Elève') setType('Eleve');
      else if (selectedUserType=='Parent') setType('Parent');
      else if (selectedUserType=='Enseignant') setType('Enseignant');
      else if (selectedUserType=='Entreprise') setType('Entreprise');
      setIdentificationDone(true);
    }
  };

  return(
      <View style={styles.container}>
      <Spinner visible={isLoading}/>

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
                  <RadioForm
                  buttonColor={'#ffaf7a'}
                  selectedButtonColor={'#ffaf7a'}
                  labelHorizontal='true'
                    style={{bottom:40}}
                    labelStyle={{marginVertical:15}}
                    radio_props={PROP}
                    initial={-1}
                    onPress={(value) => {setSelectedUserType(value)}}
                  />
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

      <TextInput style={styles.infoInputFirstName} placeholder="Prénom" value={forename} onChangeText={text => setForename(text)}/>
      <TextInput style={styles.infoInputLastName} placeholder="Nom de famille" value={surname} onChangeText={text => setSurname(text)}/>
      <TextInput style={styles.infoInputRegister} placeholder=" Entrez une adresse e-mail" autoCapitalize='none' value={email} onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.infoInputRegister} placeholder=" Entrez un mot de passe" secureTextEntry autoCapitalize='none' value={pwd} onChangeText={text => setPwd(text)}/>
      <TextInput style={styles.infoInputRegister} placeholder=" Confirmez votre mot de passe" secureTextEntry autoCapitalize='none' value={checkPwd} onChangeText={text => setCheckPwd(text)}/>

      <View style={styles.downside}>
        <Text style ={{fontSize: 9, height: 110, top: 70}}> En cliquant sur S’inscrire, vous acceptez nos Conditions générales. Découvrez comment nous recueillons,utilisons et partageons vos données en lisant notre Politique d’utilisation des données et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</Text>
      </View>
      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>

      { selectedUserType == 'Elève' && 
      <>
      <DropDownPicker
        dropDownContainerStyle={{top:-271,width:150, left:35}}
        style={styles.dropDownLeft}
        open={open}
        value={option1}
        items={items}
        setOpen={setOpen}
        setValue={setOption1}
        setItems={setItems}
        placeholder="Etablissement"
        placeholderStyle={{ color: 'darkgrey' }}
      />
      <DropDownPicker
        dropDownContainerStyle={{top:-301,width:150, right:20}}
        style={styles.dropDownRight}
        open={open2}
        value={option2}
        items={items2}
        setOpen={setOpen2}
        setValue={setOption2}
        setItems={setItems2}
        placeholder="Classe"
        placeholderStyle={{ color: 'darkgrey' }} 
      />
      </>
      }
      { selectedUserType == 'Parent' }
      { selectedUserType == 'Enseignant' && 
      <>
      <DropDownPicker
        dropDownContainerStyle={{ top: -271, width: 150, left: 35 }}
        style={styles.dropDownLeft}
        open={open}
        value={option1}
        items={items}
        setOpen={setOpen}
        setValue={setOption1}
        setItems={setItems}
        placeholder="Etablissement"
        placeholderStyle={{ color: 'darkgrey' }}
      />
      <TextInput
        style={styles.infoInputRight}
        placeholder="Chef d'établissement"
        value={option2} 
        onChangeText={text => setOption2(text)}
      />
      </>
      }
      { selectedUserType == 'Entreprise' && 
      <>
      <TextInput
        style={styles.infoInputLeft}
        placeholder="Nom d'entreprise" 
        value={option1} 
        onChangeText={text => setOption1(text)}
      />
      <DropDownPicker
        dropDownContainerStyle={{top:-311,width:150, right:15 }}
        style={styles.dropDownRight2}
        open={open}
        value={option2}
        items={items3}
        setOpen={setOpen}
        setValue={setOption2}
        setItems={setItems3}
        placeholder="Secteur d'activité"
        placeholderStyle={{ color: 'darkgrey' }} 
      />
      </>
      }
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