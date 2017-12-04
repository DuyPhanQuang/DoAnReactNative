import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Section extends Component {
    render() {
        const { container, button, text } = styles;
        return (
            <View style={container}>
                <TouchableOpacity activeOpacity={0.7} style={button}>
                    <Text style={text}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={button}>
                    <Text style={text}>Forgot Password?</Text>
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
        marginTop: 100,
    },
    button: {
        backgroundColor: 'transparent',

    },
    text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '200'
    }    
});
