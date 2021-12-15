
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, ImageBackground, FlatList } from 'react-native'
const restaurant_waitlist = ({ navigation }) => {

  const [customerWaitlist, setCustomerWaitlist] = useState([
    { name: 'John Doe', size: '3', key: '1' },
    { name: 'Chris Cross', size: '2', key: '2' },
    { name: 'Tu Yung', size: '1', key: '3' },
    { name: 'Steph Bro', size: '6', key: '4' },
    { name: 'Alex Ha', size: '4', key: '5' },
  ]);

  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Wait List</Text>
        </View>
        <View style={styles.boxBorder}>
        <Text style={styles.waitlist}>  Name                               Size </Text>
          <View style={styles.waitlistContainer}>
            <View style={{ height: 500 }}>
              <FlatList 
                data={customerWaitlist}
                contentContainerStyle={{ flexDirection: 'column-reverse' }}
                renderItem={({ item }) => (
                  <Text>{item.name}</Text>
                )}
              />
            </View>
            <View style={{ height: 500, marginRight: 110 }}>
              <FlatList 
                data={customerWaitlist}
                contentContainerStyle={{ flexDirection: 'column-reverse' }}
                renderItem={({ item }) => (
                  <Text>{item.size}</Text>
                )}
              />
            </View>
          </View>
        </View> 
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.editButtons}>
          <Button title="Edit" onPress={() => Alert.alert('Edit Reservation')} color='white' style = {styles.edit}/>
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
  waitlistContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between'
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
