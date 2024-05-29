import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../../../styles/globalStyles';
import TextCP from '../TextCP/TextCP';
import {themeColors} from '../../../constants/ThemeColor';
import {fontType} from '../../../constants/FontType';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  title?: boolean;
  onPress?: () => void;
  iconFlex?: 'left' | 'right';
  numberOfLines?: number;
  disable?: boolean;
}

const ButtonCP = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    onPress,
    iconFlex,
    numberOfLines,
    disable,
    title,
  } = props;
  return type === 'primary' ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disable}
      style={[
        globalStyles.button,
        {
          backgroundColor: color
            ? color
            : disable
            ? themeColors.gray
            : themeColors.primary,
          width: '90%',
        },
        styles,
      ]}>
      {icon && iconFlex === 'left' && icon}

      <TextCP
        text={text}
        numberOfLines={numberOfLines}
        color={textColor ?? themeColors.white}
        styles={[
          textStyles,
          {
            marginLeft: icon ? 12 : 0,
            fontSize: 16,
            textAlign: 'center',
          },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
        font={textFont ?? fontType.bold}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextCP
        text={text}
        flex={0}
        color={type == 'link' ? themeColors.link : themeColors.text}
        font={title ? fontType.bold : fontType.regular}
        styles={[, {}, textStyles]}
      />
    </TouchableOpacity>
  );
};

export default ButtonCP;
