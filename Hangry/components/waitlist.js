import React, { useState } from 'react'
import { View, Text, ImageBackground, FlatList, ScrollView } from 'react-native'
import { Button, Alert, StyleSheet, TextInput } from 'react-native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const waitlist = () => {

  const [customerWaitlist, setCustomerWaitlist] = useState([
    { name: 'John Doe', size: '3', key: '1' },
    { name: 'Chris Cross', size: '2', key: '2' },
    { name: 'Tu Yung', size: '1', key: '3' },
    { name: 'Steph Bro', size: '6', key: '4' },
    { name: 'Alex Ha', size: '4', key: '5' },
  ]);

  const addToWaitlist = (customerName, customerSize) => {
    setCustomerWaitlist((previousCustomerWaitlist) => {
      return [
        { name: customerName, size: customerSize, key: Math.random().toString() },
        ...previousCustomerWaitlist
      ]
    })
  };

  const [customerName, setCustomerName] = useState('');
  const [customerSize, setCustomerSize] = useState('');
 
  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Customer Wait List</Text>
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

      <View style={styles.inputBoxContainer}>
        <TextInput onChangeText = {(name) => setCustomerName(name)} placeholder="Name" placeholderTextColor='gray' style={styles.textInputBox}></TextInput>
        <TextInput onChangeText = {(size) => setCustomerSize(size)} placeholder="Size" placeholderTextColor='gray' style={styles.textInputBox}></TextInput>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.editButtons}>
          <Button title="Add to Waitlist" onPress={() => addToWaitlist(customerName, customerSize)} color='white' style = {styles.edit}/>
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
    margin: 10,
    marginBottom: 10
  },  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  inputBoxContainer: {
    marginTop: 200,
    marginBottom: 20
  },  
  textInputBox: {
    padding: 15,
    width: "90%",
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#FBFBFF",
    borderRadius: 5,
    color: 'black'
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
    width: 180,
    backgroundColor: '#9e5c5c',
    padding: 5,
    borderRadius: 15,
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
