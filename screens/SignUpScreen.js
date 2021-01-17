import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const SignUpScreen = () => {

    const [name, setName] = useState('');
    return (
        <View style={{ flex: 1, padding: 11, alignItems: 'center' }}>
            <View style={{ flexGrow: 1, width: "100%", alignSelf: 'center', alignItems: 'center', justifyContent: 'center'  }}>
            <Text >Dating Lanka</Text>
            </View>
            <TextInput
                style={{ flexShrink: 1 , width: "100%", justifyContent: 'center' }}
                    label="Your name for others to see"
                    onChange={text => setName(text)}
                    mode="outlined"
            />
            <View style={{  flexGrow: 1 , width: "100%", justifyContent: 'center',alignItems: 'center' }}>
                <Text style={{ flexShrink: 1   }}> Upload your picture </Text>
                <Text style={{  flexGrow: 1 }}>Drag and Drop Picture</Text>
                <Text>We will use the image you provided for verification purposes</Text>
            </View>
            
            <View style={{  flexGrow: 0.6 , flexDirection: 'row', width: "100%", justifyContent: 'center', alignItems:'center'}}>
                <Text>I am a </Text>
                <Text>Guy</Text>
                <Text>|</Text>
                <Text>Girl</Text>
            </View>
            <Text style={{ flexShrink: 1 , width: "100%", justifyContent: 'center' }}>By clicking on continue you will agree to our terms and conditions</Text>
            <Button style={{ flexShrink: 1 , width: "100%", justifyContent: 'center' }}>Continue</Button>
        </View>
    );
}

export default SignUpScreen;