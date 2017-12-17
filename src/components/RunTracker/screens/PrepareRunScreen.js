import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid,
    Picker
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';
import Button from '../customControls/Button';
import {
    LATITUDE,
    LONGITUDE,
    LATITUDE_DELTA,
    LONGITUDE_DELTA,
    DEVICE_WIDTH
} from '../../Constants/AppConstants';
import { APP_THEME, MY_GREEN_COLOR } from '../../Constants/Color';

async function checkAndRequestLocation() {
    try {
        const rationale = {
            title: 'Ask',
            message: 'Your app needs to access location'
        };
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, rationale);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permission granted');
        } else {
            console.log('Location permission denied');
        }
    } catch (err) {
        console.log(err);
    }
}

export default class PrepareRunScreen extends React.Component {
    static navigationOptions = {
        title: 'PREPARE',
        headerTintColor: APP_THEME
    };

    constructor(props) {
        super(props);
        this.onPickerValueChange = this.onPickerValueChange.bind(this);
        this.onTargetValueChange = this.onTargetValueChange.bind(this);
    }

    state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        },
        userLocation: {
            latitude: 0,
            longitude: 0
        },
        targetUnit: 'min',
        targetValue: 30,
        disable: true
    };

    componentDidMount() {
        checkAndRequestLocation();
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ userLocation: pos.coords });
                this.map.animateToRegion({
                    ...this.state.userLocation,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                }, 2000);
            },
            (error) => {
                alert('Error: Are location services on?');
                console.log(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    onPickerValueChange(targetUnit) {
        let targetValue = 1;
        switch (targetUnit) {
            case 'm':
                targetValue = 1000;
                break;
            case 'min':
                targetValue = 30;
                break;
            default:
                targetValue = 100;
                break;
        }
        this.setState({ targetUnit, targetValue });
    }

    onTargetValueChange(key, operation) {
        let interval = 0;
        switch (key) {
            case 'm':
                interval = 500;
                break;
            case 'min':
                interval = 5;
                break;
            default:
                interval = 10;
                break;
        }
        operation === '+'
        ? this.setState({ targetValue: this.state.targetValue + interval })
        : this.setState({ targetValue: this.state.targetValue - interval });
    }

    render() {
        const {
            container,
            mapContainer,
            buttonContainer,
            optionContainer,
            valueAdjustContainer,
            map,
            targetVal
        } = styles;
        return (
            <View style={container}>
                <View style={optionContainer}>
                    <Picker
                      prompt="Select your target:"
                      selectedValue={this.state.targetUnit}
                      style={{ height: 35, width: 200, marginBottom: 20 }}
                      mode="dropdown"
                      onValueChange={value => this.onPickerValueChange(value)}
                    >
                        <Picker.Item label="Distance target" value="m" />
                        <Picker.Item label="Duration target" value="min" />
                        <Picker.Item label="Burned calorie target" value="cal" />
                    </Picker>
                    <View style={valueAdjustContainer}>
                        <TouchableOpacity
                          onPress={() => this.onTargetValueChange(this.state.targetUnit, '-')}
                          style={{ marginLeft: DEVICE_WIDTH / 8 }}
                        >
                            <Icon
                              name="minus"
                              size={40}
                              color={MY_GREEN_COLOR}
                            />
                        </TouchableOpacity>
                        <Text style={targetVal}>
                            {this.state.targetValue}
                        </Text>
                        <TouchableOpacity
                          onPress={() => this.onTargetValueChange(this.state.targetUnit, '+')}
                          style={{ marginRight: DEVICE_WIDTH / 8 }}
                        >
                            <Icon
                              name="plus"
                              size={40}
                              color={MY_GREEN_COLOR}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20 }}>
                        {this.state.targetUnit}
                    </Text>
                </View>

                <View style={mapContainer}>
                    <MapView
                      ref={(ref) => { this.map = ref; }}
                      style={map}
                      mapType="standard"
                      showsUserLocation
                      loadingEnabled
                      showsMyLocationButton
                      zoomEnabled={false}
                      scrollEnabled={false}
                      rotateEnabled={false}
                      pitchEnabled={false}
                      cacheEnabled
                      initialRegion={this.state.region}
                      onMapReady={() => this.setState({ disable: false })}
                    />
                </View>

                <View style={buttonContainer}>
                    <Button
                      style={{
                        backgroundColor: MY_GREEN_COLOR,
                        width: DEVICE_WIDTH * 0.75
                        }}
                      content="START RUNNING"
                      onPress={() => this.props.navigation.navigate('ManHinh_Running', { ...this.state })}
                      disable={this.state.disable}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 4,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    optionContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueAdjustContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    targetVal: { fontSize: 45, color: 'black' }
});
