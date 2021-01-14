import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

const WelcomeNavigator = () => {
    return ( 
        <Stack.Navigator initialRouteName="WelcomeScreen" >
            <Stack.Screen component={WelcomeScreen} name="WelcomeScreen"/>
            <Stack.Screen component={SignUpScreen} name="SignUpScreen" />
        </Stack.Navigator>
    );
}

export default WelcomeNavigator;