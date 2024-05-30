import {Sms, TickSquare} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonCP, InputCP, RowCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {themeColors} from '../../constants/ThemeColor';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderCP, SocialLogin} from './components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authenticationAPI from '../../apis/AuthApi';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);

  const toggleRememberMe = () => {
    setIsRemember(!isRemember);
  };

  const handleLogin = async () => {
    const api = `asdasdads`;
    try {
      const res = await authenticationAPI.HandleAuthentication(api, {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
        <TextCP
          text="Please enter your email & password to log in."
          size={15}
        />
      </View>
      <View style={{gap: 15}}>
        <TextCP text="Email address" font={fontType.bold} size={15} />
        <InputCP
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Email"
          isCheck
          suffix={
            <Sms
              size={22}
              color={email ? themeColors.primary : themeColors.gray3}
              variant="Bold"
            />
          }
        />
        <TextCP text="Password" font={fontType.bold} size={15} />
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
          <TextCP text="Remember me" font={fontType.semiBold} size={15} />
        </RowCP>
      </View>
      <View style={[globalStyles.line]} />

      <View style={{paddingVertical: 20, gap: 20}}>
        <ButtonCP
          text="Forgot password?"
          type="link"
          title
          textStyles={{textAlign: 'center', fontSize: 16}}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
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
          size={15}
        />
      </View>
      <SocialLogin />
      <View style={[globalStyles.line, {marginTop: 10}]} />
      <RowCP styles={{paddingVertical: 20}}>
        <ButtonCP
          text="Log in"
          type="primary"
          textFont={fontType.bold}
          onPress={handleLogin}
        />
      </RowCP>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
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
