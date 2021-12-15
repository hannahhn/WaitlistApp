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
>>>>>>> 2e8a3252fc085810b570fb08b2afaf220a9bf139
