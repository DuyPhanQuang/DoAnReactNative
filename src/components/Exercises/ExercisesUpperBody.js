import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getExTopbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExTopBodyItem from './ExFullBodyItem';

export default class ExercisesUpperBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            extopbodyFromServer: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExTopbodyFromServer().then((extopbody) => {
            this.setState({ extopbodyFromServer: extopbody });
        }).catch((error) => {
            this.setState({ extopbodyFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.extopbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExTopBodyItem
                          item={item}
                          index={index}
                        />
                  )}
                  keyExtractor={(item, index) => item.Id_top}
                />
            </View>
        );
    }
}
