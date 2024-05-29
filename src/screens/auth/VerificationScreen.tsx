import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {themeColors} from '../../constants/ThemeColor';
import {appInfo} from '../../constants/AppInfo';

const VerificationScreen = ({navigation, route}: any) => {
  const [limit, setLimit] = useState(50);
  const [codeValues, setCodeValues] = useState<string[]>([]);

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();
  const handleChangeCode = (val: string, index: number) => {
    const data = [...codeValues];
    data[index] = val;
    setCodeValues(data);
  };

  return (
    <View
      style={[
        globalStyles.container,
        {paddingHorizontal: 24, paddingVertical: 40},
      ]}>
      <HeaderCP iconBack navigation={navigation} />
      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP
          text="OTP code verification 🔐"
          font={fontType.bold}
          size={27}
        />
        <TextCP
          size={15}
          text="We have sent an OTP code to your email and********ley@yourdomain.com. Enter the OTP code below to verify."
        />
      </View>

      <SpaceCP height={26} />
      <RowCP justify="space-around">
        <TextInput
          keyboardType="number-pad"
          style={[globalStyles.shadow, styles.input]}
          placeholder="-"
          maxLength={1}
          ref={ref1}
          value={codeValues[0]}
          onChangeText={val => {
            val.length > 0 && ref2.current.focus();
            handleChangeCode(val, 0);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          style={[globalStyles.shadow, styles.input]}
          placeholder="-"
          value={codeValues[1]}
          maxLength={1}
          ref={ref2}
          onChangeText={val => {
            val.length > 0 && ref3.current.focus();
            handleChangeCode(val, 1);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          style={[globalStyles.shadow, styles.input]}
          placeholder="-"
          maxLength={1}
          value={codeValues[2]}
          ref={ref3}
          onChangeText={val => {
            val.length > 0 && ref4.current.focus();
            handleChangeCode(val, 2);
          }}
        />
        <TextInput
          keyboardType="number-pad"
          style={[globalStyles.shadow, styles.input]}
          placeholder="-"
          ref={ref4}
          maxLength={1}
          value={codeValues[3]}
          onChangeText={val => {
            handleChangeCode(val, 3);
          }}
        />
      </RowCP>
      <SpaceCP height={30} />
      <TextCP
        text="Didn't receive email?"
        styles={{textAlign: 'center'}}
        size={16}
        font={fontType.medium}
      />
      <RowCP justify="center">
        <TextCP text="You can resend code in " flex={0} size={16} />
        <SpaceCP height={30} />

        <TextCP
          text={`${(limit - (limit % 60)) / 60}: ${
            limit - (limit - (limit % 60))
          }`}
          flex={0}
          color={themeColors.primary}
          font={fontType.bold}
          size={16}
        />
      </RowCP>

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
          onPress={() => navigation.navigate('CreateNewPass')}
        />
      </View>
    </View>
  );
};

export default VerificationScreen;
const styles = StyleSheet.create({
  input: {
    height: appInfo.sizes.HEIGHT / 12.5,
    width: appInfo.sizes.WIDTH / 5.5,
    borderRadius: 15,
    backgroundColor: themeColors.gray6,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    fontFamily: fontType.bold,
    textAlign: 'center',
  },
});
