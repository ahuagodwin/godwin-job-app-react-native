import React from 'react'
import { View, Text } from 'react-native'

const Button = ({iconUrl}) => {
  return (
    <View>
        <Text>{iconUrl}</Text>
    </View>
  )
}

export default Button