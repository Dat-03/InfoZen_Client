import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import {images} from '../../assets/images/png';
import {appInfo} from '../../constants/AppInfo';
import {themeColors} from '../../constants/ThemeColor';

const Onboarding = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        index={index}
        loop={false}
        onIndexChanged={num => setIndex(num)}
        activeDotColor={themeColors.primary}
        activeDotStyle={{width: 32, height: 8}}
        dotColor={themeColors.gray1}
        paginationStyle={{bottom: 130}}>
        <Image source={images.banner1} style={styles.img} />
        <Image source={images.banner2} style={styles.img} />
        <Image source={images.banner3} style={styles.img} />
      </Swiper>
      <View style={styles.viewbutton}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={[styles.button, {backgroundColor: themeColors.gray2}]}>
          <Text style={[styles.text, {color: themeColors.primary}]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2
              ? setIndex(index + 1)
              : navigation.navigate('WelcomeScreen')
          }
          style={[styles.button, {backgroundColor: themeColors.primary}]}>
          <Text style={[styles.text, {color: themeColors.white}]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'cover',
  },
  button: {
    padding: 15,
    paddingHorizontal: 60,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbutton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 15,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
});
