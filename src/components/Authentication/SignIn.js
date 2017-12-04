import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput,
} from 'react-native';
import icSignInBG from '../../Media/appicon/ic_loginbg.png';
import icSignInLock from '../../Media/appicon/ic_loginlock.png';
import icSignInPerson from '../../Media/appicon/ic_loginperson.png';
import icApp from '../../Media/appicon/ic_app.png';

const { width, height } = Dimensions.get('window');


export default class SignIn extends Component {
    render() {
        const { background, logoWrap, logo, wrapper, inputWrap, iconWrap, input, icon, 
               forgotPasswordText, button, buttonText, container, signupWrap,
               accountText, signupLinkText 
        } = styles;
        return (
            <View style={container} >
                <Image source={icSignInBG} style={background} resizeMode='cover' >
                    <View style={logoWrap} >
                        <Image source={icApp} style={logo} resizeMode='contain' />
                    </View>
                    <View style={wrapper} >
                        <View style={inputWrap} >
                            <View style={iconWrap} >
                                <Image source={icSignInPerson} style={icon} resizeMode='contain' /> 
                            </View>
                            <TextInput 
                                placeholder='Username'
                                placeholderTextColor='#FFF'
                                style={input}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={inputWrap} >
                            <View style={iconWrap} >
                                <Image source={icSignInLock} style={icon} resizeMode='contain' />
                            </View>
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='#FFF'
                                style={input}
                                underlineColorAndroid='transparent'
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.5} >
                            <View>
                                <Text style={forgotPasswordText} >Forgot password?</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} >
                            <View style={button} >
                                <Text style={buttonText} >Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={container}>
                        <View style={signupWrap} >
                            <Text style={accountText} >Don't have an account?</Text>
                            <TouchableOpacity activeOpacity={0.5} >
                                <View>
                                    <Text style={signupLinkText} >Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>     
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width,
        height,
    },
    logoWrap: {
        flex: 4,
        paddingVertical: 50
    },
    logo: {
        width: null,
        height: null,
        flex: 1
    },
    wrapper: {
        paddingVertical: 50
        
    },
    inputWrap: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        height: 80,
        marginVertical: 10
    },
    iconWrap: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 20,
        width: 20,
       marginLeft: 10
    },
    input: {
        flex: 1,
    },
    forgotPasswordText: {
        color: '#D8D8D8',
        backgroundColor: 'transparent',
        textAlign: 'right',
        paddingRight: 15,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#F66D6A',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 30

    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
    },
    signupWrap: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    accountText: {
        color: '#D8D8D8',
        fontSize: 20
    },
    signupLinkText: {
        color: '#FFF',
        marginLeft: 7,
        fontSize: 20
    }
});
