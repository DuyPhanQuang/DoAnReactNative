import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { getExBottombodyFromServer } from '../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import ExBottomBodyItem from './ExBottomBodyItem';

export default class ExercisesLowerBody extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            exbottombodyFromServer: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getExBottombodyFromServer().then((exbottombody) => {
            this.setState({ exbottombodyFromServer: exbottombody });
        }).catch((error) => {
            this.setState({ exbottombodyFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.exbottombodyFromServer}
                  renderItem={({ item, index }) => (
                        <ExBottomBodyItem
                          item={item}
                          index={index}
                        />
                  )}
                  keyExtractor={(item, index) => item.Id_bottom}
                />
            </View>
        );
    }
}
