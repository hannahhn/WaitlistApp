import React, { useState, useEffect, useContext } from "react";
import Landing from "../components/LandingScreen";
import CostumerMenu from "../components/costumerside_menu";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();

//Navigator to switch screens based on what the user taps
const Navigator = (props) => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Landing} />
        <Stack.Screen name="Menu" component={CostumerMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;