import pick from 'lodash/pick';

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as ProgressBar from 'react-native-progress';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import { calDistance, calSpeed, addZero, calBurnedCalories, subTwoTime, calPace } from '../utils/Utils';

import StatisticItem from '../customControls/StatisticItem';
import Button from '../customControls/Button';

import {
    DEVICE_WIDTH,
    LONGITUDE_DELTA,
    LATITUDE_DELTA,
    DEVICE_HEIGHT
} from '../../Constants/AppConstants';
import { APP_THEME } from '../../Constants/Color';

const marker = require('../../../Media/appicon/marker.png');

export default class RunningScreen extends React.Component {
    static navigationOptions = {
        title: 'RUNNING',
        headerTintColor: APP_THEME
    };
    constructor(props) {
        super(props);
        this.startTicking = this.startTicking.bind(this);
        this.onStop = this.onStop.bind(this);
    }
    state = {
        stats: {
            distance: 0,
            speed: 0,
            pace: 0,
            duration: '00:00',
            calories: 0
        },
        startLocation: {},
        routeCoordinates: [],
        prevLatLng: {},
        prevMoment: 0,
        speedData: [],
        loading: false,
    }

    componentWillMount() {
        const { userLocation } = this.props.navigation.state.params;
        this.setState({
            startLocation: userLocation,
            prevLatLng: userLocation
        });
    }

    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition(
            (pos) => {
                const {
                    stats,
                    routeCoordinates,
                    prevLatLng,
                    prevMoment,
                    speedData,
                } = this.state;
                const newLatLngs = {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                };
                // const newDistance = round(haversine(prevLatLng, newLatLngs) * 1000);
                const newDistance = calDistance(prevLatLng, newLatLngs);
                const curMoment = new Date().getMilliseconds() / 1000;
                // const curSpeed = newDistance / (curMoment - prevMoment);
                const curSpeed = calSpeed(newDistance, curMoment, prevMoment);
                const curPace = calPace(curSpeed);
                const posLatLngs = pick(pos.coords, ['latitude', 'longitude']);
                const newCal = calBurnedCalories(66, curMoment - prevMoment, curSpeed);
                this.setState({
                    routeCoordinates: routeCoordinates.concat(posLatLngs),
                    stats: {
                        ...stats,
                        pace: curPace,
                        speed: curSpeed,
                        calories: stats.calories + newCal,
                        distance: stats.distance + newDistance,
                    },
                    speedData: speedData.concat(curSpeed),
                    prevLatLng: newLatLngs,
                    prevMoment: curMoment
                });
            },
            err => alert(err.message),
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }
        );
        this.startTicking();
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
        clearInterval(this.startTicking);
    }

    onStop = async () => {
        const {
            stats,
            routeCoordinates,
            startLocation,
            prevLatLng,
            speedData
        } = this.state;
        if (this.state.loading === false) {
            this.setState({ loading: true }, async () => {
                setTimeout(async () => {
                    await this.props.navigation.navigate(
                        'ManHinh_Result',
                        {
                            stats,
                            routeCoordinates,
                            startLocation,
                            stopLocation: prevLatLng,
                            speedData
                        }
                    );
                    this.setState({ loading: false });
                }, 500);
            });
        }
        
        clearInterval(this.startTicking);
    }

    startTicking() {
        let min = 0;
        let sec = 0;
        setInterval(() => {
            sec++;
            if (sec > 59) {
                sec = 0;
                min++;
            }
            const duration = `${addZero(min)}:${addZero(sec)}`;
            this.setState({ stats: { ...this.state.stats, duration } });
        }, 1000);
    }

    processBarForTime(duration, targetValue) {
        const dur = duration.split(':');
        return (parseInt(dur[0], 10) * 60 + parseInt(dur[1], 10)) / (targetValue * 60);
    }

    render() {
        const { targetValue, targetUnit } = this.props.navigation.state.params;
        const {
            row,
            container,
            statisticContainer,
            buttonContainer,
            targetContainer,
            remainingVal,
            progressBarContainer,
            mapContainer
        } = styles;
        const {
            stats,
            startLocation,
            routeCoordinates
        } = this.state;
        const data = [
            {
                title: 'Duration (min)',
                curValue: stats.duration,
                unit: 'min'
            },
            {
                title: 'Distance (m)',
                curValue: stats.distance,
                unit: 'm'
            },
            {
                title: 'Calories (cal)',
                curValue: stats.calories,
                unit: 'cal',
            },
            {
                title: 'Pace',
                curValue: stats.pace,
                unit: 'min/km'
            },
            {
                title: 'Speed (m/s)',
                curValue: stats.speed,
                unit: 'm/s'
            }
        ];
        const index = data.findIndex(i => i.unit === targetUnit);
        const target = data[index];
        data.splice(index, 1);

        // this.setState({ isReached: remaining === targetValue });

        return (
            <ScrollView>
                <View style={mapContainer}>
                    <MapView
                      style={{ ...StyleSheet.absoluteFillObject }}
                      initialRegion={{
                          ...startLocation,
                          latitudeDelta: LATITUDE_DELTA,
                          longitudeDelta: LONGITUDE_DELTA
                        }}
                      showsUserLocation
                      loadingEnabled
                      showsMyLocationButton
                      rotateEnabled={false}
                      pitchEnabled={false}
                      cacheEnabled
                      ref={(ref) => { this.map = ref; }}
                    >
                        <MapView.Marker
                          coordinate={startLocation}
                          image={marker}
                          title="You start here"
                        />
                        <MapView.Polyline
                          coordinates={routeCoordinates}
                          strokeWidth={5}
                          strokeColor="#19B5FE"
                        />
                    </MapView>
                </View>

                <View style={container}>
                    <View style={targetContainer}>
                        <Text style={{ fontSize: 18 }}>
                            {`Remaining ${target.title}`}
                        </Text>
                        <Text style={remainingVal}>
                            { targetUnit === 'min'
                            ? subTwoTime(targetValue, stats.duration)
                            : targetValue - target.curValue }
                        </Text>
                        <View style={progressBarContainer}>
                            <ProgressBar.Bar
                              width={DEVICE_WIDTH * 0.8}
                              progress={targetUnit === 'min'
                              ? this.processBarForTime(stats.duration, targetValue)
                              : target.curValue / targetValue}
                              color="#76FF03"
                              unfilledColor="gray"
                              animationType="timing"
                            />
                            <Icon name="flag-checkered" size={25} color="black" style={{ marginLeft: 10 }} />
                        </View>
                    </View>
                    <View style={statisticContainer}>
                        <View style={row}>
                            <StatisticItem title={data[0].title} value={data[0].curValue} />
                            <StatisticItem title={data[1].title} value={data[1].curValue} />
                        </View>
                        <View style={row}>
                            <StatisticItem title={data[2].title} value={data[2].curValue} />
                            <StatisticItem title={data[3].title} value={data[3].curValue} />
                        </View>
                    </View>

                    <View style={buttonContainer}>
                        <Button
                          content="STOP"
                          style={{
                            width: 300,
                            height: DEVICE_HEIGHT * 0.07,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            backgroundColor: 'red'
                          }}
                          onPress={this.onStop}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT * 0.9,
        flexDirection: 'column'
    },
    mapContainer: {
        height: DEVICE_HEIGHT * 0.4,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    targetContainer: {
        flexDirection: 'column',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statisticContainer: {
        flex: 4,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    remainingVal: { fontSize: 50, color: 'black', marginBottom: 10 },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
