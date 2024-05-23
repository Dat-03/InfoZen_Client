import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../styles/globalStyles';

const HistoryScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

export default HistoryScreen;
