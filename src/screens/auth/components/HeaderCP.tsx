import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {RowCP} from '../../../components/customs';

interface Props {
  iconBack?: boolean;
  iconRight?: boolean;
  navigation: any;
  onPress?: () => void;
}

const HeaderCP = (props: Props) => {
  const {iconBack, iconRight, navigation, onPress} = props;
  return (
    <RowCP justify="space-between">
      {iconBack && (
        <AntDesign
          name="arrowleft"
          size={28}
          color="black"
          onPress={() => navigation.goBack()}
        />
      )}
      {iconRight && (
        <Feather
          name="bell"
          size={28}
          color="black"
          onPress={() => console.log('notification')}
        />
      )}
    </RowCP>
  );
};

export default HeaderCP;
