import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ABOUT_ROOT, HOME_ROOT, LOGIN_ROOT, PROFILE_ROOT } from '../../utils/NavigationRoot';
import LoginScreen from '../../../domain/session/LoginScreen';
import HomeScreen from '../../../domain/home/HomeScreen';
import AboutScreen from '../../../domain/about/AboutScreen';
import ProfileScreen from '../../../domain/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export const LogStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={LOGIN_ROOT} 
        component={LoginScreen} 
        options={{ headerShown : false }}
      />
    </Stack.Navigator>
  );
};

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={HOME_ROOT} 
        component={HomeScreen} 
      />
    </Stack.Navigator>
  )
}

export const AboutStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={ABOUT_ROOT} 
        component={AboutScreen} 
      />
    </Stack.Navigator>
  )
}

export const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={PROFILE_ROOT} 
        component={ProfileScreen} 
      />
    </Stack.Navigator>
  )
}