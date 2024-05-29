import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {HeaderCP} from './components';
import {
  ButtonCP,
  InputCP,
  RowCP,
  SpaceCP,
  TextCP,
} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {Sms} from 'iconsax-react-native';
import {themeColors} from '../../constants/ThemeColor';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {paddingHorizontal: 24, paddingVertical: 40},
      ]}>
      <HeaderCP iconBack navigation={navigation} />
      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Reset your password 🔑" font={fontType.bold} size={28} />
        <TextCP
          size={15}
          text="Please enter your email and we will send an OTP code in the next step to reset your password."
        />
      </View>

      <TextCP text="Email address" font={fontType.bold} size={15} />
      <SpaceCP height={15} />
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
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <ButtonCP
          text="Continue"
          type="primary"
          textFont={fontType.bold}
          onPress={() => navigation.navigate('VerificationScreen')}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
