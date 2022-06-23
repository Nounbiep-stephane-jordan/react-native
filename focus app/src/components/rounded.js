import React from "react";
import { Text,TouchableOpacity,StyleSheet} from "react-native";
import { colors } from "../utils/colors"; 
export const RoundedButton = ({
    style = {},
    textStyle={} ,
    size=125,
    val,
    addSubject,
    setisStarted,
    clickPause,
    clickStart,
    ...props
}) => {

    return (
        <TouchableOpacity
         style={[styles(size).radius,style]}
         onPress ={() => {
         
             if (addSubject) {
            console.log("here in add")
            addSubject(val)
             } 
             if (clickStart) {
            console.log("here in start")
                setisStarted(true)
             }

             if (clickPause) {
            console.log("here in pause")
                setisStarted(false)
             }
 
          
        }}>
         <Text style={[styles().text,textStyle]}>{props.title}</Text>
         </TouchableOpacity >
    )

}


const styles =(size) => StyleSheet.create({
    radius:{
        borderRadius:size/2,
        width:size,
        height:size,
        alignItems:"center",
        borderColor:"#fff",
        borderWidth:2,
        justifyContent:"center"
    } ,
    text:{
        color:colors.white,
        fontSize:20
    }
})