import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomerReservation from 'C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/components/customerReservationScreen';
import Navigator from "C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/navigation/Navigator";

export default function App() {
  return (
    <Navigator/>
    // <View style={styles.container}>
    //   <CustomerReservation/>
    //   {/*<Text>Hangry</Text>*/}
    //   <StatusBar style="auto" />
    // </View>
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


