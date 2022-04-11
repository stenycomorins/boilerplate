import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Platform, StyleSheet } from 'react-native';
import { colors } from '../../common/utils/Colors'
import { windowHeight, windowWidth } from '../../common/utils/Dimensions';

const IS_IOS = Platform.OS === 'ios';

const width = windowWidth;
const height = windowHeight

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

const slideHeight = height * 0.30;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(2);

export const sliderWidth = width;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default function SliderEntry (props) {

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.container}
              onPress={() => { alert(`You've clicked '${props.data.title}'`); }}
              >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{props.data.title}</Text>
                    <Text style={styles.subtitle}>{props.data.subtitle}</Text>
                </View>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    container: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    innerContainer: {
        flex: 1,
        backgroundColor:colors.black,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color:colors.white,
        fontSize:20,
    },
    subtitle: {
        color:colors.white,
        fontSize:14,
        padding:10,
        textAlign:'center'
    }
})
