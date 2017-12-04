import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Section extends Component {
    render() {
        const { container, button, text } = styles;
        return (
            <View style={container}>
                <TouchableOpacity activeOpacity={0.7} style={button}>
                    <Text style={text}>Terms & Conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={button}>
                    <Text style={text}>SignIn</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    button: {
        marginVertical: 30,       
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
