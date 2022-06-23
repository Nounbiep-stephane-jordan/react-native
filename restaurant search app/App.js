// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/searchScreen"
// const navigator = createStackNavigator({
// search:SearchScreen
// }, {
//  initialRouteName:"search",
//  defualtNavigationOptions:{
//    title:"BusinessSearch"
//  }
// })

// export default createAppContainer(navigator)
 
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResultToShowScreen from "./src/screens/resultScreen";
const Stack = createStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Business Search" component={SearchScreen} />
      <Stack.Screen name="details" component={ResultToShowScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

 
 
 
 
 