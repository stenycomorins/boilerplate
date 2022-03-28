import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ABOUT_ROOT, HOME_ROOT, LOGIN_ROOT, PROFILE_ROOT } from '../../utils/NavigationRoot';
import { HOME_HEAD } from '../../utils/NavigationHead';
import LoginScreen from '../../../domain/session/LoginScreen';
import HomeScreen from '../../../domain/home/HomeScreen';
import AboutScreen from '../../../domain/about/AboutScreen';
import ProfileScreen from '../../../domain/profile/ProfileScreen';
import EditScreen from '../../../domain/profile/EditScreen';
import { colors } from '../../utils/Colors';
import Header from '../../components/Header';

const Stack = createNativeStackNavigator();

const screenOptions = {
  header: ({ navigation, route, options, back}) => {
    return (
      <Header navigation={navigation} route={route} back={back}/>
    )
  }
}

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
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name={HOME_ROOT} 
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}

export const AboutStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name={ABOUT_ROOT} 
        component={AboutScreen} 
      />
    </Stack.Navigator>
  )
}

export const ProfileStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen 
        name={PROFILE_ROOT} 
        component={ProfileScreen}
      />
       <Stack.Screen 
        name="Edit" 
        component={EditScreen} 
      />
    </Stack.Navigator>
  )
}