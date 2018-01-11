import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getExMidbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExMidBodyItem from './ExMidBodyItem';
import Slide from './SlideExercises';

export default class ExercisesMiddleBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exmidbodyFromServer: [],
            isLoading: true,
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExMidbodyFromServer().then((exmidbody) => {
            this.setState({ exmidbodyFromServer: exmidbody, isLoading: false });
        }).catch(() => {
            this.setState({ exmidbodyFromServer: [] });
        });
    }

    render() {
        return (
            this.state.isLoading ?
            <ActivityIndicator
              animating
              color="#F66D6A"
              size="large"
              hidesWhenStopped
              style={styles.activityIndicator}
            /> :
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Slide />
                </View>
                <View style={{ flex: 4 }}>
                <FlatList
                  data={this.state.exmidbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExMidBodyItem
                          item={item}
                          index={index}
                          navigation={this.props.navigation}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  showsVerticalScroolIndicator={false}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
