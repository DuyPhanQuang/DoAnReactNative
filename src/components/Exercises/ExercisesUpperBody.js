import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getExTopbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExTopBodyItem from './ExFullBodyItem';
import Slide from './SlideExercises';

export default class ExercisesUpperBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            extopbodyFromServer: [],
            isLoading: true,
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExTopbodyFromServer().then((extopbody) => {
            this.setState({ extopbodyFromServer: extopbody, isLoading: false });
        }).catch(() => {
            this.setState({ extopbodyFromServer: [] });
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
                  data={this.state.extopbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExTopBodyItem
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
