import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FLOW_WHITE_LOGO } from '../utils/Images'

export default function Header(props) {

    const title = props.route.params && props.route.params.title ? props.route.params.title : props.route.name

  return (
    <View style={styles.container}>
        <View style={styles.rowAlign}>
            <View style={styles.iconContainer}>
                {props.back && 
                    <TouchableOpacity onPress={ () => props.navigation.goBack() }>
                        <MaterialIcons name="arrow-back-ios" size={22} color={colors.white} />
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={ () => props.navigation.openDrawer() }>
                    <MaterialCommunityIcons name="menu" size={30} color={colors.white}/>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text> 
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={FLOW_WHITE_LOGO} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        width:'100%',
        backgroundColor:colors.red,
        paddingVertical:5,
        paddingHorizontal:10
    },
    rowAlign: {
        flexDirection:'row',
        alignItems:'center'
    },
    iconContainer: {
        width:'15%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    titleContainer: {
        width:'70%',
    },
    logoContainer: {
        width:'15%',
    },
    title: {
        fontSize:20,
        color:colors.white,
        textAlign:'center'
    },
    logo: {
        width:50,
        height:50
    }
})