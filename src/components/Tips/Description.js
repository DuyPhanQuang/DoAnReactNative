import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';

const htmlContent = `
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class Description extends Component {
    render() {
        return (
            <ScrollView>
                <HTML html={htmlContent} imagesMaxWidth={DEVICE_WIDTH} />
            </ScrollView>
        );
    }
}
