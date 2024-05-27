import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../assets/images/png';
import {themeColors} from '../../constants/ThemeColor';
import {ButtonCP, SpaceCP} from '../../components/customs';
import {globalStyles} from '../../styles/globalStyles';
import {appInfo} from '../../constants/AppInfo';
import {fontType} from '../../constants/FontType';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container]}>
      <ImageBackground
        source={images.background}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        imageStyle={{flex: 1}}>
        <Text style={styles.text}>
          Welcome to {'\n'}InfoZen {'\t'}👋
        </Text>

        <View style={{marginTop: 100, gap: 25}}>
          <ButtonCP
            text="Log In"
            onPress={() => navigation.navigate('SignInScreen')}
            styles={{
              width: appInfo.sizes.WIDTH - 32,
              top: 10,
              height: appInfo.sizes.HEIGHT * 0.078,
            }}
            textColor={themeColors.white}
            type="primary"
            textStyles={{fontFamily: fontType.bold, fontSize: 16}}
          />
          <ButtonCP
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
            styles={{
              width: appInfo.sizes.WIDTH - 32,
              top: 10,
              height: appInfo.sizes.HEIGHT * 0.078,
            }}
            textColor={themeColors.primary}
            type="primary"
            textStyles={{fontFamily: fontType.bold, fontSize: 16}}
            color="white"
          />
        </View>
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
