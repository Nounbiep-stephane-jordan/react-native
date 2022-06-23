import React,{useState,useEffect,useRef} from 'react'
import {Text,View,StyleSheet} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { fontSizes, paddingSizes } from '../utils/sizes'
const  CountDown = ({
    minutes=0.1,
    isPaused,
    onEnd,
    ...props
}) => {
 
    const interval = useRef(null)
 const countdowm = () => {
    setmillis(time => {
        if (time === 0) {
            clearInterval(interval.current)
            onEnd()
            return time;
        }

        const timeleft = time -1000;

        return timeleft
     })
 }

useEffect(() => {
  setmillis(minutesToMills(minutes))
},[minutes])


 useEffect(() =>{
    if (isPaused) {
        if (interval.current) clearInterval(interval.current)
        return ;
    }
   interval.current = setInterval(countdowm,1000)
return () => clearInterval(interval.current)
 },[isPaused])

    const minutesToMills = (min) => min*1000*60
    const [millis, setmillis] = useState(minutesToMills(minutes))
    const minute = Math.floor(millis/1000/60)%60;
    const seconds = Math.floor(millis/1000)%60;;
     
    const formatTime = (time) => time < 10 ? `0${time}` : time 

   return (
    <Text style={Styles.text}> {formatTime(minute)} : {formatTime(seconds)}</Text>
  )
}

const Styles = StyleSheet.create({
text:{
   fontSize:fontSizes.xxxl,
   fontWeight:"bold",
   color:Colors.white ,
   padding:paddingSizes.lg,
   backgroundColor:"rgba(94,132,226,0.3)"
}
})

export default  CountDown