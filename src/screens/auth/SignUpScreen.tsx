import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonCP, InputCP, RowCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {Sms, TickSquare} from 'iconsax-react-native';
import {themeColors} from '../../constants/ThemeColor';
import {HeaderCP, SocialLogin} from './components';

const SignUpScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  };
  return (
    <View
      style={[
        globalStyles.container,
        {paddingVertical: 40, paddingHorizontal: 24},
      ]}>
      <HeaderCP iconBack navigation={navigation} />

      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Hello there 👋" font={fontType.bold} title />
        <TextCP
          text="Please enter your email & password to create an account."
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
          <TouchableOpacity onPress={handleCheckBox}>
            {!checkBox ? (
              <Feather name="square" size={30} color={themeColors.link} />
            ) : (
              <TickSquare
                size={30}
                color={themeColors.primary}
                variant="Bold"
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              color: themeColors.text,
              fontFamily: fontType.semiBold,
              paddingHorizontal: 10,
            }}>
            I agree to InfoZen AI{' '}
            <Text
              style={{color: themeColors.link, fontFamily: fontType.bold}}
              onPress={() => console.log('Privacy Policy')}>
              Public Agreement, Terms, & Privacy Policy.
            </Text>
          </Text>
        </RowCP>
      </View>
      <View style={[globalStyles.line]} />

      <View style={{paddingVertical: 20, gap: 20}}>
        <RowCP styles={{alignItems: 'center', paddingHorizontal: 20, gap: 5}}>
          <TextCP text="Don’t have an account?" />
          <ButtonCP
            text="Log in"
            type="link"
            onPress={() => navigation.navigate('SignInScreen')}
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
          text="Continue"
          type="primary"
          textFont={fontType.bold}
          onPress={() => navigation.navigate('AuthProfile')}
        />
      </RowCP>
    </View>
  );
};

export default SignUpScreen;
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
