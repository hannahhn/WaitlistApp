import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './components/LandingScreen'
import RestaurantLoginScreen from './components/RestaurantLoginScreen'
import Customerside_Menu from './components/costumerside_menu';
import Waitlist from './components/waitlist';

import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Landing Screen">
      <Stack.Navigator>
        <Stack.Screen name="Landing Screen" 
                      component={LandingScreen} 
                      options={{
                        headerShown: false
                      }}
        />
        <Stack.Screen name="Restaurant Login Screen" 
                      component={RestaurantLoginScreen} 
                      options={{
                        headerShown: false
                      }}
        />
        <Stack.Screen name="Home" component={Customerside_Menu} />
        <Stack.Screen name="Waitlist" component={Waitlist} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
