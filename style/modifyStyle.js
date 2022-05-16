import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderRadius: 10,
  },

  detailsProfile:{
    marginTop:15,
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
    marginTop:'5%',
    marginLeft:'10%',
    marginRight:'10%',
    borderWidth:1,
    borderColor:'#808080'
  },

  hobbys:{
    alignItems:'flex-start',
    marginTop:'5%',
    marginLeft:'10%',
    marginRight:'10%',
  },

  averageTextChange:{
    fontSize: 15,
    marginBottom:5,
    textAlign:"center",
    alignContent:'center'
  },

  genderField:{
    width:'100%',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#808080',
    padding:5
  },

  leftSide:{
    width:'30%'
  },

  inputPronouns:{
    width:'68%',
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
    width:'68%',
    marginLeft:5,
    borderLeftWidth:1,
    borderLeftColor:'#808080',
    paddingLeft:5
  },

  changeView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:'5%',
    marginBottom:10,
    marginLeft:'12%'
  },

  button:{
    width:'40%',
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
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },

  subtitle:{
    fontSize:20,
  },

});

export {styles};