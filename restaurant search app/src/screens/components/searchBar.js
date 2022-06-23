import React from 'react'
import {TextInput,View,StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"


export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgoundStyle}>  
    <Feather name="search" style={styles.icon}/>
        <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        value={term} 
        onChangeText={onTermChange} 
        onEndEditing={onTermSubmit}
        style={styles.input}
         placeholder='Search'
         />
    </View>
  )
}

const styles = StyleSheet.create({
    backgoundStyle:{
      marginBottom:10,
        marginTop:15,
        backgroundColor:"lightgray",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row"
    } ,
    input:{
         fontSize:18,
        flex:1
    },
    icon:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15
    }
})