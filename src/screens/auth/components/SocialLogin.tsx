import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  ButtonCP,
  RowCP,
  SectionCP,
  SpaceCP,
  TextCP,
} from '../../../components/customs';
import {Apple, Facebook, Google} from '../../../assets/images/svg';
import {appInfo} from '../../../constants/AppInfo';
import {globalStyles} from '../../../styles/globalStyles';
import {themeColors} from '../../../constants/ThemeColor';

const SocialLogin = () => {
  return (
    <SectionCP>
      <SpaceCP height={30} />
      <RowCP justify="space-between">
        <TouchableOpacity
          style={[globalStyles.shadow, globalStyles.buttonLogin]}>
          <Google />
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.shadow, globalStyles.buttonLogin]}>
          <Apple />
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.shadow, globalStyles.buttonLogin]}>
          <Facebook />
        </TouchableOpacity>
      </RowCP>
    </SectionCP>
  );
};

export default SocialLogin;