import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TrainingItem from './TrainingItem';
import { getTrainingDayFromServer } from '../../../../networking/Server';

export default class StartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            trainingdayFromServer: [],
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getTrainingDayFromServer().then((trainingday) => {
            this.setState({ trainingdayFromServer: trainingday });
        }).catch((error) => {
            this.setState({ trainingdayFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.trainingdayFromServer}
                  renderItem={({ item, index }) => (
                        <TrainingItem
                          item={item}
                          index={index}
                          onPress={this.props.onPress}
                        />)}
                  keyExtractor={(item, index) => item.Name}
                  horizontal
                />
            </View>
        );
    }
}
