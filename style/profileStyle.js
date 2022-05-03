import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  header:{
      alignItems: 'stretch',
      bottom: 20,
    },

    upside:{
      flex:4,
      justifyContent: 'center',
      alignItems: 'center'
    },

  downside:{
      flex:1,
      top:60, 
      backgroundColor:'#FFFAF0',
    },

    border:{
      backgroundColor: 'darkgrey', 
      flex:1,
      flexDirection:'row',
    },

    averageText:{
      fontSize: 15,
      textAlign:"center",
      margin:5
    },

    button:{
      width:300,
      borderRadius: 4,
      backgroundColor: '#ffaf7a',
      padding:5,
      margin:5
    },

    image:{
      width:'100%',
      height:100,
      resizeMode:'contain',
      margin:5
    }

});