import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import moment from 'moment';

import { APP_THEME, WORKOUT_DETAIL_COLOR } from '../../Constants/Color';
import { DEVICE_HEIGHT, LATITUDE_DELTA, LONGITUDE_DELTA, DEVICE_WIDTH } from '../../Constants/AppConstants';

import Headline from '../customControls/Headline';
import WODItem from '../customControls/WODItem';

const marker = require('../../../Media/appicon/marker.png');

export default class ResultScreen extends Component {
    // static navigationOptions = {
    //     title: 'RESULT',
    //     headerTintColor: APP_THEME,
    // };

    constructor(props) {
        super(props);
        const today = moment().format('ddd, MMM D, YYYY - HH:mm');
        this.setState({ today });
        const { speedData } = this.props.navigation.state.params;
        this.setState({ maxSpeed: Math.max(speedData) });
        this.setState({ avgSpeed: +((speedData.reduce((sum, e) => sum + e, 0) / speedData.length).toFixed(2)) });
    }

    state = {
        today: '',
        maxSpeed: 0,
        avgSpeed: 0,
        loading: false,
    }

    render() {
        const {
            // routeCoordinates,
            startLocation,
            stopLocation,
            stats
         } = this.props.navigation.state.params;
        const routeCoordinates = [
            {
                latitude: 10.8840,
                longitude: 106.782
            },
            {
                latitude: 10.8844,
                longitude: 106.782
            },
            {
                latitude: 10.8844,
                longitude: 106.786
            }
        ];

        const {
            overview,
            row,
            workoutDetail,
            durationOverview
        } = styles;
        return (
            <ScrollView showsVerticalIndicator={false}>
                <View style={{ height: DEVICE_HEIGHT * 0.4, backgroundColor: 'red', marginBottom: 20 }}>
                    <MapView
                      style={{ ...StyleSheet.absoluteFillObject }}
                      initialRegion={{
                            ...startLocation,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }}
                      loadingEnabled
                      rotateEnabled={false}
                      pitchEnabled={false}
                      cacheEnabled
                      ref={(ref) => { this.map = ref; }}
                    >
                        <MapView.Marker
                          coordinate={startLocation}
                          image={marker}
                          title="You started here"
                        />
                        <MapView.Marker
                          coordinate={stopLocation}
                          title="You stopped here"
                          image={marker} // need changes
                        />
                        <MapView.Polyline
                          coordinates={routeCoordinates}
                          strokeWidth={5}
                          strokeColor="#19B5FE"
                        />
                    </MapView>
                </View>

                <Headline title="OVERVIEW" />
                <View style={overview}>
                    <Text>{this.state.today}</Text>
                    <View style={durationOverview}>
                        <Text style={{ fontSize: 33, color: 'black' }}>30</Text>
                        <Text style={{ fontSize: 26, color: 'black' }}>mins</Text>
                        <Text style={{ fontSize: 33, color: 'black' }}>42</Text>
                        <Text style={{ fontSize: 26, color: 'black' }}>secs</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: 'black' }}>3910 m</Text>
                    <Entypo
                      name="flag"
                      size={40}
                      color="#E64A19"
                      style={{ marginTop: 10 }}
                    />
                </View>

                <Headline title="CHART" />
                <View style={{ margin: 20 }}>
                    <Text>[Chart]</Text>
                </View>

                <Headline title="WORKOUT DETAILS" />
                <View style={workoutDetail}>
                    <View style={row}>
                        <WODItem
                          title="Duration"
                          value={stats.duration}
                          unit="min"
                        >
                            <Material
                              name="timer"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>

                        <WODItem
                          title="Distance"
                          value={stats.distance}
                          unit="m"
                        >
                            <Material
                              name="run"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>
                    </View>
                    <View style={row}>
                        <WODItem
                          title="Calories"
                          value={stats.calories}
                          unit="cal"
                        >
                            <Simple
                              name="fire"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>
                        <WODItem
                          title="Steps"
                          value={stats.steps}
                          unit=""
                        >
                            <Foundation
                              name="foot"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>
                    </View>
                    <View style={row}>
                        <WODItem
                          title="Avg Speed"
                          value={this.state.avgSpeed}
                          unit="m/s"
                        >
                            <Simple
                              name="speedometer"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>
                        <WODItem
                          title="Max Speed"
                          value={this.state.maxSpeed}
                          unit="m/s"
                        >
                            <Material
                              name="speedometer"
                              size={40}
                              color={WORKOUT_DETAIL_COLOR}
                            />
                        </WODItem>
                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 20, width: 300, marginLeft: 60 }}>
                    <TouchableOpacity
                      onPress={
                          () => {
                              if (this.state.loading === false) {
                                  this.setState({ loading: true }, async () => {
                                      setTimeout(async () => {
                                          await this.props.navigation.navigate('ManHinh_Fitness');
                                          this.setState({ loading: false });
                                      }, 300);
                                  });
                              }
                          }
                      }
                      activeOpacity={0.5}
                      style={styles.button}
                    >
                        <Text style={styles.buttonText}>DONE TRAINING</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    overview: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-between'
    },
    workoutDetail: {
        marginHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingVertical: 15,
        alignItems: 'stretch'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    durationOverview: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        marginVertical: 10,
        alignSelf: 'stretch',
        marginHorizontal: 60
    },
    param: {
        height: DEVICE_HEIGHT * 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    data: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataText: {
        fontSize: 18,
        color: 'black'
    },
    button: {
        height: DEVICE_HEIGHT * 0.07,
        backgroundColor: '#FFBF57',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },

});
