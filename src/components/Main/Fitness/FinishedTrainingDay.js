import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Slide from '../../Exercises/SlideExercises';
import FinishedTrainingDayItem from './FinishedTrainingDayItem';

export default class FinishedTrainingDay extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        resultTrainingDay: [],
        dataResult: {
            totaltime: '',
            totalex: '',
        }
    }

    componentWillMount() {
        this.setState({
            resultTrainingDay: this.props.navigation.state.params.data,
            dataResult: this.props.navigation.state.params,
        });
    }

    render() {
        const { dataResult, resultTrainingDay } = this.state;
        const { container, title, txtTitle, data, dataDetail,
            txtDataDetail, iconData, dataDetailSpecial, slide, list,
        } = styles;
        return (
                <View style={container}>
                    <View style={title}>
                        <Text style={txtTitle}>CARDIO</Text>
                    </View>
                    <View style={data}>
                        <View style={dataDetail}>
                            <Text style={txtDataDetail}>DURATION TIME</Text>
                            <Image
                              style={iconData}
                              source={require('../../../Media/appicon/duration.jpg')}
                            />
                            <Text style={[txtDataDetail, { color: '#000' }]}>{dataResult.totaltime} Min</Text>
                        </View>
                        <View style={dataDetailSpecial}>
                            <Text style={txtDataDetail}>EXERCISES</Text>
                            <Image
                              style={iconData}
                              source={require('../../../Media/appicon/exercises.jpg')}
                            />
                            <Text style={[txtDataDetail, { color: '#000' }]}>{dataResult.totalex} Exercises</Text>
                        </View>
                        <View style={dataDetail}>
                            <Text style={txtDataDetail}>WORKOUT TIME</Text>
                            <Image
                              style={iconData}
                              source={require('../../../Media/appicon/workouttime.jpg')}
                            />
                            <Text style={[txtDataDetail, { color: '#000' }]}>4 Min</Text>
                        </View>
                    </View>
                    <View style={slide}>
                        <Slide />
                    </View>

                    <View style={list}>
                       
                        <FlatList
                          showsVerticalScrollIndicator={false}
                          data={resultTrainingDay}
                          renderItem={({ item, index }) =>
                            (
                                <FinishedTrainingDayItem
                                  item={item}
                                  index={index + 1}
                                />
                            )
                          }
                          keyExtractor={(item, index) => item.TitleName}
                        />
                        
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#FFF'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtTitle: {
        fontSize: 23,
        fontFamily: 'Cochin',
        color: '#000'
    },
    data: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataDetail: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    dataDetailSpecial: {
        flex: 1,
        alignItems: 'center',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#ECECEC',
        borderRightColor: '#ECECEC'
    },
    txtDataDetail: {
        fontSize: 15,
        fontFamily: 'Cochin',
    },
    slide: {
        flex: 1.5,
    },
    list: {
        flex: 4
    },
    iconData: {
        width: 45,
        height: 45,
    }
});