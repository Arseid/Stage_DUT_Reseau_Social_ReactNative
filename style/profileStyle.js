import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  averageText:{
    fontSize: 15,
    marginBottom:5,
    textAlign:"center",
  },

  focusProfile:{
    flex:4,
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderRadius: 10,
  },

  detailsProfile:{
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderRadius: 10,
  },

  viewPP:{
    borderRadius: 100,
    marginTop:-50,
    marginLeft:25,
    marginBottom:10,
  },

  personalInfo:{
    alignItems:'flex-start',
    marginLeft:40,
  },

  otherInfo:{
    flexDirection:'row',
    marginTop:-65,
    marginBottom:25,
    marginLeft:175
  },

  button:{
    width:300,
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    margin:5
  },

  buttonText:{
    fontSize: 15,
    textAlign:"center",
  },

  image:{
    width:120,
    height:120,
    borderRadius: 100,
  },

  backgroundPicture:{
    width:'100%',
    height:120,
  }

});