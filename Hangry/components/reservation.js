
import React, {useState} from 'react'
import { SafeAreaView ,View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image } from 'react-native'
import MenuImage from '../assets/menu.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTimePicker from '@react-native-community/datetimepicker';

const reservation = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

  return (
    <React.Fragment>
      <View>
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
      )}
      <View style={styles.bottomView}>
        <Button title="Submit" onPress={() => navigation.navigate('Confirmation')} color="white" />
        <Button title="Waitlist" onPress={() => navigation.navigate('Waitlist')} color="black" />
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
    height: 100,
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
