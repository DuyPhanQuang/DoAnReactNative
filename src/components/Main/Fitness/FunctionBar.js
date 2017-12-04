import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

export default class FunctionBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1) {
                    progress = 1;
                }
                this.setState({ progress });
            }, 500);
        }, 1500);
    }

    render() {
        const { container, progress, one, two, three, text, img } = styles;
        return (
            <View style={container}>
                    <View style={one}>
                        <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../Media/appicon/ic_track.png')}
                            style={img}
                        />
                        </TouchableOpacity>
                        <Text style={text}>Track {'\n'} Run</Text>
                    </View>
                
                <View style={two}>
                    <Progress.Circle 
                    style={progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                    direction='clockwise'
                    showsText
                    color='#FFF'
                    size={90}
                    />
                    <Text style={text}>Progress</Text>
                </View>
                
                    <View style={three}>
                        <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={require('../../../Media/appicon/ic_balance.png')}
                            style={img}
                        />
                        </TouchableOpacity>
                        <Text style={text}>  Your {'\n'}Weight</Text>
                    </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        marginTop: 5,
        height: height * 0.05,
        // backgroundColor: '#F00',
        marginHorizontal: height * 0.05,

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
    }
});
