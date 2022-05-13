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
      marginTop:50,
      marginHorizontal:40,
      borderColor:'#d2b48c',
      borderWidth:1,
      height:80
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
      marginBottom:8,
      fontFamily:'serif',
      marginRight:30,
      top:'22%'
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
      bottom:80
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