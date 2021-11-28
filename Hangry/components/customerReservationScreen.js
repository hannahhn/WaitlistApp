import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

//import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
//
const customerReservationScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);

  };

  const handleConfirm = (datetime) => {
    chosenDate = ''
    console.log("You selected this date: ", datetime);
    hideDatePicker();
    chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
  };

  return (
    <View style={styles.paragraph}>
      <Text style={{ color: 'black' }}>
        Make a Reservation
      </Text>
      <Text style={{ color: 'red' }}>
        {handleConfirm}
      </Text>
      <Button title="Select Date and Time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        timeZoneOffsetInMinutes={0}
      />
      <Button
        title="Choose Party Size"
        onPress={() => Alert.alert('Party Size pressed')}
      />
      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
        renderItem={(data, index) => {
          //
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperBackground='#FFFFFF'
        itemHeight={60}
        highlightColor='#d8d8d8'
        highlightBorderWidth={2}
      />
      <Button
        title="Submit Reservation"
        onPress={() => Alert.alert('Submit Reservation pressed')}
      />
    </View>
    

  )

}



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   
  //   backgroundColor: '#f5fcff',
  //   color: 'black',
  // },
  paragraph: {
    flex: 1,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default customerReservationScreen