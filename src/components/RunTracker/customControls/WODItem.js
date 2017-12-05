// Workout Detail item
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WORKOUT_DETAIL_COLOR } from '../../Constants/Color';


export default class WODItem extends Component {
    render() {
        const { title, value, unit } = this.props;
        const {
            container, icon, text, font
        } = styles;
        return (
            <View style={container}>
                <View style={icon}>
                    {this.props.children}
                </View>
                <View style={text}>
                    <Text style={font}>{`${value} ${unit}`}</Text>
                    <Text style={font}>{title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    font: {
        fontSize: 18,
        color: WORKOUT_DETAIL_COLOR
    }
});
