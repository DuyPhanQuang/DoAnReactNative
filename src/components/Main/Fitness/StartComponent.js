import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import TrainingItem from './TrainingItem';
import { getTrainingDataFromServer } from '../../../../networking/Server';
import { getTrainingData, setTrainingData } from './LocalStorage';

export default class StartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            trainingdataFromServer: [],
            isLoading: true,
            data: []
        });
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getTrainingDataFromServer()
            .then((trainingdata) => {
                this.setState({ trainingdataFromServer: trainingdata, isLoading: false });
            })
            .then(() => {
                const data = getTrainingData(() => {
                    const arr = [];
                    for (let i = 0; i < this.state.trainingdataFromServer.length; i++) {
                        arr.push(false);
                    }
                    setTrainingData(arr);
                });
                if (data.length > 0)
                    this.setState({ data });
            })
            .catch((error) => {
                this.setState({ trainingdataFromServer: [] });
            });
    }

    render() {
        return (
            this.state.isLoading
            ?
            <ActivityIndicator
              animating
              color="white"
              size="large"
              hidesWhenStopped
              style={styles.activityIndicator}
            />
            :
            <View style={{ flex: 1 }}>
                <FlatList
                  data={this.state.trainingdataFromServer}
                  renderItem={({ item, index }) => (
                        <TrainingItem
                          item={item}
                          index={index}
                          navigation={this.props.navigation}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  horizontal
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
