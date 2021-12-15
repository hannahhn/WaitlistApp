import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainScreen from '../components/costumerside_menu';
import WaitlistScreen from '../components/waitlist';
import ReservationScreen from '../components/customerReservationScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Waitlist" component={WaitlistScreen} />
      <Tab.Screen name="Reservation" component={ReservationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;