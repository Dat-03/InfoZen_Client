import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {themeColors} from '../../../constants/ThemeColor';

const AccountScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Text>AccountScreen</Text>
      <TouchableOpacity
        onPress={async () => await AsyncStorage.clear()}
        style={[globalStyles.button]}>
        <Text style={{color: themeColors.white}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
