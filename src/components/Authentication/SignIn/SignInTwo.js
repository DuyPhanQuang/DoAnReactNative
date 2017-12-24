import React, { Component } from 'react';
import { View } from 'react-native';
import BackgroundScreen from './BackgroundScreen';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import Section from './Section';

export default class SignInTwo extends Component {
    render() {
        return (
            <BackgroundScreen>
                <Logo />
                <Form />
                <Section />
                {/* <View style={{ flex: 1 }}>
                    <ButtonSubmit />
                    
                </View> */}
            </BackgroundScreen>
        );
    }
}
