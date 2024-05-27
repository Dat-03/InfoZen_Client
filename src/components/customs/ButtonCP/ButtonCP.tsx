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
  onPress?: () => void;
  iconFlex?: 'left' | 'right';
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
    onPress,
    iconFlex,
  } = props;
  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {backgroundColor: color ?? themeColors.primary},
        styles,
      ]}>
      {icon && icon}

      <TextCP
        text={text}
        color={textColor ?? themeColors.white}
        styles={[
          textStyles,
          {
            marginLeft: icon ? 12 : 0,
          },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity>
      <TextCP
        text={text}
        color={type == 'link' ? themeColors.primary : themeColors.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonCP;
