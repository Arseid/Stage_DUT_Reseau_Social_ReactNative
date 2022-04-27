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
      marginBottom:25,
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
      margin:5
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
    }
  });