import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigators from './TabNavigators';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={TabNavigators} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
