import {View, Text, StyleProp, TextStyle, Platform} from 'react-native';
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
  numberOfLines?: number;
}

const TextCP = (props: Props) => {
  const {text, color, size, flex, font, styles, title, numberOfLines} = props;
  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color: color ?? themeColors.text,
          fontSize: size ? size : title ? 30 : fontSizeDefault,
          flex: flex ?? 0,
          fontFamily: font ? font : title ? fontType.bold : fontType.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextCP;
