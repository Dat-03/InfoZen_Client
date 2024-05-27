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
  return (
    <TouchableOpacity>
      {icon && iconFlex === 'left' && icon}

      <TextCP text={text} color={textColor} styles={textStyles} />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  );
};

export default ButtonCP;
