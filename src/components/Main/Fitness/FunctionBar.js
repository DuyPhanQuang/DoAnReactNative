import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { DEVICE_HEIGHT } from '../../Constants/AppConstants';
import { getProgress } from './LocalStorage';

const trackIcon = require('../../../Media/appicon/ic_track.png');
const balanceIcon = require('../../../Media/appicon/ic_balance.png');

export default class FunctionBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    async componentDidMount() {
        await this.animate();
    }

    async animate() {
        let progress = 0;
        await getProgress().then((val) => { progress = val; });
        this.setState({ progress, indeterminate: false });
    }

    render() {
        const {
            container, progress, one, two, three, text, img
        } = styles;
        return (
            <View style={container}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={this.props.onRunTrackerPress}
                  style={one}
                >
                    <Image
                      source={trackIcon}
                      style={img}
                    />
                    <Text style={text}>Run{'\n'}Tracker</Text>
                </TouchableOpacity>

                <View style={two}>
                    <Progress.Circle
                      style={progress}
                      progress={this.state.progress}
                      indeterminate={this.state.indeterminate}
                      direction="clockwise"
                      showsText
                      color="#FFF"
                      size={90}
                    />
                    <Text style={text}>Progress</Text>
                </View>

                <TouchableOpacity activeOpacity={0.5} style={three}>
                    <Image
                      source={balanceIcon}
                      style={img}
                    />
                    <Text style={text}>Your{'\n'}Weight</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        marginTop: 5,
        height: DEVICE_HEIGHT * 0.05,
        // backgroundColor: '#F00',
        marginHorizontal: DEVICE_HEIGHT * 0.05,

        alignItems: 'center',
        justifyContent: 'space-around'
    },
    one: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    two: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    three: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        margin: 10,
    },
    img: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
    }
});
