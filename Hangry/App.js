import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LandingScreen from './components/LandingScreen'
import RestaurantLoginScreen from './components/RestaurantLoginScreen'
import Customerside_Menu from './components/costumerside_menu';
import Waitlist from './components/waitlist';
import CustomerReservation from './components/customerReservationScreen';
import Reservation from './components/reservation';
import Confirmation from './components/confirmation';
import Restaurant_waitlist from './components/restaurant_waitlist';
import Restaurant_reservation from './components/Restaurant_reservation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function Logo() {
  return (
    <Image
      style={{ width: 100, height: 40, bottom: 5 }}
      source={require('./assets/HangryLogo.png')}
    />
  );
}

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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f2afa3'
          },
          headerTitle: (props) => <Logo {...props} />
        }}
      >
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
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Restaurant_waitlist" component={Restaurant_waitlist} />
        <Stack.Screen name="Restaurant_reservation" component={Restaurant_reservation} />
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


