import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {themeColors} from '../../../constants/ThemeColor';
import {fontType} from '../../../constants/FontType';
import {images} from '../../../assets/images/png';
import {globalStyles} from '../../../styles/globalStyles';
import RowCP from '../RowCP/RowCP';
import TextCP from '../TextCP/TextCP';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}
const ContainerCP = (props: Props) => {
  const {isImageBackground, isScroll, title, children, back} = props;

  const navigation: any = useNavigation();

  const headerCP = () => {
    return (
      <View style={{flex: 1}}>
        {(title || back) && (
          <RowCP
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 48,
              minHeight: 48,
              justifyContent: 'flex-start',
            }}>
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginRight: 12}}>
                <ArrowLeft size={24} color={themeColors.text} />
              </TouchableOpacity>
            )}
            {title ? (
              <TextCP text={title} font={fontType.medium} flex={1} size={16} />
            ) : (
              <></>
            )}
          </RowCP>
        )}
        {returnContainer}
      </View>
    );
  };

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={images.background}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{headerCP()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <StatusBar barStyle={'dark-content'} />
      <View style={[globalStyles.container]}>{headerCP()}</View>
    </SafeAreaView>
  );
};

export default ContainerCP;
