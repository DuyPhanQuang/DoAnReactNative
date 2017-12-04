import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet 
    , Image, Dimensions, TextInput
} from 'react-native';

export default class Form extends Component {
    render() {
        const { container, title, titleText, inputWrap, iconWrap, input,
                icon, inputContainer, buttonSubmit, buttonText, section
        } = styles;
        return (
            <View style={container}>
                <View style={title}>
                    <Text style={titleText}>Forgot Your Password?</Text>
                </View>
                <View style={inputContainer}>
                    <View style={inputWrap}>
                        <View style={iconWrap}>
                            <Image
                                source={require('../../../Media/appicon/ic_signupemail.png')}
                                style={icon}
                            />
                        </View>
                        <TextInput
                            style={input}
                            placeholder='Email'
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='transparent'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            returnKeyType={'done'}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.7} >
                    <View style={buttonSubmit}>
                        <Text style={buttonText}>Send Email</Text>
                    </View>     
                    </TouchableOpacity>  
                </View> 
                <View style={section}>
                    <TouchableOpacity activeOpacity={0.7} >
                        <View>
                            <Text 
                            style={{ color: '#FFF', fontSize: 20, fontWeight: '300' }}
                            >Back To Login</Text>
                        </View>    
                    </TouchableOpacity>
                </View>                       
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tilte: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: '300',
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center'
    },
    inputWrap: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 100,
    width: DEVICE_WIDTH - 200,
    height: DEVICE_HEIGHT / 14,
    marginVertical: 15,
    },
    iconWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    icon: {
        width: 35,
        height: 35,
    },
    input: {
        width: DEVICE_WIDTH - 200,
        height: DEVICE_HEIGHT / 14,
        color: '#FFF',
        fontSize: 22
    },
    buttonSubmit: {
        marginTop: 20,
        width: DEVICE_WIDTH - 200,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        borderColor: '#FFF',
        borderWidth: 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 22,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});
