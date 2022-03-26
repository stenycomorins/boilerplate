import React from 'react'
import { useSelector } from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './src/common/navigation/drawer/DrawerContent';
import MainTabScreen from './src/common/navigation/tab/MainTabScreen';
import { LogStackScreen } from './src/common/navigation/stack/RootStackScreen';

export default function AppRoot() {

  const session = useSelector((state) => state.session);

  const Drawer = createDrawerNavigator();
 
  return (
    <NavigationContainer>
      {session.isLoggedIn ? 
        <Drawer.Navigator drawerContent={ (props) => <DrawerContent {...props}/> }
        >
          <Drawer.Screen name="MainTab" component={MainTabScreen} options={{headerShown:false}}/>
        </Drawer.Navigator>
        :
        <LogStackScreen />
      }
    </NavigationContainer>
  )
}