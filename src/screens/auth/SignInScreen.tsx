import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SignInScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')}>
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