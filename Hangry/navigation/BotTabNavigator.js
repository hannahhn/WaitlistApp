import React, {useContext, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import Group from "../components/Group";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import MyTask from "../components/MyTask";
// import Profile from "../components/Profile";
import CustomerReservationScreen from "C:/Users/samvi/Desktop/School/Courses/CSE4317/WaitlistApp/Hangry/components/customerReservationScreen"
// create bottom tab navigation 
const Tab = createBottomTabNavigator();

const Group_Task_Navigator = (props) => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#646669",
        activeBackgroundColor: "#646669",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#8B8B8B",
      }}
    >
      {/* <Tab.Screen
        name={"Menu"}
        component={Menu}
        options={{
          tabBarLabel: "Menu",
        }}
      /> */}
      <Tab.Screen
        name="Reservation"
        component={CustomerReservationScreen}
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
    </Tab.Navigator>
  );
};
export default Group_Task_Navigator;