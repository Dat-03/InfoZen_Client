import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AuthNavigator from './src/navigation/AuthNavigators';
import {SplashScreen} from './src/screens';
import WelcomeScreen from './src/screens/auth/WelcomeScreen';
import {StatusBar} from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
       <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent/>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
  // return (
  //   <>
  //     <StatusBar
  //       barStyle={'dark-content'}
  //       backgroundColor="transparent"
  //       translucent
  //     />
  //     <WelcomeScreen />
  //   </>
  // );
};

export default App;
