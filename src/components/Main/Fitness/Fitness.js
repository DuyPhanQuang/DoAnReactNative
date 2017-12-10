import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import StartComponentOne from './StartComponentOne';
import FunctionBar from './FunctionBar';
import { APP_THEME } from '../../Constants/Color';
import StartComponent from './StartComponent';

export default class Fitness extends Component {
    render() {
        const { wrapper } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: APP_THEME }}>
                {/* dat props onOpen */}
                <Header onOpen={() => { this.props.navigation.navigate('DrawerOpen'); }} />
                <FunctionBar />
                <View style={wrapper}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {/* <StartComponent
                            onPress={() => alert("ccc")}
                        /> */}
                        <StartComponent />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 8,
        alignItems: 'center',
        // backgroundColor: '#F00',
        // paddingHorizontal: 10,
    }
});
