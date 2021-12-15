
import React, {useState} from 'react'
import { SafeAreaView ,View, Text } from 'react-native'
import { Button, Alert, StyleSheet, Image, ImageBackground, FlatList } from 'react-native'
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

  const [customerReservationList, setcustomerReservationList] = useState([
    { name: 'John Doe', size: '2', date: '12/1', time: '10:30 am', key: '1' },
    { name: 'Jason Losh', size: '4', date: '12/4', time: '11:30 am', key: '2' },
    { name: 'Sanjaya KC', size: '5', date: '12/3', time: '12:00 pm', key: '3' },
    { name: 'Lucky Bhai', size: '1', date: '1/1', time: '2:00 pm', key: '4' },
    { name: 'Mr. Monchite', size: '3', date: '1/2', time: '3:30 pm', key: '5' },
  ]);

  return (   
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.main}>
          <View>
            <Text style={styles.header}>Reservations</Text>
          </View>
          <View style={styles.boxBorder}>
            <Text style={styles.waitlist}>Name                    Size             Date            Time </Text>

            <View style={styles.waitlistContainer}>
              <View style={{ height: 500 }}>
                <FlatList 
                  data={customerReservationList}
                  contentContainerStyle={{ flexDirection: 'column-reverse' }}
                  renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                  )}
                />
              </View>
              <View style={{ height: 500, right: 10 }}>
                <FlatList 
                  data={customerReservationList}
                  contentContainerStyle={{ flexDirection: 'column-reverse' }}
                  renderItem={({ item }) => (
                    <Text>{item.size}</Text>
                  )}
                />
              </View>
              <View style={{ height: 500 }}>
                <FlatList 
                  data={customerReservationList}
                  contentContainerStyle={{ flexDirection: 'column-reverse' }}
                  renderItem={({ item }) => (
                    <Text>{item.date}</Text>
                  )}
                />
              </View>
              <View style={{ height: 500 }}>
                <FlatList 
                  data={customerReservationList}
                  contentContainerStyle={{ flexDirection: 'column-reverse' }}
                  renderItem={({ item }) => (
                    <Text>{item.time}</Text>
                  )}
                />
              </View>
            </View>
          </View>
     </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.editButtons}>
          <Button title="Edit" onPress={() => Alert.alert('Edit Reservation')} color="white"/>
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
  waitlistContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginHorizontal: 5,
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
