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
    flex:2,
    marginTop:15,
    padding:10,
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

  otherInfo:{
    flexDirection:'row',
    marginTop:'-16%',
    marginBottom:'5%',
    marginLeft:'42%'
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
  },

  bio:{
    marginLeft:30,
    marginRight:30,
    paddingBottom:10,
    borderBottomColor:'#808080',
    borderBottomWidth:1
  },

  hobbys:{
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    paddingBottom:10,
    borderBottomColor:'#808080',
    borderBottomWidth:1
  },

  subtitle:{
    fontSize:20,
  },

  bodyText:{
    fontSize:15,
  },
  
  noSubscribe:{
    fontSize:15,
    marginBottom:10,
    textAlign:'center'
  },

  dataView:{
    borderBottomColor:'#808080',
    borderBottomWidth:1,
    padding:10
  },

  dataAlignment:{
    flexDirection:'row',
    alignItems:'center'
  },

  imageData:{
    borderRadius:100,
    width:'17%',
    height:'100%',
    left:5
  },

  textData:{
    left:25,
    top:18,
    fontSize:15,
    height:60
  },

  buttonData:{
    backgroundColor: '#ffaf7a',
    borderRadius: 4,
    padding:5,
    position:'absolute',
    left:'65%'
  }


});