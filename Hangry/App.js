import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import CustomerReservation from 'C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/components/customerReservationScreen';
import Navigator from "./navigation/Navigator";

import LandingScreen from './components/LandingScreen'
import RestaurantLoginScreen from './components/RestaurantLoginScreen'
import Customerside_Menu from './components/costumerside_menu';
import Waitlist from './components/waitlist';
import CustomerReservation from './components/customerReservationScreen';
import Reservation from './components/reservation';
import Confirmation from './components/confirmation';
import Restaurant_waitlist from './components/restaurant_waitlist';
import Restaurant_reservation from './components/Restaurant_reservation';

import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    <Navigator />

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


