import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Picker, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { NavigationContainer } from '@react-navigation/native';


const customerReservationScreen = () => {

  const [text, onChangeText] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("1");

  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);

  };

  const handleConfirm = (date) => {
    console.log("You selected this date: ", date);
    setDate(date)
    hideDatePicker();
    console.log(date.toString())
  };

  return (
    <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Make a Reservation
        </Text>

        <Text style={styles.title}>Enter Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Full Name'
          placeholderTextColor='gray'
        />
        
        <Text style={styles.title}>Select Date and Time:</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />  
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.dateInput}>
            {date.toString()}
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Choose Party Size:
        </Text>

        <Picker
          selectedValue={selectedValue}
          style={{ width: '100%', alignSelf: 'center' }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="More than 10. Please contact Restaurant" value="11" />
        </Picker>
        
        <View style={styles.editButtons}> 
          <Button
            title="Submit Reservation"
            color='white'
            onPress={() => Alert.alert('Reservation has been sent to the Restaurant!')}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    margin: 20,
    marginVertical: 30,
    borderColor: 'white', 
    borderWidth: 4, 
    padding: 10,
    borderRadius: 5
  },
  header: {
    color: '#b06b6b',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },  
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 10,
    backgroundColor: "#FBFBFF",
    borderRadius: 5
  },
  dateInput: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 8,
    padding: 15,
    backgroundColor: "#FBFBFF",
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 12
  },
  editButtons: {
    height: 50,
    width: 200,
    backgroundColor: '#9e5c5c',
    padding: 5,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 50
  },
});

export default customerReservationScreen