import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {ButtonCP, InputCP, SpaceCP, TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';
import {HeaderCP} from './components';
import {globalStyles} from '../../styles/globalStyles';

const CreateNewPass = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {paddingHorizontal: 24, paddingVertical: 40},
      ]}>
      <HeaderCP iconBack navigation={navigation} />
      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Create New Password 🔒" font={fontType.bold} size={26} />
        <TextCP
          size={15}
          text="Create your new password. If you forget it, then you have to do forgot password."
        />
      </View>
      <SpaceCP height={26} />
      <View>
        <TextCP text="Password" font={fontType.bold} size={15} />
        <SpaceCP height={20} />
        <InputCP
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          isPassword
          isCheck
        />
        <SpaceCP height={20} />
        <TextCP text="Confirm Password" font={fontType.bold} size={15} />
        <SpaceCP height={20} />
        <InputCP
          value={confirmPassword}
          onChange={val => setConfirmPassword(val)}
          placeholder="Confirm Password"
          isPassword
          isCheck
        />
      </View>

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
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
    </View>
  );
};

export default CreateNewPass;
