import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

export default class BackgroundScreen extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../Media/appicon/background1.jpg')}
                style={styles.image}
            >
             {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,       
    }
});
