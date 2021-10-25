
import React from 'react'
import { View, Text } from 'react-native'
import {Button, Alert, StyleSheet, Image} from 'react-native'
import MenuImage from '../assets/menu.jpg';
const costumerside_menu = () => {
    return (
        <React.Fragment>
        <View>
        <Text style = {styles.header}>Customer Side</Text>
         </View>
         <View>
         <Image source = {MenuImage} style = {styles.menuIcon} />
         </View>  
            <View style={styles.bottomView}>
            <Button title="Waitlist" onPress={() => Alert.alert('Waitlist pressed')} color ="green" />
            <Button title="Menu" onPress={() => Alert.alert('Menu pressed')}  color ="red" />
            <Button title="Reservation" onPress={() => Alert.alert('Reservation pressed')}  color ="blue"/>
           </View>
           
            </React.Fragment>
        
    )
}

const styles = StyleSheet.create({

    header:{
        position:'absolute',
        top:-200,
        left: -90,
        backgroundColor: 'red',
        fontSize: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4
    
  
        

    },

    menuIcon:{
      height : 400,
      width : 350
      

    },

    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomView: {
      width: '100%',
      height: 150,
      display:'flex',
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

export default costumerside_menu
