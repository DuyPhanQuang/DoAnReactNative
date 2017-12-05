import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const backgroundblur = require('../../../Media/appicon/background1blur.jpg');

export default class BackgroundScreen extends Component {
    render() {
        return (
            <ImageBackground
              source={backgroundblur}
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
        height: null
    }
});
