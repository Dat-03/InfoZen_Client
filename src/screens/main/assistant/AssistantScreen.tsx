import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../styles/globalStyles'

const AssistantScreen = () => {
  return (
    <View
    style={[
      globalStyles.container,
      {alignItems: 'center', justifyContent: 'center'},
    ]}>
      <Text>AssistantScreen</Text>
    </View>
  )
}

export default AssistantScreen