import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import AppScreens from './AppScreens'
import MainScreen from './costumerside_menu';
import WaitlistScreen from './waitlist';

const ApplicationNavigator = createBottomTabNavigator({
    LandingScreen: {
        screen: AppScreens,
    },
    Main: {
        screen: MainScreen,
    },
    Waitlist: {
        screen: WaitlistScreen,
    }}, {
    initialRouteName: "LandingScreen"
});

export default createAppContainer(ApplicationNavigator);