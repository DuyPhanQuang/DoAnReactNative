import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getExFullbodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExFullBodyItem from './ExFullBodyItem';

export default class ExercisesFullBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exfullbodyFromServer: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExFullbodyFromServer().then((exfullbody) => {
            this.setState({ exfullbodyFromServer: exfullbody });
        }).catch((error) => {
            this.setState({ exfullbodyFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.exfullbodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExFullBodyItem
                          item={item}
                          index={index}
                        />
                  )}
                  keyExtractor={(item, index) => item.Id_full}
                />
            </View>
        );
    }
}
