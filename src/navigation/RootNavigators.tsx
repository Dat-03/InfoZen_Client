import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigators';
import MainNavigator from './MainNavigators';

const RootNavigator = () => {
  const enableSignIn: boolean = true;

  return (
    <NavigationContainer>
      {enableSignIn ? <MainNavigator /> : <AuthNavigator />}
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
