import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from "react-native"

const Home: React.FC = () => {
    const navigation = useNavigation()

    const handleOnPress = () => {
        navigation.navigate('Board')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Easy: 4x4 board" onPress={handleOnPress}></Button>
          <Button title="Medium: 4x6 board"></Button>
          <Button title="Difficult: 5x6 board"></Button>
        </View>
      )
}

export { Home }