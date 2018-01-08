import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { DEVICE_HEIGHT } from '../Constants/AppConstants';

const profileIcon = require('../../Media/appicon/ic_profile.png');

export default class ShowInfo extends Component {
    render() {
        const {
            container, litleContainer, imgProfile, profile, textName,
            textSub, buttonUpgrade, textBtnUpgrade,
            tapinWrap,
        } = styles;
        return (
            <View style={container}>
                <View style={litleContainer}>
                    <Image
                      source={profileIcon}
                      style={imgProfile}
                    />
                    <TouchableOpacity activeOpacity={0.5} >
                        <View style={profile}>
                            <View style={tapinWrap}>
                                <Text style={textName}>Tap to View Profile</Text>
                                <Text style={textSub}>Profile, Training Plan</Text>
                            </View>
                            <Icon2 name="chevron-thin-right" size={30} color="#9C9494" />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={buttonUpgrade}>
                        <Icon1 name="star" size={25} color="#FFF" />
                        <Text style={textBtnUpgrade}>Upgrade to Premium</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC'
    },
    litleContainer: {
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 10,

    },
    imgProfile: {
        width: 100,
        height: 100,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonUpgrade: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: DEVICE_HEIGHT / 20,
        borderRadius: 50,
        backgroundColor: '#FFBF57',
        marginHorizontal: 20,

    },
    icStar: {
        color: '#FFF',
    },
    tapinWrap: {
        paddingVertical: 10,
    },
    textName: {
        fontSize: 20,
        color: '#000',
        fontWeight: '200',
    },
    textSub: {
        fontSize: 15,
        color: '#9c9494',
        fontWeight: '100',
    },
    textBtnUpgrade: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '400',
    },
});

