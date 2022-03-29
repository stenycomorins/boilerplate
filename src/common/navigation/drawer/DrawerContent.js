import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/Colors.js';
import { DEFAULT_IMAGE } from '../../utils/Images.js';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../../domain/session/actionTypes.js';

export default function DrawerContent( props ) {

  const dispatch = useDispatch()
  
  return (
    <View style={styles.container}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Image
            source={DEFAULT_IMAGE}
          />
          <View style={styles.userNameSection}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>User Name</Text>
            <Text>Customers</Text>
          </View>
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons name="home" color={colors.black} size={size} />
            )}
            label="Home"
            labelStyle={styles.labelStyle}
            onPress={() => {
              props.navigation.navigate("HomeStack");
            }}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons name="information-outline" color={colors.black} size={size} />
            )}
            label="About"
            labelStyle={styles.labelStyle}
            onPress={() => {
              props.navigation.navigate("AboutStack");
            }}
          />
          <DrawerItem
            icon={({size}) => (
              <MaterialCommunityIcons name="account" color={colors.black} size={size} />
            )}
            label="Profile"
            labelStyle={styles.labelStyle}
            onPress={() => {
              props.navigation.navigate("ProfileStack");
            }}
          />
        </View>
      </View>
      <View>
        <DrawerItem
          icon={() => <MaterialCommunityIcons name="exit-to-app" color={colors.black} size={25} />}
          label="Sign Out"
          labelStyle={{fontSize:16}}
          onPress={() => dispatch({ type : LOGOUT })}
        />
        <View style={styles.appVersion}>
          <Text style={styles.appVersionText}>APP_VERSION</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    flexDirection: 'row',
    marginTop: 15,
    alignItems:'center'
  },
  userNameSection: {
    flex:1,
    marginLeft: 15,
  },
  title: {
    fontSize:16
  },
  drawerSection: {
    marginTop: 15,
  },
  appVersion: {
    alignSelf:'center',
    marginVertical:10
  },
  appVersionText: {
    color: colors.black,
    fontSize:12,
  },
  labelStyle: {
    fontSize:16
  }
});

