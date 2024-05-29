import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {InputCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {Sms, TickSquare} from 'iconsax-react-native';
import {themeColors} from '../../constants/ThemeColor';
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
      <AntDesign
        name="arrowleft"
        size={28}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Hello there 👋" font={fontType.bold} title />
        <TextCP text="Please enter your email & password to create an account." />
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
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 25,
            paddingHorizontal: 10,
          }}>
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
          <Text style={[globalStyles.text]}>
            I agree to InfoZen AI{' '}
            <Text
              style={[
                globalStyles.text,
                {color: themeColors.link, fontFamily: fontType.bold},
              ]}>
              Public Agreement, Terms, & Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
      <View style={[globalStyles.line]} />
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextCP
          text="Already have an account?"
          font={fontType.medium}
          color={themeColors.gray5}
        />
        <TextCP text="Log in" font={fontType.bold} color={themeColors.link} />
      </View>
      <TextCP
        text="or continue with"
        styles={{textAlign: 'center'}}
        color={themeColors.gray5}
        font={fontType.medium}
      />
    </View>
  );
};

export default SignUpScreen;
