import React from 'react';
import {Button, View} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return(
        <View>
            <Button 
                title="go to sign up"
                onPress={() => navigation.navigate("SignUpScreen")}
                />
        </View>
    );
}

export default WelcomeScreen;