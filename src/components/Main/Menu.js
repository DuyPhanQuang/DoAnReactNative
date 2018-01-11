import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import icProfile from '../../Media/appicon/ic_profile.png';
import icHome from '../../Media/appicon/ic_home.png';
import icWorkoutSchedule from '../../Media/appicon/icon_workoutSchedule.png';
import icMyWeight from '../../Media/appicon/ic_weight.png';
import icExercises from '../../Media/appicon/ic_exercises.png';
import icSettings from '../../Media/appicon/ic_settings.png';
import icRateTheApp from '../../Media/appicon/ic_RateTheApp.png';
import icTips from '../../Media/appicon/ic_tips.png';
import icSupport from '../../Media/appicon/ic_support.png';
import icChangeInfo from '../../Media/appicon/ic_changeinfo.png';
import icSignOut from '../../Media/appicon/ic_signout.png';
import ShowInfo from './ShowInfo';
import { APP_THEME } from '../Constants/Color';
// import { setTimeout } from 'timers';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: true, loading: false };
    }

    render() {
        const {
            container, btnStyle, btnTextStyle, btnStyleAfter,
            btnTextStyleAfter, logInStyle, iconStyle, menuStyle
        } = styles;
        const { navigate } = this.props.navigation;
        const logOutJSX = (
            <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('ManHinh_Authentication'); }}
              style={btnStyle}
            >
                <Text style={btnTextStyle} >SIGN IN</Text>
            </TouchableOpacity>
            </View>
        );
        const logInJSX = (
            <View style={logInStyle} >

                    <TouchableOpacity
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icHome} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={
                        () => {
                            if (this.state.loading === false) {
                                this.setState({ loading: true }, async () => {
                                    setTimeout(async () => {
                                        await navigate('ManHinh_WorkoutSchedule');
                                        this.setState({ loading: false });
                                    }, 500);
                                });
                            }
                        }
                      }
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icWorkoutSchedule} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Workout Schedule</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                          () => {
                              if (this.state.loading === false) {
                                  this.setState({ loading: true }, async () => {
                                      setTimeout(async () => {
                                          await navigate('ManHinh_MyWeight');
                                          this.setState({ loading: false });
                                      }, 500);
                                  });
                              }
                          }
                      }
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icMyWeight} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >My Weight</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                          () => {
                            if (this.state.loading === false) {
                                this.setState({ loading: true }, async () => {
                                    setTimeout(async () => {
                                        await navigate('ManHinh_BasicFlatList');
                                        this.setState({ loading: false });
                                    }, 500);
                                });
                            }
                          }
                      }
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icTips} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Tips</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                          () => {
                            if (this.state.loading === false) {
                                this.setState({ loading: true }, async () => {
                                    setTimeout(async () => {
                                        await navigate('ManHinh_MainExercises');
                                        this.setState({ loading: false });
                                    }, 500);
                                });
                            }
                          }
                      }
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icExercises} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Exercises</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyleAfter}>
                        <View style={menuStyle}>
                            <Image source={icSettings} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={btnStyleAfter}
                      onPress={
                          () => {
                            if (this.state.loading === false) {
                                this.setState({ loading: true }, async () => {
                                    setTimeout(async () => {
                                        navigate('ManHinh_RateTheApp');
                                        this.setState({ loading: false });
                                    }, 500);
                                });
                            }
                          }
                      }
                    >
                        <View style={menuStyle}>
                            <Image source={icRateTheApp} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Rate the App</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                          () => {
                            if (this.state.loading === false) {
                                this.setState({ loading: true }, async () => {
                                    setTimeout(async () => {
                                        navigate('ManHinh_Support');
                                        this.setState({ loading: false });
                                    }, 500);
                                });
                            }
                          }
                      }
                      style={btnStyleAfter}
                    >
                        <View style={menuStyle}>
                            <Image source={icSupport} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Support</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyleAfter}>
                        <View style={menuStyle}>
                            <Image source={icChangeInfo} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Change Info</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnStyleAfter}>
                        <View style={menuStyle}>
                            <Image source={icSignOut} style={iconStyle} />
                            <Text style={btnTextStyleAfter} >Sign out</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        );
        const mainJSX = this.state.isLoggedIn ? logInJSX : logOutJSX;
        return (
            <View style={container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ShowInfo />
                    { mainJSX }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#ECECEC'
    },
    menuStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    iconProfileStyle: {
        width: 200,
        height: 200,
        marginBottom: 30,
        marginVertical: 10,
    },
    btnStyle: {
        backgroundColor: APP_THEME,
        height: 70,
        paddingHorizontal: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnTextStyle: {
        fontSize: 30
    },
    btnStyleAfter: {
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10

    },
    btnTextStyleAfter: {
        fontSize: 20,
        fontFamily: 'Cochin',
        paddingLeft: 20,
        color: '#000',
    },
    userName: {
        fontSize: 30
    },
    logInStyle: {
        flex: 4,
        backgroundColor: '#ECECEC',
        // flexDirection: 'column',
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: '#9c9494',
        paddingVertical: 10
    },
    iconStyle: {
        width: 30,
        height: 30,
    },

});
