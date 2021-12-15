
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, TextInput } from 'react-native'
import MenuImage from '../assets/menu.jpg';
const waitlist = () => {
  return (
    <React.Fragment>
      <View style={styles.main}>
        <View>
          <Text style={styles.header1}>Customer Wait List</Text>
        </View>
        <View>
          <Text style={styles.waitlist}>Name                                                 Time </Text>
          <Text>1. John Doe                                   10:30 am </Text>
          <Text>2. Rajiv Sakuni                                 11:30 am </Text>
          <Text>3. Sanjaya KC                                 12:00 pm </Text>
          <Text>4. Lucky Bhai                                 02:00 pm </Text>
          <Text>5. Mr. Monchite                               03:30 pm </Text>
        </View>
      </View>
        <View style = {styles.div}>
        <View>
        <TextInput style={styles.input} placeholder = "Enter name" value={Text} />
        </View>
        <View>
        <TextInput  style={styles.input}  placeholder = "Enter size"  value={Text}  keyboardType="numeric"/>
        </View>
        <View>
        <Button title="Add to Waitlist" onPress={() => Alert.alert('Added to wailtlist')} color="blue" />
        </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  div:
  {
    top:40,
    backgroundColor: '#42f5e3'
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

export default waitlist
