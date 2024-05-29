import {Sms, TickSquare} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonCP, InputCP, RowCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {themeColors} from '../../constants/ThemeColor';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderCP, SocialLogin} from './components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  const toggleRememberMe = () => {
    setIsRemember(!isRemember);
  };

  return (
    <View
      style={[
        globalStyles.container,
        {paddingVertical: 40, paddingHorizontal: 24},
      ]}>
      <HeaderCP iconBack iconRight navigation={navigation} />

      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Welcome back 👋" font={fontType.bold} title />
        <TextCP text="Please enter your email & password to log in." />
      </View>
      <View style={{gap: 15}}>
        <TextCP text="Email address" font={fontType.bold} />
        <InputCP
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Email"
          allowClear
          isCheck
          suffix={
            <Sms
              size={22}
              color={email ? themeColors.primary : themeColors.gray3}
              variant="Bold"
            />
          }
        />
        <TextCP text="Password" font={fontType.bold} />
        <InputCP
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          isPassword
          isCheck
        />

        <RowCP styles={{paddingVertical: 15, gap: 10}} justify="flex-start">
          <TouchableOpacity onPress={toggleRememberMe}>
            {!isRemember ? (
              <Feather name="square" size={30} color={themeColors.link} />
            ) : (
              <TickSquare
                size={30}
                color={themeColors.primary}
                variant="Bold"
              />
            )}
          </TouchableOpacity>
          <TextCP text="Remember me" font={fontType.semiBold} />
        </RowCP>
      </View>
      <View style={[globalStyles.line]} />

      <View style={{paddingVertical: 20, gap: 20}}>
        <ButtonCP
          text="Forgot password?"
          type="link"
          title
          textStyles={{textAlign: 'center'}}
        />
        <RowCP styles={{alignItems: 'center', paddingHorizontal: 20, gap: 5}}>
          <TextCP text="Don’t have an account?" />
          <ButtonCP
            text="Sign up"
            type="link"
            onPress={() => navigation.navigate('SignUpScreen')}
            title
          />
        </RowCP>
      </View>

      <View style={[globalStyles.line, {marginTop: 15}]}>
        <TextCP
          text="or continue with"
          styles={styles.text}
          color={themeColors.gray5}
        />
      </View>
      <SocialLogin />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: themeColors.graylight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    right: 0,
    left: 85,
    top: -15,
    textAlign: 'center',
    backgroundColor: themeColors.white,
    width: 170,
  },
});
