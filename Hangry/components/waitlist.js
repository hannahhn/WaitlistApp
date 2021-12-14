
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
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
          <Text>2. Travis Bakker                              11:30 am </Text>
          <Text>3. Sanjaya KC                                 12:00 pm </Text>
          <Text>4. Lucky Bhai                                 02:00 pm </Text>
          <Text>5. Mr. Monchite                               03:30 pm </Text>
          <Text>6. Fadiah Qudah                               06:00 pm </Text>
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
