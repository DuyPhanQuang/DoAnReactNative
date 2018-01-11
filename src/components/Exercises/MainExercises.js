import React, { Component } from 'react';
// import { View , Text } from 'react-native';
import { View, StatusBar } from 'react-native';
import { ExercisesTab } from '../Router';
import SlideExercises from './SlideExercises';

StatusBar.setHidden(true);

export default class MainExercises extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ExercisesTab />
            </View>
        );
    }
}