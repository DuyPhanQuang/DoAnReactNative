import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar 
} from 'react-native';
import icApp from '../../Media/appicon/ic_app.png';

const { height, width } = Dimensions.get('window');

StatusBar.setHidden(true);

export default class StepOne extends Component {
    render() {
        const { container, one, two, three, iconStyle, btnStyle, textBtnStyle } = styles;
        return (         
            <View style={container}>
                <Text style={one} >Hello</Text>
                <Image source={icApp} style={iconStyle} />
                <Text style={two} >Welcome to Fitness{'\n'} for Weight Loss!</Text>
                <Text style={three} >Please, read program details in the{'\n'} appropriate section 
                    of the Menu before {'\n'} starting any plan. We strongly advise {'\n'}
                    you to consult a doctor before starting {'\n'} any fitness program.
                </Text>
                <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('ManHinh_Fitness'); }} 
                style={btnStyle}
                >
                    <Text style={textBtnStyle} >NEXT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F66D6A'
    },
    one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 100
    },
    two: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
        marginTop: 20
    },
    three: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 100
    }, 
    iconStyle: {
        width: 100,
        height: 100,
    },
    btnStyle: {
        backgroundColor: '#FFF',
        height: height / 13,
        width: width / 1.3,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtnStyle: {
        fontSize: 30,
        color: '#F66D6A'
    }
});
