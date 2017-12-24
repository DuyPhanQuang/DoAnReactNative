import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../Constants/AppConstants';
import { APP_THEME } from '../../Constants/Color';

export default class ButtonSubmit extends Component {

    // login = () => {
    //     fetch('http://10.0.137.5:3000/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type' 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username:
    //         })
    //     })
    // }
    render() {
        const {
            container, buttonSubmit, text, buttonSkip
        } = styles;
        return (
            <View style={container}>
                <TouchableOpacity 
                  activeOpacity={0.7} 
                >
                    <View style={buttonSubmit}>
                        <Text style={text}>Get Started</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} >
                    <View style={buttonSkip}>
                        <Text style={text}>Skip</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonSubmit: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        backgroundColor: APP_THEME,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: '300',
        fontSize: 25,
    },
    buttonSkip: {
        marginTop: 15,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        alignItems: 'center',
    }
});
