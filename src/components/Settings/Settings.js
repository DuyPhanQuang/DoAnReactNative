import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Setting component</Text>
            </View>
        );
    }
}