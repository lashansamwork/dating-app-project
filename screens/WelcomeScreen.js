import React,  { useState } from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {

    const [phoneNumber, setPhoneNumber] = useState('+94');

    return(
        <View>
            <Text>Dating Lanka</Text>
            <Text>Welcome to Dating Lanka</Text>
            <Text>Please verify your phone number</Text>
            <TextInput
                label="phone number"
               // value="+94"
                onChangeText={text => setPhoneNumber(text)}
            />
            <Button onPress={() => navigation.navigate("SignUpScreen")} >
                [Temp] Go to Sign Up
            </Button>
            
            <Button icon="google" />
            <Button icon="facebook" />

        </View>
    );
}

export default WelcomeScreen;