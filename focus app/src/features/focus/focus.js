import React,{useState} from 'react'
import {TextInput, StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../../components/rounded';
import { fontSizes,paddingSizes } from "../../utils/sizes";
import { colors } from '../../utils/colors';
const  Focus = ({addSubject}) => {
  const [tempItem,setTempItem] = useState("")
  return (
  <>
     <View style={styles.conatiner}>
         <View style={styles.titleContainer}><Text style={styles.title}>What will you like to focus on</Text></View>
       <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        onSubmitEditing={
          ({nativeEvent}) => {
                setTempItem(nativeEvent.text)
          }
        }
        />
        <RoundedButton 
        title="+" 
        size={50} 
        val = {tempItem}
        addSubject={addSubject}
        />
       </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
conatiner :{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-start"
},
titleContainer:{
    padding:paddingSizes.md,
    marginTop:paddingSizes.xl,
    justifyContent:"center",
    alignItems:"center"
} ,
input:{
  padding:paddingSizes.md,
  marginRight:20,
    backgroundColor:colors.white,
    borderRadius:5,
    flex:1
},
title:{
    color:colors.white,
    fontSize:fontSizes.lg,
    fontWeight:"bold"
} ,
  inputContainer:{
    padding:paddingSizes.md,
    flexDirection:"row",
    alignItems:"center"
  }
})

export default  Focus