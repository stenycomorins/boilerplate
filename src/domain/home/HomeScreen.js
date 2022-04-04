import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Button title="Go to edit" onPress={() => navigation.navigate("ProfileStack",{screen:"Edit"})}/>
    </View>
  )
}