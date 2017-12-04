import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import icSignout from '../../../../Media/appicon/ic_signout.png';
import VideoOne from './VideoOne';

const { width, height } = Dimensions.get('window');

export default class TrainingExerciseOne extends Component {

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
        const { container, videoStyle, progressCircle, action,
             exContent, icon, headerContent, textHeader
        } = styles;
        return (
            <View style={container}>
                <View style={videoStyle}>
                    <VideoOne />
                </View>
                <View style={action}>
                    <View style={{ marginLeft: width / 3.3 }}>
                        <Progress.Circle
                        style={progressCircle} 
                        progress={this.state.progress}
                        indeterminate={this.state.indeterminate}
                        direction='clockwise'
                        showsText
                        color='#F66D6A'
                        size={150}
                        />
                    </View>
                    <View>    
                        <TouchableOpacity activeOpacity={0.5} >
                                <Image 
                                source={icSignout}
                                style={icon}
                                resizeMode='contain'
                                />
                        </TouchableOpacity>  
                    </View>                 
                </View>
                <View style={exContent}>
                    <View style={headerContent}>
                        <Text style={textHeader}>CROSS JACKS</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoStyle: {
        flex: 2,
    },
    progressCircle: {
        
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 50,
    },
    exContent: {
        flex: 1,
        
    },
    icon: {
        width: 70,
        height: 70,
    },
    headerContent: {
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#F66D6A'
    },
    processContent: {
        
    },
    progressBar: {
    },
    process: {
        flexDirection: 'row'
    },
    textProcess: {
        fontWeight: 'bold'
    }
});

