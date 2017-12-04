import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class ButtonSubmit extends Component {
    render() {
        const { container, buttonSubmit, text } = styles;
        return (
            <View style={container}>    
                <TouchableOpacity activeOpacity={0.7} >
                    <View style={buttonSubmit}>
                        <Text style={text}>Continue</Text>
                    </View>     
                </TouchableOpacity>  
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonSubmit: {
        marginTop: 20,
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 22
    }
});
