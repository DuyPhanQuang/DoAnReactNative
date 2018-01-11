import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, 
         KeyboardAvoidingView, TextInput, AsyncStorage
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import { APP_THEME } from '../Constants/Color';
import apiLogin from '../../api/signIn';

const background = require('../../Media/appicon/background1.jpg');
const appIcon = require('../../Media/appicon/ic_app.png');
const usernameIcon = require('../../Media/appicon/username.png');
const passwordIcon = require('../../Media/appicon/password.png');

export default class SignIn extends Component {
    constructor(props) {
        super(props);
    
       this.state = {
            Email: '',
            Password: '',
        };
    }
    componentDidMount() {
        this.actionnn();
    }

    validateEmail(Email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(Email.toLowerCase());
    }

    actionnn = async (temp) => {
            if (this.state.Email = '')
            {
                this.refs.toast.show('Please enter email and password', 1000);
                return;
            }
            if (!this.validateEmail(this.state.Email))
            {
                this.refs.toast.show('Email is invalid', 1000);
                return;
            }
            try {
               var res = await apiLogin.Login(this.state.Email, this.state.Password).data;
            } catch (err) {
                console.log('Login error: ', err);
            }
            if(temp.code === '200')
            {
                console.log('sadwqewq');
                this.props.navigation.navigate('ManHinh_StepOne');
            }
            else
            {
                this.refs.toast.show(temp.message, 1000);
            }
    }

    render() {
        // const { Email, Password } = this.state;
        return (
            <ImageBackground source={background} style={styles.imageBg} >
                <View style={styles.container}>
                    <View style={styles.wrapperLogo} >
                        <Image
                          source={appIcon}
                          style={styles.logo}
                        />
                        <Text style={styles.title}>Fitness For</Text>
                        <Text style={styles.subTitle}>WeightLoss</Text>
                    </View>
                    <KeyboardAvoidingView behavior="padding" style={styles.wrapperForm}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image
                                  source={usernameIcon}
                                  style={styles.icon}
                                />
                            </View>
                            <TextInput
                              placeholder="Username"
                              placeholderTextColor="#FFF"
                              style={styles.input}
                              underlineColorAndroid="transparent"
                            //   autoCapitalize="none"
                            //   autoCorrect={false}
                            //   returnKeyType="done"
                            //   value={Email}
                              onChangeText={(text) => this.setState({ Email: text })}
                            />
                            <Toast ref='toast'/>
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image
                                  source={passwordIcon}
                                  style={styles.icon}
                                />
                            </View>
                            <TextInput
                              secureTextEntry
                              placeholder="Password"
                              placeholderTextColor="#FFF"
                              style={styles.input}
                              underlineColorAndroid="transparent"
                            //   autoCapitalize="none"
                            //   autoCorrect={false}
                            //   returnKeyType="done"
                            //   value={Password}
                              onChangeText={(text) => this.setState({ Password: text })}
                            />
                            <Toast ref='toast'/>
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('ManHinh_StepOne')} >
                            <View style={styles.buttonSubmit}>
                                <Text style={styles.text}>Get Started</Text>
                            </View>
                            <Toast ref='toast'/>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                    <View style={styles.wrapperSection}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSection}>
                            <Text style={styles.textSection}>Create Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSection}>
                            <Text style={styles.textSection}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperForm: {
        flex: 2,
        alignItems: 'center',
        // backgroundColor: '#FFF'
    },
    wrapperSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputWrap: {
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14
    },
    input: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        fontSize: 18,
        color: '#FFF'
    },
    buttonSubmit: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        backgroundColor: APP_THEME,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSection: {
        backgroundColor: 'transparent',
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
    imageBg: {
        flex: 1,
        width: null,
        height: null,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 5,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: '700',
        color: '#FFF'
    },
    subTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'normal',
        color: '#FFF'
    },
    text: {
        color: '#FFF',
        fontWeight: '300',
        fontSize: 25,
    },
    textSection: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '200'
    }
});