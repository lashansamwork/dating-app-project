import React,  { useState } from 'react';
import {View, } from 'react-native';
 import {Button, Text, TextInput} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {

    const [phoneNumber, setPhoneNumber] = useState('+94');

    return(
 
            <View style={{flex:1, padding:11, alignItems:'center', }}>
                
                <View style={{flex:1}}><Text>Dating Lanka</Text></View>
                <View style={{flex:1}}><Text>Welcome to Dating Lanka</Text></View>
                
                <View style={{flex:1    }}>
                    <Text>Please verify your phone number</Text>
                </View>
                <View style={{flex:1,width:'100%'  }} >
                    <TextInput
                    mode = "outlined"
                        label="phone number"
                    // value="+94"
                        onChangeText={text => setPhoneNumber(text)}
                    />
                </View>
                <Button onPress={() => navigation.navigate("SignUpScreen")} >
                    [Temp] Go to Sign Up
                </Button>
                
                <Button icon="google" />
                <Button icon="facebook" />

            </View> 
    );
}

export default WelcomeScreen;