import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Slide from './SlideExercises';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';

export default class DetailExercisesTop extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        vids: {
            title: '',
            des: '',
            bre: '',
            urlvids: ''
        },
        paused: true,
        currentTime: 0.0,
        duration: 0.0,
        muted: false,
        volume: 1,
        rate: 1,
        resizeMode: 'contain',
        loading: false,
    }

    componentWillMount() {
        this.setState({ vids: this.props.navigation.state.params });
    }

    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };
    onEnd = () => {
        this.setState({ paused: true });
        this.video.seek(0);
    };
    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };
    onAudioBeComingNoisy = () => {
        this.setState({ paused: true });
    };
    onAudioFocusChanged = (event: {hasAudioFocus: boolean}) => {
        this.setState({ paused: !event.hasAudioFocus });
    };
    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    }
    renderRateControl(rate) {
        const isSelected = (this.state.rate === rate);
        return (
            <TouchableOpacity
              onPress={() => { this.setState({ rate }); }}
            >
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        );
    }
    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode === resizeMode);
        return (
            <TouchableOpacity
              onPress={() => { this.setState({ resizeMode }); }}
            >
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        );
    }
    renderVolumeControl(volume) {
        const isSelected = (this.state.volume === volume);
        return (
            <TouchableOpacity
              onPress={() => { this.setState({ volume }); }}
            >
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        );
    }
    
    render() {
        const {
             container, videoContent, descripton
            , instructions, video
        } = styles;
        const { vids } = this.state;
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <View style={container}>
                <View style={{ marginHorizontal: 20, width: 35, height: 35 }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={
                      () => {
                          if (this.state.loading === false) {
                              this.setState({ loading: true }, async () => {
                                setTimeout(async () => {
                                    await this.props.navigation.goBack();
                                    this.setState({ loading: false });
                                }, 500);
                              });
                          }
                      }
                  }
                >
                    <Icon name="ios-close" size={35} color="#F66D6A" />
                </TouchableOpacity>
                </View>
                <View style={videoContent}>
                    <TouchableOpacity
                      style={video}
                      onPress={() => this.setState({ paused: !this.state.paused })}
                    >
                    <Video
                      ref={(ref) => { this.video = ref; }}
                      source={{ uri: vids.urlvids }}
                      resizeMode={this.state.resizeMode}
                      style={video}
                      rate={this.state.rate}
                      volume={this.state.volume}
                      muted={this.state.muted}
                      pause={this.state.paused}
                      onLoad={this.onLoad}
                      onProgress={this.onProgress}
                      onEnd={this.onEnd}
                      repeat={false}
                      onAudioBecomingNoisy={this.onAudioBeComingNoisy}
                      onAudioFocusChanged={this.onAudioFocusChanged}
                    />
                    </TouchableOpacity>
                    <View style={styles.controls}>
                        <View style={styles.generalControls}>
                            <View style={styles.rateControl}>
                                {this.renderRateControl(0.25)}
                                {this.renderRateControl(0.5)}
                                {this.renderRateControl(1.0)}
                                {this.renderRateControl(1.5)}
                                {this.renderRateControl(2.0)}
                            </View>
                            <View style={styles.volumeControl}>
                                {this.renderVolumeControl(0.5)}
                                {this.renderVolumeControl(1)}
                                {this.renderVolumeControl(1.5)}
                            </View>
                            <View style={styles.resizeModeControl}>
                                {this.renderResizeModeControl('cover')}
                                {this.renderResizeModeControl('contain')}
                                {this.renderResizeModeControl('stretch')}
                            </View>
                        </View>
                        <View style={styles.trackingControls}>
                            <View style={styles.progress}>
                                <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                                <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={{ flex: 1, borderRadius: 30 }}>
                    <Slide />
                </View> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={descripton}>
                        <Text style={{ fontSize: 30, color: '#F66D6A' }}>{vids.title}</Text>
                        <Text style={[instructions, { color: '#000' }]}>INSTRUCTIONS</Text>
                        <Text style={[instructions, { color: '#9C9494' }]}>{vids.des}</Text>
                        <Text style={[instructions, { color: '#000', }]}>BREATHING</Text>
                        <Text style={[instructions, { color: '#9C9494' }]}>{vids.bre}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
    },
    videoContent: {
        flex: 1,
        width: DEVICE_WIDTH,
        backgroundColor: '#000',
    },
    descripton: {
        flex: 4,
        marginHorizontal: 20,
        paddingTop: 10,
        marginVertical: 10,
    },
    instructions: {
        fontSize: 20,
    },
    video: {
        ...StyleSheet.absoluteFillObject
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: '#F66D6A',
        paddingHorizontal: 2,
        lineHeight: 12,
    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    trackingControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
      },
    innerProgressCompleted: {
        height: 10,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 10,
        backgroundColor: '#2C2C2C',
    },
});