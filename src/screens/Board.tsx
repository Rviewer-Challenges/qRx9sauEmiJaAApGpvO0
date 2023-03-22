import { Text, View } from "react-native"

const Board: React.FC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is the board</Text>
        </View>
      )
}

export { Board }