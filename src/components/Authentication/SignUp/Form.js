import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Image, TextInput
} from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../Constants/AppConstants';

const usernameIcon = require('../../../Media/appicon/username.png');
const signupemail = require('../../../Media/appicon/ic_signupemail.png');
const passwordIcon = require('../../../Media/appicon/password.png');
const weightIcon = require('../../../Media/appicon/ic_weight.png');

export default class Form extends Component {
    render() {
        const {
            container, inputWrap, iconWrap, icon, input
        } = styles;
        return (
            <KeyboardAvoidingView behavior="padding" style={container}>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                          source={usernameIcon}
                          style={icon}
                        />
                    </View>
                    <TextInput
                      style={input}
                      placeholder="Username"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                    />
                </View>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                          source={signupemail}
                          style={icon}
                        />
                    </View>
                    <TextInput
                      style={input}
                      placeholder="Email"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                    />
                </View>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                          source={passwordIcon}
                          style={icon}
                        />
                    </View>
                    <TextInput
                      style={input}
                      secureTextEntry
                      placeholder="Password"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                    />
                </View>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                          source={weightIcon}
                          style={icon}
                        />
                    </View>
                    <TextInput
                      style={input}
                      secureTextEntry
                      placeholder="Your Weight"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    inputWrap: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 100,
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        marginVertical: 15
    },
    iconWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    icon: {
        width: 25,
        height: 25,
    },
    input: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        color: '#FFF',
        fontSize: 18

    }
});
