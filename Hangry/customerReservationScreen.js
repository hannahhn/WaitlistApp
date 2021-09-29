import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.paragraph}>
      <Text style={styles.paragraph}>
        Make a Reservation
      </Text>
      <Button
        title="Pick a Date"
        color = 'red'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Choose Party Size"
        color = 'purple'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Pick a time"
        color = 'green'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button
        title="Submit Reservation"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 5,
  // },
  paragraph: {
    flex :1,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});