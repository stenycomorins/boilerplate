import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AboutStackScreen, HomeStackScreen, ProfileStackScreen } from '../stack/RootStackScreen';
import { ABOUT_ROOT, HOME_ROOT, PROFILE_ROOT } from '../../utils/NavigationRoot';
import { colors } from '../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {

  return (
    <Tab.Navigator 
      initialRouteName={HOME_ROOT}
      activeColor={colors.red}
      barStyle={{backgroundColor: colors.white, paddingBottom: 2}}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStackScreen} 
        options={{
          tabBarLabel: HOME_ROOT,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="AboutStack" 
        component={AboutStackScreen} 
        options={{
          tabBarLabel: ABOUT_ROOT,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={26} />
          ),
        }}
        />
      <Tab.Screen 
        name="ProfileStack" 
        component={ProfileStackScreen}
        options={{
          tabBarLabel: PROFILE_ROOT,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} 
      />
    </Tab.Navigator>  
  )
}