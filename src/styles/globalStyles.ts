import {Platform, StyleSheet} from 'react-native';
import {themeColors} from '../constants/ThemeColor';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
  },
  button: {
    backgroundColor: themeColors.primary,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
