import React,{useState, useRef} from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry,{ sliderWidth, itemWidth } from './SliderEntry';
import { colors } from '../../common/utils/Colors'

export default function HomeScreen () {

    const slider1Ref= useRef(null)
    const SLIDER_1_FIRST_ITEM = 0;
    const [sliderActiveSlide,setSliderActiveSlide] = useState(SLIDER_1_FIRST_ITEM)

    const ENTRIES = [
        {
            title: 'Favourites landscapes 1',
            subtitle: 'Lorem ipsum dolor sit amet',
        },
        {
            title: 'Favourites landscapes 2',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        },
        {
            title: 'Favourites landscapes 3',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        },
        {
            title: 'Favourites landscapes 4',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        },
        {
            title: 'Favourites landscapes 5',
            subtitle: 'Lorem ipsum dolor sit amet',
        },
        {
            title: 'Favourites landscapes 6',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat',
        }
    ];

    const renderItem = ({item, index}) => {
        return <SliderEntry data={item} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <Carousel
                ref={slider1Ref}
                data={ENTRIES}
                renderItem={renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={SLIDER_1_FIRST_ITEM}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                onSnapToItem={(index) =>  setSliderActiveSlide(index)}
                />
                <Pagination
                dotsLength={ENTRIES.length}
                activeDotIndex={sliderActiveSlide}
                containerStyle={styles.paginationContainer}
                dotColor={colors.black}
                dotStyle={styles.paginationDot}
                inactiveDotColor={colors.black}
                inactiveDotOpacity={0.5}
                inactiveDotScale={0.6}
                carouselRef={slider1Ref}
                tappableDots={!!slider1Ref}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
    carouselContainer: {
        paddingTop: 30
    },
    paginationContainer: {
        paddingVertical: 8,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
})