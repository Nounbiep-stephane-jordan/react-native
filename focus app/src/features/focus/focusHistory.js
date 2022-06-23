import React from 'react'
import {View,StyleSheet,FlatList,Text,SafeAreaView,TouchableOpacity} from "react-native"
import { paddingSizes,fontSizes } from '../../utils/sizes'

const FocusHistory = ({focusHistory,onClear}) => {
   
    const clearHistory = () => {
        onClear()
    }

    const HistoryItem = ({item,index}) => {
        return (
            <Text style={Styles.historyItem(item.status)}>
                {item.subject}
            </Text>
        )
    }

    return (
    <>
     <SafeAreaView style={{flex:1,alignItems:"center"}}>
 {!!focusHistory.length && 
 (<>
 <Text style={Styles.title}>Things we've focused on </Text>
 <FlatList 
style={{flex:1}}
contentContainerStyle={{flex:1,alignItems:"center"}}
data={focusHistory}
renderItem = {HistoryItem}
/>
<View style={Styles.clearContainer}>
    <TouchableOpacity style={Styles.radius}    onPress = {() => onClear()}>
            <Text style={Styles.text}>clear</Text>
            </TouchableOpacity>
    </View>
 </>
 
 
 )}
    </SafeAreaView>
    </>
  )
}


const Styles = StyleSheet.create({
    historyItem:(status) => ({
        color:status > 1 ? "red" : "green",
        fontSize:fontSizes.md
    }) , 
    title:{
        fontSize:fontSizes.lg,
        color:"white"
    }  ,
    radius:{
        borderRadius:50,
        width:80,
        height:80,
        alignItems:"center",
        borderColor:"#fff",
        borderWidth:2,
        justifyContent:"center"
    } ,
    text:{
        color:"white",
        fontSize:20
    } ,
    clearContainer:{
        alignItems:"center"
    }
})



export default FocusHistory