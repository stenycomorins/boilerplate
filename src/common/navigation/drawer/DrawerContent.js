import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerItem } from '@react-navigation/drawer';
import { DEFAULT_IMAGE } from '../../utils/Images.js';
import { colors } from '../../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent( props ) {
  
  return (
    <View>
      <View style={{flexDirection:'row',marginVertical:20,marginLeft:10}}>
        <View>
          <Image
            source={DEFAULT_IMAGE}
          />
        </View>
        <View style={{marginLeft:15,marginTop:5}}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize:18}}>User Name</Text>
          <Text style={{fontSize:12}}>Customers</Text>
        </View>
      </View>
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