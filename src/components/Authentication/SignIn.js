import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, 
         KeyboardAvoidingView, TextInput, AsyncStorage
} from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import { APP_THEME } from '../Constants/Color';
// import signIn from '../../api/signIn';

const background = require('../../Media/appicon/background1.jpg');
const appIcon = require('../../Media/appicon/ic_app.png');
const usernameIcon = require('../../Media/appicon/username.png');
const passwordIcon = require('../../Media/appicon/password.png');

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('users');
        if (value !== null) {
            this.props.navigation.navigate('ManHinh_StepOne');
        }
    }

    login = () => {
        fetch('http://192.168.1.44:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if (res.success === true) {
                AsyncStorage.setItem('users', res.users);
                this.props.navigation.navigate('ManHinh_StepOne');
            } else {
                alert(res.message);
            }
        })
        .done();
    }

    render() {
        const { username, password } = this.state;
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
                              value={username}
                              onChangeText={(username) => this.setState({ username })}
                            />
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
                              autoCapitalize="none"
                              autoCorrect={false}
                              returnKeyType="done"
                              value={password}
                              onChangeText={(password) => this.setState({ password })}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.7} onPress={this.logIn} >
                            <View style={styles.buttonSubmit}>
                                <Text style={styles.text}>Get Started</Text>
                            </View>
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