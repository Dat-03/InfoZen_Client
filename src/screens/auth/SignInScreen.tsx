import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonCP} from '../../components/customs';
import {globalStyles} from '../../styles/globalStyles';

const SignInScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[globalStyles.button]}>
        <Text>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={async () =>
          await AsyncStorage.setItem('assetToken', 'asdasdasd')
        }>
        <Text style={styles.texts}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: 'blue',
    padding: 40,
    borderRadius: 5,
  },
  texts: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
