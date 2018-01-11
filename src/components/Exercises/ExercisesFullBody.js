import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getExFullbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExFullBodyItem from './ExFullBodyItem';
import Slide from './SlideExercises';

export default class ExercisesFullBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exfullbodyFromServer: [],
            isLoading: true,

        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExFullbodyFromServer().then((exfullbody) => {
            this.setState({ exfullbodyFromServer: exfullbody, isLoading: false });
        }).catch(() => {
            this.setState({ exfullbodyFromServer: [] });
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
                  data={this.state.exfullbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExFullBodyItem
                          item={item}
                          index={index}
                          navigation={this.props.navigation}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  showsVerticalScrollIndicator={false}
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
