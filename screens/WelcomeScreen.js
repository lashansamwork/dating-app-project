import React, { useState } from 'react';
import { View, } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const WelcomeScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('+94');
    return (
    <View style={{ flex: 1, padding: 11, alignItems: 'center' }}>
        <View style={{ flexGrow: 1, width: "100%", alignSelf: 'center', alignItems: 'center', justifyContent: 'center'  }}>
            <Text >Dating Lanka</Text>
        </View>
        <Text style={{ flexShrink: 5 , width: "100%", alignItems: 'center' }}>Welcome to Dating Lanka</Text>
        <Text style={{ flexShrink: 1 , width: "100%", alignItems: 'center' }}>Please verify your phone number</Text>

        <TextInput
            style={{ flexShrink: 1 , width: "100%", justifyContent: 'center' }}
            mode="outlined"
            label="phone number"
            onChangeText={text => setPhoneNumber(text)}
        />

        <Button onPress={() => navigation.navigate("SignUpScreen")} >
            [Temp] Go to Sign Up
        </Button>
        <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center' }} >
            <Button icon="google" />
            <Button icon="facebook" />
        </View>
        <Text style={{ flexShrink: 5 }}>SMS charges will apply</Text>
    </View>
    );
}

export default WelcomeScreen;