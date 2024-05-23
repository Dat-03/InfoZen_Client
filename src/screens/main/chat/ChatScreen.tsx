import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/globalStyles'

const ChatScreen = ({navigation}:any) => {
  return (
    <View
    style={[
      globalStyles.container,
      {alignItems: 'center', justifyContent: 'center'},
    ]}>

      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen