import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import Video from 'react-native-video';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { APP_THEME } from '../Constants/Color';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import { getTrainingData, setTrainingData } from '../Main/Fitness/LocalStorage';

export default class VideoTraining extends Component {
    constructor(props) {
        super(props);
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
    }
    state = {
        canNext: false,
        currentVideoIndex: 0,
        vids: [],
        duration: 1,
        progress: 0,
    }

    componentWillMount() {
        this.setState({ vids: this.props.navigation.state.params.data });
    }

    onLoadVideo(data) {
        this.setState({
            duration: Math.round(data.duration)
        });
        this.setState({ canNext: false });
    }

    async forward() {
        const { currentVideoIndex, vids } = this.state;
        if (currentVideoIndex === vids.length - 1) {
            console.log('forward1');
            let arr = [];
            await getTrainingData(() => {}).then((val) => { arr = val; });
            arr[this.props.navigation.state.params.index] = true;
            setTrainingData(arr);
            this.props.refreshFinish();
            this.props.navigation.goBack();
            return;
        }
        this.setState({
            currentVideoIndex: currentVideoIndex + 1,
        });
        this.video.seek(0);
    }

    back() {
        this.setState({
            currentVideoIndex: this.state.currentVideoIndex - 1
        });
        this.video.seek(0);
    }

    render() {
        const {
            container, videoContainer, contentContainer, video, progressContainer, text, videoTitle, nextVid, remainingTime
        } = styles;
        const {
            currentVideoIndex,
            vids, duration, progress, canNext
        } = this.state;
        const totalVideo = vids.length;
        return (
            <View style={container}>
                <View style={videoContainer}>
                    <Video
                      ref={(ref) => { this.video = ref; }}
                      source={{ uri: vids[currentVideoIndex].Url }}
                      style={video}
                      resizeMode="cover"
                      onProgress={prog =>
                        this.setState({ progress: Math.round(prog.currentTime) })}
                      onLoad={data => this.onLoadVideo(data)}
                      onEnd={() => this.setState({ canNext: true })}
                    />
                </View>
                <View style={contentContainer}>
                    <View style={progressContainer}>
                        <TouchableOpacity
                          disabled={currentVideoIndex === 0}
                          onPress={this.back}
                        >
                            <Icon
                              name="navigate-before"
                              size={45}
                              color={currentVideoIndex !== 0 ? APP_THEME : 'gray'}
                            />
                        </TouchableOpacity>
                        <View>
                            <AnimatedCircularProgress
                              size={170}
                              width={5}
                              fill={Math.round(progress / duration * 100)}
                              tintColor={APP_THEME}
                              backgroundColor="gray"
                              rotation={360}
                            >
                                {
                                    fill => (
                                        <Text style={remainingTime}>
                                            { duration - progress }
                                        </Text>
                                    )
                                }
                            </AnimatedCircularProgress>
                        </View>
                        <TouchableOpacity
                          onPress={this.forward}
                          disabled={!canNext}
                        >
                            <Icon
                              name="navigate-next"
                              size={45}
                              color={canNext ? APP_THEME : 'gray'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={text}>
                        <Text style={videoTitle}>
                            {vids[currentVideoIndex].TitleName}
                        </Text>
                        <Text style={nextVid}>
                            {
                                currentVideoIndex + 1 === vids.length
                                ? 'This is the last video'
                                : `Next: ${vids[currentVideoIndex + 1].TitleName}`
                            }
                        </Text>
                        <Text>{currentVideoIndex + 1}/{totalVideo}</Text>
                    </View>
                    <View>
                        <Progress.Bar
                          width={DEVICE_WIDTH}
                          height={DEVICE_HEIGHT / 20}
                          borderRadius={0}
                          color={APP_THEME}
                          progress={(currentVideoIndex + 1) / totalVideo}
                          unfilledColor="#FCE4EC"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        flex: 2,
        backgroundColor: '#000',
        width: DEVICE_WIDTH
    },
    contentContainer: {
        flex: 3,
        alignItems: 'stretch'
    },
    video: {
        ...StyleSheet.absoluteFillObject
    },
    progressContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    remainingTime: {
        color: APP_THEME,
        fontSize: 40,
        position: 'absolute',
        top: 60,
        left: 70,
        textAlign: 'center'
    },
    videoTitle: {
        color: APP_THEME,
        fontSize: 25,
    },
    nextVid: {
        color: '#000',
    }
});
