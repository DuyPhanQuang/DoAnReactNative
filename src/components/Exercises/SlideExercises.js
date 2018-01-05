import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';

export default class SlideExercises extends Component {
    render() {
        const { container, img } = styles;
        return (
            <View style={container}>
                <Image
                  source={require('../../Media/appicon/slideex1.jpg')}
                  style={img}
                />
            </View>
        );
    }
}
//pixel 800 x 450
const imgWidth = DEVICE_WIDTH - 20;
const imgHeight = (imgWidth / 800) * 300;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    img: {
        width: imgWidth,
        height: imgHeight,
    }
});