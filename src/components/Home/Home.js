import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = ({
            changeColor: false
        })
    }

    onClicked = () => {
        if(this.state.changeColor === false)
        {
            this.setState({changeColor: true}, async ()=>{
                this.setState({changeColor: false})
            })
        }
    }

    render() {
        const { activeColor, disabledColor, activeContainer, disabledContainer } = styles;
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#f66d6a' }}>
                <View style={this.state.changeColor === true ? activeContainer : disabledContainer}>
                <TouchableOpacity
                    onPress = {this.onClicked}
                >
                    <Text style={this.state.changeColor === true ? activeColor : disabledColor}>
                        abcxyz
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activeContainer: {
        backgroundColor: '#F66D6A',
        width: 200,
        height: 50,
        borderColor: '#f00'
    },
    disabledContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    activeColor: {
        color: 'white',
        borderColor: '#FFF'
    },
    disabledColor: {
        color: '#9c9494',
        borderColor: '#000'
    }
})