
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
const Confirmation = () => {
  return (
    <React.Fragment>
      <View style={styles.main}>
        <View>
          <Text style={styles.texts}>Reservation has been confirmed.</Text>
        </View>
      </View>
    </React.Fragment>

  )
}

const styles = StyleSheet.create({


  texts: {
    fontSize : 50,
    color: 'green',
    textAlign: 'center',
    top: 300
  },
});

export default Confirmation
