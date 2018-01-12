import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { APP_THEME, DEVICE_HEIGHT } from '../../Constants/AppConstants';

export default class FinishedTrainingDayItem extends Component {
    render() {
        const { item, index } = this.props;
        const { container, number, text } = styles;
        return (
           <View style={container}>
                <View style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={number}>{index}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                <Text style={text}>{item.TitleName}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                <Icon name="chevron-right" size={45} color="#F66D6A" />
                </View>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT / 9,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ECECEC',
    },
    number: {
        fontSize: 23,
        color: '#F66D6A',
        fontFamily: 'Cochin',
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Cochin',
    }
});