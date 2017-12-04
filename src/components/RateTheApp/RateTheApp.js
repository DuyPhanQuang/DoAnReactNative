import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class RateTheApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        const { container, textTitle, textTitle2, title, rateWrap, textRate,
                buttonWrap, buttonAfter, buttonBefore 
        } = styles;
        return (
            <View style={container}>
                <View style={title}>
                    <Text style={textTitle}>We tried to make this app helpful {'\n'} & easy to use. We'd be happy if {'\n'}
                      you could rate us and post a {'\n'}                       review.
                    </Text>
                </View>
                <View style={rateWrap}>
                    <StarRating
                        disable={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starColor={'#FFF'}
                        starSize={60}
                    />
                    <View style={{ marginTop: 30 }}>
                        <Text style={textRate}>The best we can get</Text>
                    </View>
                 </View>
                <View style={buttonWrap}>
                    <TouchableOpacity 
                     activeOpacity={0.5}
                    >
                        <View style={buttonAfter}>  
                            <Text style={textTitle}>RATE</Text>
                        </View>
                    </TouchableOpacity>
                </View>    
            </View>
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F66D6A',
        flex: 1,
        alignItems: 'center',
        
    },
    textTitle: {
        fontSize: 20,
        color: '#FFF'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 20,
    },
    rateWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,

    },
    textRate: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '300',
    },
    buttonAfter: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH - 120,
        height: DEVICE_HEIGHT / 14,
        borderColor: '#FFF',
        borderRadius: 100,
        borderWidth: 2,
    },
    buttonBefore: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH - 400,
        height: DEVICE_HEIGHT / 14,
        borderColor: '#9c9494',
        borderRadius: 100,
        borderWidth: 2,
    },
    buttonWrap: {
        flex: 1,
    }
});
