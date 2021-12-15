
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const costumerside_menu = ({ navigation }) => {
  return (
    <React.Fragment>
      <View>
        <Text style={styles.header}>Customer Side</Text>
      </View>
      <View>
        <Image source={MenuImage} style={styles.menuIcon} />
      </View>
      {/* <View style={styles.bottomView}>
        <Button title="Waitlist" onPress={() => navigation.navigate('Waitlist')} color="green" />
        <Button title="Menu" onPress={() => Alert.alert('Menu pressed')} color="red" />
        <Button title="Reservation" onPress={() => navigation.navigate('Reservation')} color="blue" />
      </View> */}

    </React.Fragment>

  )
}

const styles = StyleSheet.create({

  header: {
    backgroundColor: 'red',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    top: 20

  },

  menuIcon: {

    top: 50,
    left: 30,
    height: 400,
    width: 350


  },

  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 150,
    display: 'flex',
    backgroundColor: '#EE5407',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default costumerside_menu
