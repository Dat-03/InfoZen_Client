import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {themeColors} from '../../../constants/ThemeColor';
import {fontType} from '../../../constants/FontType';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
}

const TextCP = (props: Props) => {
  const {text, color, size, flex, font, styles, title} = props;
  return (
    <Text
      style={[
        {
          color: color ?? themeColors.text,
          fontSize: size ?? title ? 24 : 16,
          flex: flex ?? 0,
          fontFamily: font ?? title ? fontType.bold : fontType.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextCP;
