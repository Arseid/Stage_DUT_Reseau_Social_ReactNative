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

    header:{
      borderColor:"#FFFAF0",
      backgroundColor:"#FFFAF0",
      alignItems: 'stretch',
      bottom: 20,
    },

    formRegister:{
        borderColor:"#FFFAF0",
        backgroundColor:"#FFFAF0",
        borderWidth:5,
        borderRadius: 10,
        padding:10,
        marginLeft: 400,
        marginRight: 400,
        flex: 1,
        width: 400,
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
      marginTop: 25,
      flex:2
    },

    subtitle:{
        textAlign: 'center', 
        fontSize: 20,
        flex:2,
        bottom: 90
      },

      subtitle2:{
        textAlign: 'center', 
        fontSize: 20,
        bottom: 90
      },

      info:{
        textAlign: 'left', 
        fontSize: 12,
        marginTop: -80,
        bottom: 30,
        flex: 1,
        marginLeft:10,
      },

      infoProfile:{
        textAlign: 'left', 
        fontSize: 12,
       
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
      borderRadius: 7,
      top: 60,
      backgroundColor: 'white'
    },

    dropDownLeft:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      bottom: 385,
      marginLeft: 35,
      margin: 5,
      borderRadius: 7,
      bottom: 325,
      backgroundColor: 'white'
    },

    dropDown:{
      height: 20,
      width: 320,
      backgroundColor: "#FFFAF0",
      marginBottom:25,
      bottom: 325,
      marginLeft: 35,
      margin: 5,
      borderRadius: 7,
      backgroundColor: 'white'
    },

    dropDownRight:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      marginLeft: 200,
      margin: 5,
      borderRadius: 7,
      bottom: 355,
      backgroundColor: 'white'
    },

    dropDownRight2:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      marginLeft: 200,
      margin: 5,
      borderRadius: 7,
      bottom: 365,
      left:5,
      backgroundColor: 'white'
    },

    infoInputLeft:{
      width: 150,
      height:50,
      marginLeft: 45,
      borderWidth: 1,
      padding:5,
      margin:5,
      marginBottom: -15,
      borderRadius: 7,
      bottom: 325,
      right: 5,
      backgroundColor: 'white'
    },

    infoInputRight:{
      width: 150,
      height:50,
      marginLeft: 45,
      borderWidth: 1,
      padding:5,
      margin:5,
      marginBottom: -15,
      borderRadius: 7,
      bottom: 325,
      left:160,
      bottom: 355,
      backgroundColor: 'white'
    },

    infoInputFirstName:{
        width: 135,
        marginLeft: 45,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginBottom: -45,
        borderRadius: 7,
        top: 60,
        backgroundColor: 'white'
      },
    
      infoInputLastName:{
        width: 135,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginLeft: 210,
        borderRadius: 7,
        top: 60,
        backgroundColor: 'white'
      },

      infoInputFirstNameParent:{
        width: 135,
        marginLeft: 45,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginBottom: -45,
        borderRadius: 7,
        top: 60,
        backgroundColor: 'white'
      },
    
      infoInputLastNameParent:{
        width: 135,
        borderWidth: 1,
        padding:5,
        margin:5,
        marginLeft: 210,
        borderRadius: 7,
        top: 60,
        backgroundColor: 'white'
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
        top: 70,
        height:40
      },
    
    averageText:{
      fontSize: 15,
      textAlign:"center",
      margin:5,
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
        marginTop:50,
        bottom: 20
      },

    subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
        },

     
  });