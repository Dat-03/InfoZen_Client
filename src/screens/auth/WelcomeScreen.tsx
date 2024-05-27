import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/png';
import {themeColors} from '../../constants/ThemeColor';
import {ButtonCP} from '../../components/customs';
import {globalStyles} from '../../styles/globalStyles';

const WelcomeScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <ImageBackground
        source={images.background}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        imageStyle={{flex: 1}}>
        <Text style={styles.text}>
          Welcome to {'\n'}InfoZen {'\t'}👋
        </Text>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    color: themeColors.text,
  },
});
