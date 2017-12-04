import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Title extends Component {
    render() {
        const { container, text } = styles;
        return (
            <View style={container}>
                <Text style={text}>CREATE ACCOUNT</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: '500',
    }
});
