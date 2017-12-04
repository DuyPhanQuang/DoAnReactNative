import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


export default class Logo extends Component {
    render() {
        const { container, title, subTitle, logo } = styless;
        return (
            <View style={container} >
                <Image 
                    source={require('../../../Media/appicon/ic_app.png')}
                    style={logo}
                />
                <Text style={title}>Fitness For</Text>
                <Text style={subTitle}>WeightLoss</Text>
            </View>
        );
    }
}

const styless = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 5,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: '700',
        color: '#FFF'
    },
    extraBold: {
        fontWeight: '700'
    },
    subTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFF'
        
    }
});
