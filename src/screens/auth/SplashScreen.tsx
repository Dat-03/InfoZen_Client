import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {images} from '../../assets/images/png';
import {appInfo} from '../../constants/AppInfo';
import {themeColors} from '../../constants/ThemeColor';
import {SpaceCP} from '../../components/customs';

const SplashScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Image
        source={images.logo_icon}
        style={{
          width: appInfo.sizes.WIDTH * 0.41,
          resizeMode: 'contain',
        }}
      />
      <SpaceCP height={40} />
      <Text style={styles.text}>InfoZen</Text>
      <View style={styles.indicator}>
        <ActivityIndicator size={100} color={themeColors.primary} />
      </View>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: themeColors.text,
  },
  indicator: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    top: 0,
  },
});
