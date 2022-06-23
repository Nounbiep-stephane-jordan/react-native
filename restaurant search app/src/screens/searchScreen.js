import React,{useState} from 'react'
import {Text,View,StyleSheet,ScrollView,Button} from "react-native"
import SearchBar from './components/searchBar'
import yelp from './api/yelp'
import useResults from './hooks/useResults'
import ResultList from './components/resultList'


export default function SearchScreen({ navigation }) {
 const [term,setTerm] = useState("")
  const [searchApi,results,error] =  useResults()

 

  const filterResultsByPrice = (price) =>{
    return results.filter(result =>{
      return result.price == price
    })
  }

  return (
    <> 
        <SearchBar 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
        />
         {error ? <Text>{error}</Text>:null}
         
     <ScrollView>
     <ResultList 
        results={filterResultsByPrice("$")} 
        title={"Cost Effective"}
        navigation={navigation}
        />

        <ResultList 
        results={filterResultsByPrice("$$")} 
        title={"Bit Priceir"}
        navigation={navigation}
        />

        <ResultList
        results={filterResultsByPrice("$$$")} 
        title={"Big Spender"}
        navigation={navigation}
        />
         
     </ScrollView>
    </>
  )
}

 