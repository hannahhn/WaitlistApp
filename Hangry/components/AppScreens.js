import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

import LandingScreen from './LandingScreen'
import RestaurantLoginScreen from './RestaurantLoginScreen'

const screens = {
    LandingScreen: {
        screen: LandingScreen
    },
    RestaurantLoginScreen: {
        screen: RestaurantLoginScreen
    }
}

const AppScreens = createStackNavigator(screens, {
    defaultNavigationOptions: {

    }
});

export default AppScreens;