<<<<<<< HEAD

import React, {useState} from 'react'
import { SafeAreaView ,View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';

const reservation = ({ navigation }) => {

  //   const [date, setDate] = useState(new Date());
  //   const [mode, setMode] = useState('date');
  //   const [show, setShow] = useState(false);

  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setShow(Platform.OS === 'ios');
  //     setDate(currentDate);
  //   };

  //   const showMode = (currentMode) => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  //   const showDatepicker = () => {
  //     showMode('date');
  //   };

  //   const showTimepicker = () => {
  //     showMode('time');
  //   };

  return (
    <React.Fragment>
      {/* <View>
        <Text style={styles.header}>Restaurant User</Text>
      </View>
      <View style={styles.Datepicker}>
        <Button onPress={showDatepicker} title="Set Date:" />
      </View>
      <View style={styles.Timepicker}>
        <Button onPress={showTimepicker} title="Set Time:" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )} */
      <View style={styles.main}>
          <View>
            <Text style={styles.header}>Customer Wait List</Text>
          </View>
          <View>
            <Text style={styles.waitlist}>Name                   Size              Date                Time </Text>
            <Text style = {styles.name}>1. John Doe            2           12/1              10:30 am </Text>
            <Text style = {styles.name}>2. Jason Losh        4           12/4              11:30 am </Text>
            <Text style = {styles.name}>3. Sanjaya KC        5           12/3              12:00 pm </Text>
            <Text style = {styles.name}>4. Lucky Bhai         1           1/1                02:00 pm </Text>
            <Text style = {styles.name}>5. Mr. Monchite     3           1/2                03:30 pm </Text>
            
          </View>
     </View>


      }

      <View style={styles.bottomView}>
        <Button title="Edit" onPress={() => Alert.alert('Edit Reservation')} style = {styles.edit}/>
        <Button title="Submit" onPress={() => navigation.navigate('Confirmation')} color="white" />
        <Button title="Waitlist" onPress={() => navigation.navigate('Restaurant_waitlist')} color="black" />
        <Button title="Menu" onPress={() => Alert.alert('Menu pressed')} color="purple" />
        {/* <Button title="Reservation" onPress={() => Alert.alert('Reservation pressed')} color="blue" /> */}
      </View>

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
    // bottom: 20
  },

  edit:{
    top: 80,

  },
  waitlist: {
    top: 20
  },

  name: {
    top: 20,
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
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#A8E9CA',
    zIndex : -1
  },
  Datepicker: {
    top: 200,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Timepicker: {
    top: 300,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  }
});

export default reservation
=======

import React, {useState} from 'react'
import { SafeAreaView ,View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, ImageBackground } from 'react-native'
import MenuImage from '../assets/menu.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';

const reservation = ({ navigation }) => {

  //   const [date, setDate] = useState(new Date());
  //   const [mode, setMode] = useState('date');
  //   const [show, setShow] = useState(false);

  //   const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setShow(Platform.OS === 'ios');
  //     setDate(currentDate);
  //   };

  //   const showMode = (currentMode) => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  //   const showDatepicker = () => {
  //     showMode('date');
  //   };

  //   const showTimepicker = () => {
  //     showMode('time');
  //   };

  return (   
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
          <View>
            <Text style={styles.header}>Reservations</Text>
          </View>
          <View style={styles.boxBorder}>
            <Text style={styles.waitlist}>Name                   Size              Date                Time </Text>
            <Text style = {styles.name}>1. John Doe            2           12/1              10:30 am </Text>
            <Text style = {styles.name}>2. Jason Losh        4           12/4              11:30 am </Text>
            <Text style = {styles.name}>3. Sanjaya KC        5           12/3              12:00 pm </Text>
            <Text style = {styles.name}>4. Lucky Bhai         1           1/1                02:00 pm </Text>
            <Text style = {styles.name}>5. Mr. Monchite     3           1/2                03:30 pm </Text>
          </View>
     </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.editButtons}>
          <Button title="Edit" onPress={() => Alert.alert('Edit Reservation')} color="white"/>
        </View>
        <View style={styles.editButtons}>
          <Button title="Submit" onPress={() => navigation.navigate('Confirmation')} color="white" />
        </View>
      </View>

      <View style={styles.bottomView}>
        <Button title="Waitlist" onPress={() => navigation.navigate('Restaurant_waitlist')} color="white" />
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
  header: {
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
  edit:{
    top: 80,
  },
  waitlist: {
    fontSize: 15,
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
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#A8E9CA',
    zIndex : -1
  },
  Datepicker: {
    top: 200,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Timepicker: {
    top: 300,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  }
});

export default reservation
>>>>>>> 3d682993ca05a722b0ce24c1148ffd970b715578
