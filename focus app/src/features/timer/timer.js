import React,{useState} from 'react'
import {View,StyleSheet,Text,Vibration,Platform,TouchableOpacity} from "react-native"
import { colors } from '../../utils/colors'
import { paddingSizes } from '../../utils/sizes'
import CountDown from '../../components/countDown'
import { RoundedButton } from '../../components/rounded'
// import {ProgressBar} from "react-native-paper"
import Timming from './timing'

const Timer = ({focusSubject,onTimerEnd,clearSubject}) => {
    const [minutes, setminutes] = useState()
  const [isStarted, setisStarted] = useState(false)
  const [progress, setprogress] = useState(1)

const changeTime = (min) => {
    console.log("in change time",min)
   setminutes(min)
   setisStarted(false)
}


const vibrate = () =>{
    if (Platform.OS === "ios") {
        const interval = setInterval(() => Vibration.vibrate(),1000)
        setTimeout(() => clearInterval(interval),10000)
    } else {
        Vibration.vibrate(10)
    }
}

 
const onEnd = () =>{
    vibrate()
    setminutes(0.1)
    setisStarted(false)
    onTimerEnd()
}
  
  
  return (
    <View style={styles.container}>
         <View style={styles.countdown}>
         <CountDown 
         minutes={minutes} 
         isPaused={!isStarted}
         onEnd={onEnd}
         />
         </View>
       <View style={{paddingTop:paddingSizes.xxl}}>
       <Text style={styles.title}>Focusing on:</Text>
       <Text style={styles.task}>{focusSubject}</Text>
       </View>
 <View>
    <View style={styles.buttonwrap}>
        <Timming changeTime ={changeTime} />
    </View>
 {/* <ProgressBar style={styles.progress} progress={progress} color='#5E84E2'  /> */}
 </View>
  <View style={styles.buttonwrap}>
 {isStarted ? 
<RoundedButton  title="pause"  clickPause={true}  setisStarted={setisStarted}/>
:<RoundedButton  title="start" clickStart={true}  setisStarted={setisStarted}  />
 }
  
 </View>
 
 <View style={styles.clear}>  
        <TouchableOpacity style={styles.radius}    onPress = {() => {clearSubject()}}>
            <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            </View>
   
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    } ,
    title:{
        color:colors.white,
        textAlign:"center"
    } ,
    task:{
        color:colors.white,
        textAlign:"center",
        fontWeight:"bold"
    } ,
    countdown:{
        alignItems:"center",
        justifyContent:"flex-end",
        flex:0.8
    } ,
    buttonwrap:{
        flex:0.9,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
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
    },
    clear:{
        paddingLeft:25
    }
})



export default Timer