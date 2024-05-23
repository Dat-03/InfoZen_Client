import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigation/AuthNavigators';
import { SplashScreen } from './src/screens';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return !isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
