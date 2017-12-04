import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import BackgroundScreen from './BackgroundScreen';
import Title from './Title';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import Section from './Section';

StatusBar.setHidden(true);

export default class SignUpTwo extends Component {
    render() {
        return (
            <BackgroundScreen>
                <Title />
                <Form />
                <View style={{ flex: 1 }}>
                    <ButtonSubmit />
                    <Section />
                </View>
            </BackgroundScreen>
        );
    }
}