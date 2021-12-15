
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
const waitlist = () => {
  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Customer Wait List</Text>
        </View>
        <View style={styles.boxBorder}>
          <Text style={styles.waitlist}>Name                                 Time </Text>
          <Text>1. John Doe                                   10:30 am </Text>
          <Text>2. Jason Losh                                 11:30 am </Text>
          <Text>3. Sanjaya KC                                 12:00 pm </Text>
          <Text>4. Lucky Bhai                                 02:00 pm </Text>
          <Text>5. Mr. Monchite                               03:30 pm </Text>
        </View>
      </View>

    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  header: {
    top: -200,
    left: -90,
    backgroundColor: 'red',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4
  },
  main: {
    flex: 1,
    margin: 10
  },  
  header1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 15
  },
  boxBorder: {
    borderColor: 'white', 
    borderWidth: 2, 
    padding: 10
  },
  waitlist: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 4,
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10
  },
  menuIcon: {
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
    //alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default waitlist
