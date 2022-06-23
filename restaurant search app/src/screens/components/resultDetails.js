import React from 'react'
import {View,Image,Text,StyleSheet} from "react-native"
export default function ResultDetails({result}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        height:120,
        width:250,
        borderRadius:4,
        marginBottom:5
    } ,
    name:{
        fontWeight:"bold"
    }
})
