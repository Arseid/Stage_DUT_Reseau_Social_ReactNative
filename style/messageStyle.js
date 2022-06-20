import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  upside:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  downside:{
    flex:1,
  },

  form:{
    marginTop:40,
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderWidth:5,
    borderRadius: 10,
    padding:10,
    marginBottom:40,
  },
  form2:{
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderWidth:5,
    borderRadius: 10,
    marginTop:'10%',
    marginHorizontal:'43%',
    borderColor:'#d2b48c',
    borderWidth:1,
    height:50,
    right:'35%'
  },

  
  form3:{
    marginTop:40,
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderWidth:5,
    borderRadius: 10,
    padding:10,
    marginBottom:40,
    width:'80%'
  },

  subscription:{
    marginTop:15,
    padding:10,
    borderWidth:5,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
  },

  title:{
    textAlign: 'center', 
    fontSize: 30,
    
    fontFamily:'serif',
    marginRight:30,
    left:'5%',
  },

  infoInput:{
    width: 300,
    height: 40, 
    borderWidth: 1,
    padding:5,
    margin:5
  },

  button:{
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    margin:5,
    marginHorizontal:105,
    left:55,
    bottom:60
  },

  buttonReload:{
    width:'80%',
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    margin:5,
    marginTop:10
  },

  buttonReload2:{
    width:'80%',
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    marginBottom:'10%'
  },

  buttonText:{
    fontSize: 15,
    textAlign:"center",
  },

  buttonO:{
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#ffaf7a',
    padding:5,
    margin:5,
    marginHorizontal:'10%',
    marginTop:'10%'
  },
  averageText:{
    fontSize: 15,
    textAlign:"center",
    margin:5
  },

  hyperlinkText:{
    fontSize: 15,
    textAlign:"center",
    margin:5,
    color:"#315399",
  },

  //Search Screen
  textSuggestion:{
    textAlign:'center',
    marginTop:10,
    fontSize:15
  },

  containerSuggestion:{
    width:'90%',
    height:'90%',
    borderColor:"#FFFAF0",
    backgroundColor:"#FFFAF0",
    borderWidth:1,
    alignSelf:'center',
    marginTop:10,
    borderRadius: 10,
    padding:10
  },


  imageList:{
    width:'21%',
    height:'100%',
    borderRadius:100
  },

  textList:{
    fontSize:15,
    height:60,
    top:5,
    left:15
  },

  buttonList:{
    backgroundColor: '#ffaf7a',
    borderRadius: 4,
    padding:5,
    position:'absolute',
    left:200,
    top:20
  },

  msg:{
    color:'grey',
    left:'25%',
    bottom:'30%',
    marginRight:80
  }

  
});