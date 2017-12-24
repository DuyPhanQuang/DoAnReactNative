import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getExMidbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExMidBodyItem from './ExMidBodyItem';

export default class ExercisesMiddleBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exmidbodyFromServer: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExMidbodyFromServer().then((exmidbody) => {
            this.setState({ exmidbodyFromServer: exmidbody });
        }).catch((error) => {
            this.setState({ exmidbodyFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.exmidbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExMidBodyItem
                          item={item}
                          index={index}
                        />
                  )}
                  keyExtractor={(item, index) => item.Id_mid}
                />
            </View>
        );
    }
}
