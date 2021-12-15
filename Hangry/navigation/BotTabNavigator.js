import React, {useContext, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Reservation from "../components/customerReservationScreen"
import Menu from "../components/costumerside_menu"
import Waitlist from "../components/waitlist"

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
      <Tab.Screen
        name="Waitlist"
        component={Waitlist}
        options={{
          tabBarLabel: "Waitlist",
        }}
      />
    </Tab.Navigator>
  );
};
export default Group_Task_Navigator;