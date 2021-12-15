<<<<<<< HEAD

import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
const restaurant_waitlist = () => {
  return (
    <React.Fragment>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Customer Wait List</Text>
        </View>
        <View>
          <Text style={styles.waitlist}>Name                                                 Size </Text>
          <Text>1. John Doe                                             3 </Text>
          <Text>2. Chris Cross                                                     2 </Text>
          <Text>3. Tu Yung                                                           1 </Text>
          <Text>4. Steph Bro                                                        6 </Text>
          <Text>5. Alex Ha                                                            4 </Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <Button title="Delete" onPress={() => Alert.alert('Edit Reservation')} style = {styles.edit}/>
        <Button title="Submit" onPress={() => navigation.navigate('Confirmation')} color="white" />
        {/* <Button title="Reservation" onPress={() => Alert.alert('Reservation pressed')} color="blue" /> */}
      </View>

    </React.Fragment>

  )
}

const styles = StyleSheet.create({


  header: {
    position: 'absolute',
    top: -200,
    left: -90,
    backgroundColor: 'red',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4

  },
  main:
  {
    backgroundColor: '#d1c3c0'

  },

  header1: {
    position: 'absolute',
    top: -300,
    left: 35,
    backgroundColor: 'green',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4

  },
  waitlist: {
    backgroundColor: 'orange',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4
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

export default restaurant_waitlist
=======

import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, ImageBackground } from 'react-native'
const restaurant_waitlist = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Wait List</Text>
        </View>
        <View style={styles.boxBorder}>
          <Text style={styles.waitlist}>Name                                                 Size </Text>
          <Text>1. Hannah Nguyen                                              3 </Text>
          <Text>2. Chris Cross                                                     2 </Text>
          <Text>3. Tu Yung                                                           1 </Text>
          <Text>4. Steph Bro                                                        6 </Text>
          <Text>5. Alex Ha                                                            4 </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.editButtons}>
          <Button title="Delete" onPress={() => Alert.alert('Edit Reservation')} color='white' style = {styles.edit}/>
        </View>
        <View style={styles.editButtons}>
          <Button title="Submit" onPress={() => navigation.navigate('Confirmation')} color='white' style={styles.edit} />
        </View>
      </View>

      <View style={styles.bottomView}>
        <Button title="Reservations" onPress={() => navigation.navigate('Restaurant_reservation')} color="white" />
      </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
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
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginBottom: 200
  },
  editButtons: {
    height: 50,
    width: 150,
    backgroundColor: '#9e5c5c',
    padding: 5,
    borderRadius: 15,
  },
  bottomView: {
    width: '100%',
    height: 75,
    backgroundColor: '#9e5c5c',
    justifyContent: 'space-around',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  edit: {
    fontWeight: 'bold',
  }
});

export default restaurant_waitlist
>>>>>>> 3d682993ca05a722b0ce24c1148ffd970b715578
