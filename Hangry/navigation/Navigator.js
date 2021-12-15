import React, { useState, useEffect, useContext } from "react";
import Landing from "../components/LandingScreen";
import CostumerMenu from "../components/costumerside_menu";
import RestaurantLoginScreen from '../components/RestaurantLoginScreen'
import Waitlist from '../components/waitlist';
import Reservation from '../components/customerReservationScreen';
import Confirmation from '../components/confirmation';
import Restaurant_waitlist from '../components/restaurant_waitlist';
import Restaurant_reservation from '../components/Restaurant_reservation';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();

//Navigator to switch screens based on what the user taps
const Navigator = (props) => {
  

  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={Landing} />
    //     <Stack.Screen name="Menu" component={CostumerMenu} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer initialRouteName="Landing Screen">
    <Stack.Navigator>
      <Stack.Screen name="Landing Screen" 
                    component={Landing} 
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
      <Stack.Screen name="CostumerMenu" component={CostumerMenu} />
      <Stack.Screen name="Waitlist" component={Waitlist} />
      <Stack.Screen name="Reservation" component={Reservation} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Restaurant_waitlist" component={Restaurant_waitlist} />
      <Stack.Screen name="Restaurant_reservation" component={Restaurant_reservation} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigator;