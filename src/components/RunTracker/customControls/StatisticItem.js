import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../Constants/AppConstants';

const StatisticItem = ({ title, value }) => (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: DEVICE_WIDTH / 2
    },
    title: {
        color: 'gray',
        fontSize: 15,
        alignSelf: 'center'
    },
    value: {
        color: 'black',
        fontSize: 35
    }
});

export default StatisticItem;
