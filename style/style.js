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
      backgroundColor:"#FFFAF0",
    },
  
    formLogin:{
      marginTop:40,
      borderColor:"#FFFAF0",
      backgroundColor:"#FFFAF0",
      borderWidth:5,
      borderRadius: 10,
      padding:10,
    },

    formRegister:{
        marginTop:40,
        borderColor:"#FFFAF0",
        backgroundColor:"#FFFAF0",
        borderWidth:5,
        borderRadius: 10,
        padding:10,
        marginLeft: 400,
        marginRight: 400,
        flex: 1
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

    titleLogin:{
        textAlign: 'center', 
        fontSize: 30,
        marginBottom:25,
      },
  
    titleRegister:{
      textAlign: 'center', 
      fontSize: 30,
      marginBottom:-350,  
      marginTop: 25
    },

    subtitle:{
        textAlign: 'center', 
        fontSize: 20,
        marginBottom:-400,
      },
  
    infoInput:{
      width: 300,

      borderWidth: 1,
      padding:5,
      margin:5,
    },

    infoInputFirstName:{
        width: 135,

        borderWidth: 1,
        padding:5,
        margin:5,
        marginBottom: -45,
      },
    
      infoInputLastName:{
        width: 135,

        borderWidth: 1,
        padding:5,
        margin:5,
        marginLeft: 170
      },
  
    buttonLogin:{
      alignItems: 'center',
      borderRadius: 4,
      backgroundColor: '#ffaf7a',
      padding:5,
      margin:5,
    },
  
    buttonRegister:{
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#ffaf7a',
        padding:5,
        margin:5,
        marginBottom: 5,
        height:40
      },
    
    averageText:{
      fontSize: 15,
      textAlign:"center",
      margin:5
    },
  
    hyperlinkTextLogin:{
      fontSize: 15,
      textAlign:"center",
      margin:5,
      color:"#315399",
    },

    hyperlinkTextRegister:{
        fontSize: 15,
        textAlign:"center",
        margin:5,
        color:"#315399",
        marginBottom: -420
      },

     
  });