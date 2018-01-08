import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Image,
        AsyncStorage, TouchableOpacity, Text
} from 'react-native';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../Constants/AppConstants';
import { APP_THEME } from '../../Constants/Color';

const usernameIcon = require('../../../Media/appicon/username.png');
const passwordIcon = require('../../../Media/appicon/password.png');

export default class Form extends Component {
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
        const value = await AsyncStorage.getItem('users');
        if (value == null) {
            // this.props.navigation.navigate('ManHinh_StepOne');

        }
    }

    login = () => {
        fetch('http://10.0.137.5:3000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password,
            })
        })
        .then(response => response.json())
        .then((res) => {
            alert(res.message);
            if (res.success === true) {
                AsyncStorage.setItem('users', res.users);
                this.props.navigation.navigate('ManHinh_StepOne');
            } else {
                alert(res);
            }
        })
        .done();
    }

    render() {
        const {
            container, inputWrap, icon, input, iconWrap, buttonSubmit,
            text
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
                      placeholder="Username"
                      placeholderTextColor="#FFF"
                      style={input}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                      onChangeText={username => this.setState({ username })}
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
                      secureTextEntry
                      placeholder="Password"
                      placeholderTextColor="#FFF"
                      style={input}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                      onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.login}
                >
                    <View style={buttonSubmit}>
                        <Text style={text}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        // backgroundColor: '#FFF'
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
    },
    buttonSubmit: {
        width: DEVICE_WIDTH - 100,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        backgroundColor: APP_THEME,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: '300',
        fontSize: 25,
    },
});
