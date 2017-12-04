import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import icLeftArrowWhite from '../../Media/appicon/ic_leftarrowwhite.png';
import icSignUpBG from '../../Media/appicon/ic_signupbg.png';
import icSignUpBirthDay from '../../Media/appicon/ic_signupbirthday.png';
import icSignUpEmail from '../../Media/appicon/ic_signupemail.png';
import icSignUpLock from '../../Media/appicon/ic_signuplock.png';
import icSignUpPerson from '../../Media/appicon/ic_signupperson.png';

export default class SignUp extends Component {
    render() {
        const { container, background, headerContainer, headerIconView,
            headerBackButtonView, backButtonIcon, headerTitleView, 
            titleViewText, inputsContainer, inputContainer, iconContainer,
            inputIcon, inputText, whiteFont, footerContainer, signUp,
             signInWrap, accountText, signInLinkText
        } = styles;
        return (
            <View style={container} >
                <Image 
                source={icSignUpBG}
                style={[container, background]}
                resizeMode='cover'
                >
                    <View style={headerContainer} >
                        <View style={headerIconView} >
                            <TouchableOpacity style={headerBackButtonView} >
                                <Image 
                                source={icLeftArrowWhite}
                                style={backButtonIcon}
                                resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={headerTitleView} >
                            <Text style={titleViewText} >Sign Up</Text> 
                        </View>

                    </View>

                    <View style={inputsContainer} >

                        <View style={inputContainer} >
                            <View style={iconContainer} >
                                <Image
                                    source={icSignUpPerson}
                                    style={inputIcon}
                                    resizeMode='contain'
                                />
                            </View>
                            <TextInput 
                                style={[inputText, whiteFont]}
                                placeholder='Name'
                                placeholderTextColor='#FFF'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={inputContainer} >
                            <View style={iconContainer} >
                                <Image
                                    source={icSignUpEmail}
                                    style={inputIcon}
                                    resizeMode='contain'
                                />
                            </View>
                            <TextInput 
                                style={[inputText, whiteFont]}
                                placeholder='Email'
                                placeholderTextColor='#FFF'
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={inputContainer} >
                            <View style={iconContainer} >
                                <Image
                                    source={icSignUpLock}
                                    style={inputIcon}
                                    resizeMode='contain'
                                />
                            </View>
                            <TextInput
                                secureTextEntry 
                                style={[inputText, whiteFont]}
                                placeholder='Password'
                                placeholderTextColor='#FFF'
                                underlineColorAndroid='transparent'
                                
                            />
                        </View>
                        <View style={inputContainer}>    
                            <View style={iconContainer} >
                                <Image
                                    source={icSignUpBirthDay}
                                    style={inputIcon}
                                    resizeMode='contain'
                                />
                            </View>
                            <TextInput 
                                style={[inputText, whiteFont]}
                                placeholder='Birthday'
                                placeholderTextColor='#FFF'
                                underlineColorAndroid='transparent'
                            />
                        </View>    
                    </View>  
                    <View style={footerContainer}>
                        <TouchableOpacity activeOpacity={0.5} >
                            <View style={signUp}>
                                <Text style={whiteFont} >Join</Text>
                            </View>
                        </TouchableOpacity>
                            <View style={signInWrap} >
                                <Text style={accountText}>Already have an account?</Text>
                                <TouchableOpacity activeOpacity={0.5} >
                                    <View>
                                        <Text style={signInLinkText} >Sign In</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>       
                    </View>
                </Image>
            </View>        

        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        paddingTop: 30,
        width: null,
        height: null,
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        backgroundColor: 'transparent',
        marginLeft: 10,
    },
    headerBackButtonView: {
        width: 30,
        height: 30,
        
    },
    backButtonIcon: {
        width: 30,
        height: 30,
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 25,
        marginLeft: 25
    },
    titleViewText: {
        fontSize: 40,
        color: '#FFF'

    },
    inputContainer: {
        flexDirection: 'row',
        borderColor: 'transparent',
        height: 80,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        marginTop: 10,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    inputIcon: {
        width: 30,
        height: 30
    },
    inputText: {
        flex: 1,
        fontSize: 20,

    },
    whiteFont: {
        color: '#FFF',
        fontSize: 20
    },
    greyFont: {
        color: '#D8D8D8'
    },
    signUp: {
        backgroundColor: '#F66D6A',
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signIn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    signInWrap: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
        
    },
    accountText: {
        color: '#D8D8D8',
        fontSize: 20
    },
    signInLinkText: {
        color: '#FFF',
        marginLeft: 7,
        fontSize: 20
    }
});
