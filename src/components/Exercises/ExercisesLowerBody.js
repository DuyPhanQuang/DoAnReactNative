import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getExBottombodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExBottomBodyItem from './ExBottomBodyItem';
import Slide from './SlideExercises';

export default class ExercisesLowerBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exbottombodyFromServer: [],
            loading: true
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExBottombodyFromServer().then((exbottombody) => {
            this.setState({ exbottombodyFromServer: exbottombody, loading: false });
        }).catch(() => {
            this.setState({ exbottombodyFromServer: [] });
        });
    }

    render() {
        return (
            this.state.loading ?
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
                  data={this.state.exbottombodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExBottomBodyItem
                          item={item}
                          index={index}
                          navigation={this.props.navigation}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  showsVerticalIndicator={false}
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
