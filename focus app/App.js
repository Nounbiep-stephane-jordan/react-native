 import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Platform ,AsyncStorage} from 'react-native';
import Focus from './src/features/focus/focus';
import { colors } from './src/utils/colors';
import Timer from './src/features/timer/timer';
import { paddingSizes } from './src/utils/sizes';
import FocusHistory from './src/features/focus/focusHistory';
const STATUSES = {
  COMPLETE:1,
  CANCELL:2
}

 

export default function App() {
  const [focusObject,setFocusObject] = useState(null)
  const [focusHistory, setfocusHistory] = useState( [])
  const onClear = () =>{
    setfocusHistory([])
  } 
const addFocusHistorySubjectWithState = (subject,status) => {
  
  setfocusHistory([...focusHistory,{subject,status,key:String(focusHistory.length+1)}])

}

const saveFocusHistory = async () => {
  try {
    await AsyncStorage.setItem("focusHistory",JSON.stringify(focusHistory))
  } catch(e) {
    console.log(e)
  }
}


const loadFocusHistory =  async() => {
  try{
    const history = await AsyncStorage.getItem("focusHistory")
     if (history && JSON.parse(history).length) {
      setfocusHistory(JSON.parse(history))
     }

  } catch(e) {
    console.log(e)
  }
 
}

useEffect(() =>{
  loadFocusHistory()
},[])
 
useEffect(() =>{
  saveFocusHistory()
},[focusHistory])
 

 


  return (
    <View style={styles.container}>
      {focusObject ? 
       <Timer 
       focusSubject={focusObject} 
       onTimerEnd={() => {
        addFocusHistorySubjectWithState(focusObject,STATUSES.COMPLETE)
        setFocusObject(null)
        }}
       clearSubject={() => {
        addFocusHistorySubjectWithState(focusObject,STATUSES.CANCELL)
        setFocusObject(null)}}
       />
    :  
    <>
 
 <View style={{flex:1,alignItems:"center"}}>
 <Focus addSubject={setFocusObject}/>
    <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
 
 </View>
    </>
    }

 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.darkBlue,
    flex:1,
    paddingTop:Platform.OS === "ios" ? paddingSizes.sm : paddingSizes.sm
  }
 
});
