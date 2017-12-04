import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Image,
        Dimensions,
} from 'react-native';

export default class Form extends Component {
    
    render() {
        const { container, inputWrap, icon, input, iconWrap } = styles;
        return (
            <KeyboardAvoidingView behavior='padding' style={container}>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                            source={require('../../../Media/appicon/username.png')}
                            style={icon}
                        />
                    </View>
                    <TextInput 
                        placeholder='Username'
                        placeholderTextColor='#FFF'
                        style={input}
                        underlineColorAndroid='transparent'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        returnKeyType={'done'}
                    />
                </View>
                <View style={inputWrap}>
                    <View style={iconWrap}>
                        <Image
                            source={require('../../../Media/appicon/password.png')}
                            style={icon}
                        />
                    </View>
                    <TextInput
                        secureTextEntry
                        placeholder='Password'
                        placeholderTextColor='#FFF'
                        style={input}
                        underlineColorAndroid='transparent'
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        returnKeyType={'done'}
                    />
                </View>
            </KeyboardAvoidingView>    
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputWrap: {
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        
    },
    icon: {
        width: 25,
        height: 25,

    },
    input: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        fontSize: 18,
        color: '#FFF'
    }
});
