import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthProfile,
  CreateNewPass,
  ForgotPasswordScreen,
  Onboarding,
  SignInScreen,
  SignUpScreen,
  VerificationScreen,
} from '../screens';
import WelcomeScreen from '../screens/auth/WelcomeScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="AuthProfile" component={AuthProfile} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="CreateNewPass" component={CreateNewPass} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
