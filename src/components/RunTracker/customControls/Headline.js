import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Headline extends Component {
    render() {
        return (
            <View style={{ alignSelf: 'stretch', marginHorizontal: 20 }}>
                <View style={styles.headlineContainer}>
                    <Text style={{ fontSize: 15, marginRight: 5 }}>
                        {this.props.title}
                    </Text>
                    <View style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            flex: 1
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headlineContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
