import React from 'react'
import {Text,View,StyleSheet, FlatList,TouchableOpacity} from "react-native"
 import ResultDetails from './resultDetails'
export default function ResultList({title,results,navigation}) {
   if (!results.length) {
    return null
   }
 
    return (
    <View style={styles.container}> 
        <Text style={styles.title}>{title}</Text>
       <FlatList
       horizontal
       showsHorizontalScrollIndicator={false}
       data={results}
       keyExtractor={(result) => result.id}
       renderItem={({item}) =>{
        return   <TouchableOpacity onPress={() => navigation.navigate("details",{id:item.id})}>
            <ResultDetails result={item}/>
        </TouchableOpacity>
       }}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    } ,
    container:{
        marginBottom:10
    }
})