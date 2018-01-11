import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';

export default class SlideExercises extends Component {
    render() {
        const { container, img } = styles;
        return (
            <Swiper
              style={container}
              showsButtons
              autoplay
              autoplayTimeout={5}
              autoplayDirection
            >
                <View style={{ flex: 1 }}>
                <Image
                  source={require('../../Media/appicon/slideex1.jpg')}
                  style={img}
                />
                </View>
                <View style={{ flex: 1 }}>
                <Image
                  source={require('../../Media/appicon/slideex2.jpg')}
                  style={img}
                />
                </View>
                <View style={{ flex: 1 }}>
                <Image
                  source={require('../../Media/appicon/slideex3.jpg')}
                  style={img}
                />
                </View>
            </Swiper>
        );
    }
}
// pixel 800 x 450
const imgWidth = DEVICE_WIDTH;
const imgHeight = (imgWidth / 800) * 300;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    img: {
        width: imgWidth,
        height: imgHeight,
    }
});
