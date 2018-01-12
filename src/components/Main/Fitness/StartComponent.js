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

    refreshDataFromServer = async () => {
        await getTrainingDataFromServer()
            .then((trainingdata) => {
                this.setState({ trainingdataFromServer: trainingdata });
            })
            .catch((error) => {
                this.setState({ trainingdataFromServer: [] });
            });

        let data = null;
        await getTrainingData()
            .then((val) => { data = val; });
        // console.log(data);

        if (data === null) {
            const arr = [];
            for (let i = 0; i < this.state.trainingdataFromServer.length; i++) {
                arr.push(false);
            }
            await setTrainingData(arr);
            data = arr;
        }
        this.setState({ data, isLoading: false });
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
                          isFinished={this.state.data[index]}
                        />
                  )}
                  keyExtractor={(item, index) => item.Name}
                  horizontal
                  showsHorizontalScrollIndicator={false}
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
