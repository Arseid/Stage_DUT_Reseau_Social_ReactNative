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

      info:{
        textAlign: 'left', 
        fontSize: 12,
        marginBottom:-140,
        marginTop: -80
      },
  
    infoInputLogin:{
      width: 300,
      borderWidth: 1,
      padding:5,
      margin:5,
    },

    infoInputRegister:{
      width: 300,
      borderWidth: 1,
      padding:5,
      margin:5,
      marginLeft: 45,
      borderRadius: 7
    },

    dropDownLeft:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      bottom: 10,
      marginLeft: 35,
      margin: 5,
      borderRadius: 7
    },

    dropDown:{
      height: 20,
      width: 320,
      backgroundColor: "#FFFAF0",
      marginBottom:25,
      bottom: 10,
      marginLeft: 35,
      margin: 5,
      borderRadius: 7
    },

    dropDownRight:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      bottom: 10,
      marginLeft: 200,
      margin: 5,
      borderRadius: 7,
      bottom: 40
    },

    infoInputLeft:{
      width: 150,
      height:50,
      marginLeft: 45,
      borderWidth: 1,
      padding:5,
      margin:5,
      marginBottom: -15,
      borderRadius: 7
    },

    infoInputFirstName:{
        width: 135,
        marginLeft: 45,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginBottom: -45,
        borderRadius: 7
      },

      infoInputBonjour:{
        width: 135,
        marginLeft: 45,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginBottom: -45,
        borderRadius: 7,
        top: 200
      },
    
      infoInputLastName:{
        width: 135,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginLeft: 210,
        borderRadius: 7
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
        marginTop: 80,
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

    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
        },

     
  });