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
    width:120,
    height:120,
    backgroundColor:"#FFFAF0",
    marginTop:-50,
    marginLeft:25,
    marginBottom:10,
    borderRadius: 100,
  },

  personalInfo:{
    alignItems:'flex-start',
    marginLeft:'10%',
  },

  personalInfoChange:{
    alignItems:'flex-start',
    marginTop:5,
    marginLeft:40,
    marginRight:40,
    borderWidth:1,
    borderColor:'#808080'
  },

  averageTextChange:{
    fontSize: 15,
    marginBottom:5,
    textAlign:"center",
  },

  genderField:{
    width:'100%',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#808080',
    padding:5
  },

  leftSide:{
      width:'20%'
  },

  inputPronouns:{
    width:'100%',
    marginLeft:5,
    borderLeftWidth:1,
    borderLeftColor:'#808080',
    paddingLeft:5
  },

  bioField:{
    width:'100%',
    flexDirection:'row',
    padding:5
  },

  inputBio:{
    width:'75%',
    marginLeft:5,
    borderLeftWidth:1,
    borderLeftColor:'#808080',
    paddingLeft:5
  },

  button:{
    width:'80%',
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
    width:'100%',
    height:'100%',
    borderRadius: 100,
  },

  backgroundPicture:{
    width:'100%',
    height:120,
  }

});