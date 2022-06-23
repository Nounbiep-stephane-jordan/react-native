import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"
 import { RoundedButton } from '../../components/rounded'
const Timming = ({changeTime}) => {

  


  return (
    <>
 
 <View style={styles.timing}>
        <TouchableOpacity style={styles.radius}    onPress = {() => {changeTime(0.1)}}>
            <Text style={styles.text}>10</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.timing}>
        <TouchableOpacity style={styles.radius}    onPress = {() => {changeTime(15)}}>
            <Text style={styles.text}>15</Text>
            </TouchableOpacity>
    </View>

    <View style={styles.timing}>
        <TouchableOpacity style={styles.radius}    onPress = {() => {changeTime(20)}}>
            <Text style={styles.text}>20</Text>
            </TouchableOpacity>
    </View>
 
    </>
   
  )
}

const styles = StyleSheet.create({
    timing:{
         flex:0.8,
         marginTop:70,
         marginBottom:20,
         alignItems:"center"
    }  ,
    radius:{
        borderRadius:50,
        width:50,
        height:50,
        alignItems:"center",
        borderColor:"#fff",
        borderWidth:2,
        justifyContent:"center"
    } ,
    text:{
        color:"white",
        fontSize:20
    }
})

export default Timming