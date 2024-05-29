import {Platform, StyleSheet} from 'react-native';
import {themeColors} from '../constants/ThemeColor';
import {fontType} from '../constants/FontType';
import {appInfo} from '../constants/AppInfo';

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
    minHeight: 56,
    flexDirection: 'row',
  },
  text: {
    fontFamily: fontType.regular,
    fontSize: 14,
    color: themeColors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: themeColors.gray4,
    width: '100%',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderColor: themeColors.white,
    borderWidth: 1,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  line: {
    width: '100%',
    borderWidth: 1,
    borderColor: themeColors.graylight,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'rgba(1,1,1,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1.5,
  },
  buttonLogin: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 99,
    width: appInfo.sizes.WIDTH / 4.1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: themeColors.graylight,
  },
});
