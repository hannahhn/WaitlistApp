
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, ImageBackground } from 'react-native'
import MenuImage from '../assets/menu.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const costumerside_menu = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <Text style={styles.text}>Menu</Text>
      <Image source={MenuImage} style={styles.menuIcon}/>
      <View style={styles.bottomView}>
        <Button title="Waitlist" onPress={() => navigation.navigate('Waitlist')} color="white" />
        <Button title="Reservation" onPress={() => navigation.navigate('Reservation')} color="white" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  header: {
    backgroundColor: 'red',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    top: 20
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20
  },
  menuIcon: {
    top: 30,
    //left: 30,
    height: 400,
    width: 350,
    alignSelf: 'center'
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    height: 75,
    display: 'flex',
    backgroundColor: '#9e5c5c',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick,
    paddingTop: 10
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default costumerside_menu
