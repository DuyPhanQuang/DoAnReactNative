import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import  from 'react-native-swiper';

export default class DetailExercises extends Component {
    render() {
        const { container, videoContent, descripton, slide } = styles;
        return (
            <ScrollView style={container}>
                <View style={videoContent}>

                </View>
                <View style={descripton}>
                    <View style={slide}>

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContent: {
        flex: 1,
    },
    descripton: {
        flex: 2
    },
    slide: {
        flex: 1,
    }
});