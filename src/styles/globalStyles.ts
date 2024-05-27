import {Platform, StyleSheet} from 'react-native';
import {themeColors} from '../constants/ThemeColor';
import {fontType} from '../constants/FontType';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  button: {
    backgroundColor: themeColors.white,
    padding: 16,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight:56,
    flexDirection: 'row',
  },
  text: {
    fontFamily: fontType.regular,
    fontSize: 14,
    color: themeColors.text,
  },
});
