import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {InputCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {globalStyles} from '../../styles/globalStyles';
import {Eye, Sms} from 'iconsax-react-native';
import {themeColors} from '../../constants/ThemeColor';

const SignInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {paddingVertical: 40, paddingHorizontal: 24},
      ]}>
      <AntDesign
        name="arrowleft"
        size={28}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={{gap: 15, paddingVertical: 20}}>
        <TextCP text="Hello there 👋" font={fontType.bold} title />
        <TextCP text="Please enter your email & password to create an account." />
      </View>
      <View style={{gap: 20}}>
        <TextCP text="Email address" font={fontType.bold} />
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
        <TextCP text="Password" font={fontType.bold} />
        <InputCP
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          isPassword
          isCheck
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
