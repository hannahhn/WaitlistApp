import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Customerside_Menu from './components/costumerside_menu';
import Restaurant_waitlist from './components/restaurant_waitlist';
import Restaurant_reservation from './components/Restaurant_reservation';
import Confirmation from './components/confirmation';

import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Customerside_Menu} />
        <Stack.Screen name="Restaurant_waitlist" component={Restaurant_waitlist} />
        <Stack.Screen name="Restaurant_reservation" component={Restaurant_reservation} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
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
