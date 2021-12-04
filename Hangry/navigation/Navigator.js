import React, { useState, useEffect, useContext } from "react";
// import Login from "../components/Login";
// import SignUp from "../components/SignUp";
// import Landing from "../components/Landing";
import BotTabNavigator from "C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/navigation/BotTabNavigator";
//import Navigator from "C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/navigation/Navigator";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import CreateGroup from "../components/CreateGroup";
// import GroupTask from "../components/GroupTask";


const Stack = createStackNavigator();

//Navigator to switch screens based on what the user taps
const Navigator = (props) => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}
        <Stack.Screen name="Home" component={BotTabNavigator} />
        {/* <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="GroupTask" component={GroupTask} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;