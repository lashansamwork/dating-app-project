/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PrimaryNavigator from './routing/PrimaryNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PrimaryNavigator/>
    </NavigationContainer>
  );
};

export default App;
