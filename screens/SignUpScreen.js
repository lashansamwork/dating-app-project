import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const SignUpScreen = () => {

    const [name, setName] = useState('');
    return (
        <View>
            <Text>Dating Lanka</Text>
            <TextInput
                label="Your name for others to see"
                onChange={text => setName(text)}
                mode="outlined"
            />
            <Text> Upload your picture</Text>
            <Text>Drag and Drop Picture</Text>
            <Text>We will use the image you provided for verification purposes</Text>
            <Text>I am a </Text>
            <Text>Guy</Text>
            <Text>|</Text>
            <Text>Girl</Text>
            <Text>By clicking on continue you will agree to our terms and conditions</Text>
            <Button>Continue</Button>
        </View>
    );
}

export default SignUpScreen;