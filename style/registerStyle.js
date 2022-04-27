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
      borderLeftWidth:30,
      borderRightWidth:30,
      borderTopWidth:10,
      borderBottomWidth:15,
      borderRadius: 10,
      padding:10,
    },

    login:{
      marginTop:15,
      flexDirection: 'row',
    },
  
    login2:{
      marginLeft:-5,
      flexDirection: 'row',
    },

    title:{
      textAlign: 'center', 
      fontSize: 30,
      marginBottom:25,
    },

    cut:{
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      bottom: 10
    },

    cutOption:{
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      marginVertical:10
    },

    subtitle:{
      textAlign: 'center', 
      fontSize: 20,
      marginBottom:10,
    },

    specification:{
      fontSize: 15,
      textAlign:"left",
      marginBottom:15
    },

    radioform:{
      marginBottom:10
    },

    radioformLabel:{
      marginLeft:10,
      marginVertical:5,
    },

    averageText:{
      fontSize: 15,
      textAlign:"center",
      margin:5
    },

    infoInput:{
      width: 300,
      height: 40, 
      borderWidth: 1,
      padding:5,
      margin:5
    },

    option:{
      flexDirection:'row'
    },
  
    button:{
      width:300,
      borderRadius: 4,
      backgroundColor: '#ffaf7a',
      padding:5,
      margin:5
    },
  
    hyperlinkText:{
      fontSize: 15,
      textAlign:"center",
      margin:5,
      color:"#315399",
    },

    dropDownLeft:{
      height: 20,
      width: 150,
      marginTop:10,
      backgroundColor: "#FFFAF0",
      borderRadius: 7,
      backgroundColor: 'white'
    },

    dropDownRight:{
      height: 20,
      width: 150,
      backgroundColor: "#FFFAF0",
      bottom:20,
      marginBottom:20,
      marginLeft: 160,
      borderRadius: 7,
      backgroundColor: 'white'
    },

    infoInputOptionTeacher:{
      padding:5,  
      width:300,
      borderWidth: 1,
      height: 40, 
      marginTop: 10,
      marginLeft:5,
      marginBottom:5
    },

    infoInputOptionCompany:{
      padding:5,  
      width:300,
      borderWidth: 1,
      height: 40, 
      marginTop: 10,
      marginLeft:5,
      marginBottom:5
    },

    dropDownOption:{
      height: 20,
      width: 310,
      marginTop:5,
      marginBottom:28,
      backgroundColor: "#FFFAF0",
      borderRadius: 7,
      backgroundColor: 'white'
    },

  });