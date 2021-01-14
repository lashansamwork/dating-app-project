import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
    return(
        <View>
            <Button onPress={() => navigation.navigate("SignUpScreen")} >
                Go to Sign Up
            </Button>
        </View>
    );
}

export default WelcomeScreen;