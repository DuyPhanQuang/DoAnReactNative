import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import TrainingItem from './TrainingItem';
import { getTrainingDataFromServer } from '../../../../networking/Server';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../../Constants/AppConstants';

export default class StartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            trainingdataFromServer: []
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getTrainingDataFromServer().then((trainingdata) => {
            this.setState({ trainingdataFromServer: trainingdata });
        }).catch((error) => {
            this.setState({ trainingdataFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.trainingdataFromServer}
                  renderItem={({ item, index }) => (
                        <TrainingItem
                          item={item}
                          index={index}
                          onPress={this.props.onPress}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  horizontal
                />
            </View>
        );
    }
}
