import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DEVICE_HEIGHT } from '../../Constants/AppConstants';
import { getTrainingData } from './LocalStorage';

const icNumberOne = require('../../../Media/appicon/one.png');
const icStar = require('../../../Media/appicon/starworkout.png');
const icInfo = require('../../../Media/appicon/info.png');

export default class TrainingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: true
        };
    }

    componentWillMount() {
        // console.log(this.props.isFinished);
        this.setState({ finished: this.props.isFinished });
    }

    refreshFinish() {
        this.setState({ finished: true });
    }

    render() {
        const {
            wrapper, title, titleText1, titleText2, body,
            cardio, moreWorkouts, icon, info, infoText, detailText, button,
            buttonText, disableButton
        } = styles;
        const { finished } = this.state;
        const { item, index } = this.props;
        return (
            <View style={wrapper} >
                <View style={title} >
                    <Text style={titleText1} >Today</Text>
                    <Text style={titleText2} >{item.Name}</Text>
                </View>
                <View style={body} >
                    <View style={cardio} >
                        <View >
                            <Image
                              source={icNumberOne}
                              style={icon}
                              resizeMode="contain"
                            />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Cardio</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={detailText} >
                                    {item.TotalTime} minutes
                                </Text>
                                <Text style={detailText} >
                                    {item.TotalExercises} exercises
                                </Text>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity
                              activeOpacity={0.5}
                              onPress={() => this.props.navigation.navigate(
                                  'ManHinh_FinishedTrainingDay',
                                    {
                                    data: item.danhsachVideo,
                                    index,
                                    totaltime: item.TotalTime,
                                    totalex: item.TotalExercises,
                                    }
                                )
                              }
                            >
                                <Icon name="info-with-circle" size={35} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={moreWorkouts} >
                        <View >
                            <Image
                              source={icStar}
                              style={icon}
                              resizeMode="contain"
                            />
                        </View>
                        <View style={info}>
                            <Text style={infoText} >Add more Workouts</Text>
                            <View>
                                <Text style={detailText} >
                                To boost your results.
                                </Text>
                            </View>
                        </View>

                    </View>

                        <TouchableOpacity
                          activeOpacity={0.5}
                          disabled={finished}
                          onPress={() => this.props.navigation.navigate('ManHinh_VideoTraining', { data: item.danhsachVideo, index, refreshFinish: this.refreshFinish })}
                        >
                            <View style={finished ? disableButton : button}>
                                <Text style={buttonText} >
                                    {finished ? 'FINISHED' : 'START'}
                                </Text>
                            </View>
                        </TouchableOpacity>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: DEVICE_HEIGHT * 0.65,
        backgroundColor: '#FFF',
        marginTop: DEVICE_HEIGHT * 0.02,
        marginBottom: DEVICE_HEIGHT * 0.02,
        width: DEVICE_HEIGHT * 0.5,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginLeft: DEVICE_HEIGHT * 0.05,
    },
    title: {
        flex: 1,
        paddingVertical: 30,
        borderColor: 'transparent',
        borderWidth: 2,
        borderBottomColor: '#E5E5E5',
        // shadowColor: '#5f5555'
    },
    titleText1: {
        fontSize: 25,
        fontFamily: 'Cochin',
        color: '#818383'
    },
    titleText2: {
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#505050'
    },
    body: {
        flex: 4
    },
    cardio: {
        flexDirection: 'row',
        paddingVertical: 30
    },
    icon: {
        width: 35,
        height: 35,
    },
    info: {
        flex: 1,
        paddingHorizontal: 20
    },
    infoText: {
        fontFamily: 'Cochin',
        fontSize: 25,
        color: '#505050'
    },
    detailText: {
        fontFamily: 'Cochin',
        fontSize: 15,
        color: '#818383',
        paddingRight: 30
    },
    moreWorkouts: {
        flexDirection: 'row',
        paddingBottom: 50
    },
    button: {
        height: DEVICE_HEIGHT * 0.08,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    disableButton: {
        height: DEVICE_HEIGHT * 0.08,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#FFF'
    }
});
