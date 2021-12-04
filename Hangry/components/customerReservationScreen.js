import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Picker, TextInput } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Tab = createBottomTabNavigator();

// function Menu() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Menu!</Text>
//     </View>
//   );
// }

// function Reservation() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Reservation!</Text>
//     </View>
//   );
// }

const customerReservationScreen = () => {

  const [text, onChangeText] = React.useState("Enter Fullname");
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
    //chosenDate = ''
    console.log("You selected this date: ", date);
    setDate(date)
    hideDatePicker();
    console.log(date.toString())
    //chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
  };

  return (
    <View style={styles.paragraph}>

      <Text style={{ color: 'black' }}>
        Make a Reservation
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button title="Select Date and Time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        //timeZoneOffsetInMinutes={0}
      />      
      <Text style={{ color: 'red' }}>
        {date.toString()}
      </Text>
      {/* <Button
        title="Choose Party Size"
        onPress={() => Alert.alert('Party Size pressed')}
      /> */}
      <Text style={{ color: 'black' }}>
        Choose Party Size
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
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
      <Button
        title="Submit Reservation"
        onPress={() => Alert.alert('Submit Reservation pressed')}
      />
     {/* <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#646669",
        activeBackgroundColor: "#646669",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#8B8B8B",
      }}
    >
      <Tab.Screen
        name={"Menu"}
        component={Menu}
        options={{
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarLabel: "Reservation",
        }}
      />
      {/* <Tab.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={23} />
          ),
        }}
      /> */}
    {/* </Tab.Navigator> } */}
    </View>
    
    // <View style={styles.bottomView}>
    //   <Button title="Waitlist" onPress={() => Alert.alert('Waitlist pressed')} color="red" />
    //   <Button title="Menu" onPress={() => Alert.alert('Menu pressed')} color="red" />
    //   <Button title="Reservation" onPress={() => Alert.alert('Reservation pressed')} color="blue" />
    // </View>


  )

}



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   
  //   backgroundColor: '#f5fcff',
  //   color: 'black',
  // },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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