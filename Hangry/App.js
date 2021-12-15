import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import CustomerReservation from 'C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/components/customerReservationScreen';
//import Navigator from "C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/navigation/Navigator";

import LandingScreen from './components/LandingScreen'
import RestaurantLoginScreen from './components/RestaurantLoginScreen'
import Customerside_Menu from './components/costumerside_menu';
import Waitlist from './components/waitlist';
import CustomerReservation from './components/customerReservationScreen';

import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <Navigator/>
    // // <View style={styles.container}>
    // //   <CustomerReservation/>
    // //   {/*<Text>Hangry</Text>*/}
    // //   <StatusBar style="auto" />
    // // </View>
    // <NavigationContainer initialRouteName="Home">
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
        <Stack.Screen name="Reservation" component={CustomerReservation} />
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


