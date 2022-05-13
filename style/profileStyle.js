import { StyleSheet, } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eeeeee'
    },

    header:{
        alignItems: 'stretch',
        bottom: 20,
        
      },

      upside:{
        flex:4,
        justifyContent: 'center',
        
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
        marginBottom:'20%'
      }



});