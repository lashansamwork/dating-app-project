import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../../screens/HomeScreen';


const HomeNavigator = () => {
    return ( 
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen component={HomeScreen} name="HomeScreen"/>
        </Stack.Navigator>
    );
}

export default HomeNavigator;