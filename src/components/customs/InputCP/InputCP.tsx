import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardType,
} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {themeColors} from '../../../constants/ThemeColor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../../../styles/globalStyles';

interface Props {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
  isCheck?: boolean;
}

const InputCP = (props: Props) => {
  const {
    value,
    onChange,
    affix,
    placeholder,
    suffix,
    isPassword,
    allowClear,
    type,
    isCheck,
  } = props;
  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  const [hasText, setHasText] = useState(value.length > 0);

  useEffect(() => {
    setHasText(value.length > 0);
  }, [value]);

  return (
    <View
      style={[
        globalStyles.inputContainer,
        isCheck && hasText && {borderColor: themeColors.primary},
      ]}>
      {affix ?? affix}
      <TextInput
        style={[globalStyles.input, globalStyles.text]}
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor={themeColors.gray3}
        keyboardType={type ?? 'default'}
      />
      {suffix ?? suffix}

      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }>
        {isPassword
          ? (isShowPass && (
              <EyeSlash
                size={24}
                color={
                  value.length > 0 ? themeColors.primary : themeColors.gray3
                }
                variant="Bold"
              />
            )) || (
              <Eye
                size={24}
                color={
                  value.length > 0 ? themeColors.primary : themeColors.gray3
                }
                variant="Bold"
              />
            )
          : value.length > 0 &&
            allowClear && (
              <AntDesign
                name="close"
                size={22}
                color={
                  value.length > 0 ? themeColors.primary : themeColors.gray3
                }
              />
            )}
      </TouchableOpacity>
    </View>
  );
};

export default InputCP;
