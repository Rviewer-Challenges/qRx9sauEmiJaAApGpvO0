import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Board } from '@screens'

const Navigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Board" component={Board} />
    </Stack.Navigator>
  )
}

export { Navigator }
