import {View, Text} from 'react-native';
import React from 'react';
import {HeaderCP} from './components';
import {globalStyles} from '../../styles/globalStyles';
import {TextCP} from '../../components/customs';
import {fontType} from '../../constants/FontType';

const AuthProfile = ({navigation}: any) => {
  return (
    <View
      style={[
        globalStyles.container,
        {paddingHorizontal: 24, paddingVertical: 40},
      ]}>
      <HeaderCP iconBack navigation={navigation} />
      <View style={{gap: 15, paddingVertical: 25}}>
        <TextCP text="Complete your profile " font={fontType.bold} title />
        <TextCP
          text="Please enter your profile. Don't worry, only you can see your personal data. No one else will be able to see it. Or you can skip it for now."
          size={15}
        />
      </View>
    </View>
  );
};

export default AuthProfile;
