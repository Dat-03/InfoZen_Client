import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/png';
import {themeColors} from '../../constants/ThemeColor';
import {ButtonCP} from '../../components/customs';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={images.background}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      imageStyle={{flex: 1}}>
      <Text style={styles.text}>
        Welcome to {'\n'}InfoZen {'\t'}👋
      </Text>
    </ImageBackground>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: themeColors.text,
  },
});
