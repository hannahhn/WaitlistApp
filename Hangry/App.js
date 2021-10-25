import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Customerside_Menu from './components/costumerside_menu';

export default function App() {
  return (

    <View style={styles.container}>
     <Customerside_Menu />
      {/* <Text>Hangry</Text> */}
      <StatusBar style="auto" />
    </View>
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
