import {Text, TextInput, View, TouchableOpacity,Button, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from '../style/registerStyle';
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { AuthContext } from '../context/AuthContext';
import RadioForm from 'react-native-simple-radio-button';

const PROP = [
	{
		label: 'Elève',
		value: 'Elève',
	},
	{
		label: "Parent d'élève",
		value: "Parent d'élève",
	},
	{
		label: 'Enseignant',
		value: 'Enseignant',
	},
	{
		label: 'Professionnel',
		value: 'Professionnel',
  },
  {
    label: 'Entreprise',
		value: 'Entreprise',
  },
];

export function RegisterScreen(){

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
    if (selectedUserType!=='Entreprise' && (forename.length==0 || surname.length==0 || email.length==0 || pwd.length==0 || checkPwd.length==0)){
      alert("Veuillez remplir les champs svp.")
    }
    else if(selectedUserType=='Entreprise' && (email.length==0 || pwd.length==0 || checkPwd.length==0)){
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

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [items, setItems] = useState([
    {label: 'Collège Carnot (Grasse)', value: 'Collège Carnot (Grasse)'},
    {label: 'Collège Jules-Verne (Cagnes sur Mer)', value: 'Collège Jules-Verne (Cagnes sur Mer)'},
    {label: 'Collège Malraux (Cagnes sur Mer)', value: 'Collège Malraux (Cagnes sur Mer)'},
    {label: 'Collège International (Sophia Antipolis)', value: 'Collège International (Sophia Antipolis)'},
    {label: 'Collège Notre-Dame de la Tramontane (Antibes)', value: 'Collège Notre-Dame de la Tramontane (Antibes)'},
    {label: 'Collège Saint Barthélemy (Nice)', value: 'Collège Saint Barthélemy (Nice)'},
    {label: 'Collège Mont Saint Jean (Antibes)', value: 'Collège Mont Saint Jean (Antibes)'},
    {label: 'Collège Nazareth (Nice)', value: 'Collège Nazareth (Nice)'},
    {label: 'Collège Blanche de Castille (Nice)', value: 'Collège Blanche de Castille (Nice)'},
    {label: 'Collège Baous (Saint Jeannet)', value: 'Collège Baous (Saint Jeannet)'},
    {label: 'Collège Niki de Saint Phalle (Valbonne)', value: 'Collège Niki de Saint Phalle (Valbonne)'},
    {label: 'Collège Fénelon (Grasse)', value: 'Collège Fénelon (Grasse)'},
    {label: 'Collège Sasserno (Nice)', value: 'Collège Sasserno (Nice)'},
    {label: 'Collège Sainte-Marie (Cannes)', value: 'Collège Sainte-Marie (Cannes)'},
    {label: 'Collège Albert Camus (Mandelieu)', value: 'Collège Albert Camus (Mandelieu)'},
    {label: 'Collège Or Torah (Nice)', value: 'Collège Or Torah (Nice)'},
    {label: 'Collège Saint Philippe Néri (Antibes)', value: 'Collège Saint Philippe Néri (Antibes)'},
    {label: 'Collège Kerem Menahem (Nice)', value: 'Collège Kerem Menahem (Nice)'},
    {label: 'Collège Colombier Sainte Thérèse (Nice)', value: 'Collège Colombier Sainte Thérèse (Nice)'}
  ]);

  const [items2, setItems2] = useState([
    {label: '4e', value: '4e'},
    {label: '3è', value: '3e'}
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
      else if (selectedUserType=="Parent d'élève") setType("Parent d'élève");
      else if (selectedUserType=='Enseignant') setType('Enseignant');
      else if (selectedUserType=='Professionnel') setType('Professionnel');
      else if (selectedUserType=='Entreprise') setType('Entreprise');
      setIdentificationDone(true);
    }
  };

  return(
      <View style={styles.container}>

      <View style={styles.upside}>
        <View style={styles.form}>
          <Text style={styles.title}>C'est ton destin</Text>

          <View style={styles.cut}/>

          { (identificationDone == false) &&
          <>
          <Text style={styles.subtitle}>Créer un nouveau compte</Text><Text style={styles.specification}>Vous êtes un(e)...</Text>
            <View>
              <RadioForm
              buttonColor={'#ffaf7a'}
              selectedButtonColor={'#ffaf7a'}
              style={styles.radioform}
              labelHorizontal='true'
                labelStyle={styles.radioformLabel}
                radio_props={PROP}
                initial={-1}
                onPress={(value) => {setSelectedUserType(value)}}
              />
              <Button
              title="Continuer >"
              color="#ffaf7a"
              onPress={() => ContinueSubscription()} />
              <View style={styles.login}>
                <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
                <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
                  Connectez-vous!
                </Text>
              </View>
            </View>
          </>
          }
    { (identificationDone == true) &&
    <KeyboardAvoidingView behavior="padding">
      <Text style={styles.subtitle}>Créer un compte {selectedUserType}</Text>
      {selectedUserType !== 'Entreprise' &&
      <>
        <TextInput style={styles.infoInput} placeholderTextColor={'#808080'} placeholder="Prénom" autoCapitalize='sentences' value={forename} onChangeText={text => setForename(text)}/>
        <TextInput style={styles.infoInput} placeholderTextColor={'#808080'} placeholder="Nom de famille" autoCapitalize='sentences' value={surname} onChangeText={text => setSurname(text)}/>
      </>
      }
      <TextInput style={styles.infoInput} placeholderTextColor={'#808080'} placeholder="Entrez une adresse e-mail" autoCapitalize='none' value={email} onChangeText={text => setEmail(text)}/>
      <TextInput style={styles.infoInput} placeholderTextColor={'#808080'} placeholder="Entrez un mot de passe" secureTextEntry autoCapitalize='none' value={pwd} onChangeText={text => setPwd(text)}/>
      <TextInput style={styles.infoInput} placeholderTextColor={'#808080'} placeholder="Confirmez votre mot de passe" secureTextEntry autoCapitalize='none' value={checkPwd} onChangeText={text => setCheckPwd(text)}/>

      { selectedUserType == 'Elève' && 
      <>
      <View style={styles.cutOption}/>
      <DropDownPicker
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.login2}>
        <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
        <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
          Connectez-vous!
        </Text>
      </View>
      </>
      }
      { selectedUserType == "Parent d'élève" &&
      <>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.login2}>
        <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
        <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
          Connectez-vous!
        </Text>
      </View>
      </>
      }
      { selectedUserType == 'Enseignant' && 
      <>
      <View style={styles.cutOption}/>
      <DropDownPicker
        style={styles.dropDownOption}
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
        style={styles.infoInputOptionTeacher}
        placeholderTextColor={'#808080'}
        placeholder="Chef d'établissement"
        value={option2} 
        onChangeText={text => setOption2(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.login2}>
        <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
        <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
          Connectez-vous!
        </Text>
      </View>
      </>
      }
      { selectedUserType == 'Professionnel' &&
      <>
      <View style={styles.cutOption}/>
      <DropDownPicker
        style={styles.dropDownOption}
        open={open}
        value={option2}
        items={items3}
        setOpen={setOpen}
        setValue={setOption2}
        setItems={setItems3}
        placeholder="Secteur d'activité"
        placeholderStyle={{ color: 'darkgrey' }} 
      />
      <TextInput
        style={styles.infoInputOptionCompany}
        placeholderTextColor={'#808080'}
        placeholder="Nom d'entreprise" 
        value={option1} 
        onChangeText={text => setOption1(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.login2}>
        <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
        <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
          Connectez-vous!
        </Text>
      </View>
      </>
      }
      { selectedUserType == 'Entreprise' && 
      <>
      <View style={styles.cutOption}/>
      <DropDownPicker
        style={styles.dropDownOption}
        open={open}
        value={option1}
        items={items3}
        setOpen={setOpen}
        setValue={setOption1}
        setItems={setItems3}
        placeholder="Secteur d'activité"
        placeholderStyle={{ color: 'darkgrey' }} 
      />
      <TextInput
        style={styles.infoInputOptionCompany}
        placeholderTextColor={'#808080'}
        placeholder="Nom d'entreprise" 
        value={forename} 
        onChangeText={text => setForename(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.averageText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.login2}>
        <Text style={styles.averageText}>Vous avez déjà un compte?</Text>
        <Text style={styles.hyperlinkText} onPress={() => navigation.navigate('Login')}>
          Connectez-vous!
        </Text>
      </View>
      </>
      }
      </KeyboardAvoidingView>
    }
        </View>
      </View> 
    </View>
  );
} 