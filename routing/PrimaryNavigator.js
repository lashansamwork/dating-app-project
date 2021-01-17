import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SignUpNavigator from './SignUpNavigator';
import HomeNavigator from './signedInNavigators/HomeNavigator';

const PrimaryNavigator = () => {
    let isSignout = true;
    return(
        <Stack.Navigator
        screenOptions={{
                headerShown: false,          
            }}
        >
            {isSignout?<Stack.Screen name="SignUpNavigator" component={SignUpNavigator} />:
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />}
        </Stack.Navigator>
    );
}

export default PrimaryNavigator;