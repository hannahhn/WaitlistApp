import React, {useContext, useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomerReservationScreen from "../components/customerReservationScreen"
import CostumerMenu from "../components/costumerside_menu"
import ViewWaitlist from "../components/waitlist"

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
        component={CostumerMenu}
        options={{
          tabBarLabel: "Menu",
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={CustomerReservationScreen}
        options={{
          tabBarLabel: "Reservation",
        }}
      />
      <Tab.Screen
        name="Waitlist"
        component={ViewWaitlist}
        options={{
          tabBarLabel: "Waitlist",
        }}
      />
    </Tab.Navigator>
  );
};
export default Group_Task_Navigator;