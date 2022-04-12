import React,{ useState } from "react";
import { View, Text, TouchableOpacity, Animated, ScrollView, Image, StyleSheet } from "react-native";
import { windowWidth } from '../../common/utils/Dimensions'

export default function AboutScreen () {

    const width = windowWidth

    const [state,setState] = useState({
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateXTabThree: new Animated.Value(width),
        translateY: -1000
    });

    handleSlide = (type , tabindex, tabOnePos, tabTwoPos, tabThreePos) => {
      setState({ ...state,active: tabindex })
      let {
        translateX,
        translateXTabOne,
        translateXTabTwo,
        translateXTabThree,
      } = state;
      Animated.spring(translateX, {
        toValue: type,
        duration: 100,
        useNativeDriver: true
      }).start();
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: tabOnePos,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: tabTwoPos,
          duration: 100,
          useNativeDriver: true
        }).start(),
        Animated.spring(translateXTabThree, {
          toValue: tabThreePos,
          duration: 100,
          useNativeDriver: true
        }).start()
      ]);
    };

    let {
      xTabOne,
      xTabTwo,
      xTabThree,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateXTabThree,
      translateY
    } = state;

    return (
      <View style={styles.container}>
        <View style={styles.containerstyle}>
          <View style={styles.btnContainer}>
            <Animated.View style={[{
              position: "absolute",
              width: "33.3%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "#007aff",
              borderRadius: 4,
              transform: [{translateX}]
              },{
                borderTopLeftRadius : state.active == 0 ? 4 : 0,
                borderBottomLeftRadius : state.active == 0 ? 4 : 0,
                borderTopRightRadius : state.active == 2 ? 4 : 0,
                borderBottomRightRadius : state.active == 2 ? 4 : 0
              }]}
            />
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.btn,styles.btn1]}
                onLayout={event => setState({...state, xTabOne: event.nativeEvent.layout.x})}
                onPress={() => handleSlide( xTabOne , 0 , 0 , width , width )}
            >
                <Text style={{color: active === 0 ? "#fff" : "#007aff"}}>Tab One</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.btn,styles.btn2]}
                onLayout={event =>setState({...state,xTabTwo: event.nativeEvent.layout.x})}
                onPress={() => handleSlide( xTabTwo , 1 , -width , 0 , width ) }
            >
                <Text style={{color: active === 1 ? "#fff" : "#007aff"}}>Tab Two</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.btn,styles.btn3]}
                onLayout={event =>setState({...state,xTabThree: event.nativeEvent.layout.x})}
                onPress={() => handleSlide( xTabThree , 2 , -width , width , 0 ) }
            >
                <Text style={{color: active === 2 ? "#fff" : "#007aff"}}>Tab Three</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <Animated.View style={{ transform: [{translateX: translateXTabOne}] }}
              onLayout={event => setState({...state,translateY: event.nativeEvent.layout.height})}
            >
              <TabOne />
            </Animated.View>

            <Animated.View style={{ transform: [ {translateX: translateXTabTwo}, {translateY: -translateY} ] }}>
              <TabTwo />
            </Animated.View>
            <Animated.View
                style={{ transform: [ {translateX: translateXTabThree}, {translateY: -(translateY+translateY)} ] }}
            >
              <TabThree />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
  
  const TabOne = () => {
    return (
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Text>Hi, I am a cute cat</Text>
        <View style={{ marginTop: 20 }}>
            <Image
                source={{ uri : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg' }}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40
                }}
            />
        </View>
      </View>
    )
  }

  const TabTwo = () => {
    return (
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <Text>Hi, I am a cute dog</Text>
        <View style={{ marginTop: 20 }}>
          <Image
              source={{ uri : 'https://wallpaper.dog/large/5439024.jpg'}}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40
              }}
          />
        </View>
      </View>
    )
  }

  const TabThree = () => {
    return (
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <Text>Hi, I am cuteeeeeeeee</Text>
        <View style={{ marginTop: 20 }}>
          <Image
              source={{ uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3KLVmPTxp_ERza618BmLtNRCtaeISbBNQA&usqp=CAU'}}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40
              }}
          />
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1 
    },
    containerstyle: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    btnContainer: {
      flexDirection: "row",
      marginTop: 40,
      marginBottom: 20,
      height: 36,
      position: "relative"
    },
    btn: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#007aff",
    },
    btn1: {
        borderRadius: 4,
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    btn2: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    btn3: {
      borderRadius: 4,
      borderLeftWidth: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    }
  })