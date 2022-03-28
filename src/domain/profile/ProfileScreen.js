import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>profileScreen</Text>
      <Button title='Edit' onPress={() => navigation.navigate("Edit")}/>
    </View>
  )
}