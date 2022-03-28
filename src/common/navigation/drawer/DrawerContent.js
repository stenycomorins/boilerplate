import { View, Text } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper';
import { DEFAULT_IMAGE } from '../../utils/Images.js';
import { colors } from '../../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent( props ) {
  
  return (
    <View>
      <View style={{alignItems:'center',padding:25}}>
        <Avatar.Image
          size={100}
          source={DEFAULT_IMAGE}
        />
        <Text style={{fontSize:18,marginTop:10}}>User Name</Text>
      </View>
      <View style={{borderBottomWidth:1,marginHorizontal:40,borderBottomColor:colors.hexGray}}></View>
      <DrawerItem
        icon={({size}) => (
          <MaterialCommunityIcons name="home" color={colors.textblack} size={size} />
        )}
        label="Home"
        labelStyle={{fontSize:16}}
        onPress={() => {
          props.navigation.navigate("HomeStack");
        }}
      />
      <DrawerItem
        icon={({size}) => (
          <MaterialCommunityIcons name="information-outline" color={colors.textblack} size={size} />
        )}
        label="About"
        labelStyle={{fontSize:16}}
        onPress={() => {
          props.navigation.navigate("AboutStack");
        }}
      />
      <DrawerItem
        icon={({size}) => (
          <MaterialCommunityIcons name="account" color={colors.textblack} size={size} />
        )}
        label="Profile"
        labelStyle={{fontSize:16}}
        onPress={() => {
          props.navigation.navigate("ProfileStack");
        }}
      />
    </View>
  )
}