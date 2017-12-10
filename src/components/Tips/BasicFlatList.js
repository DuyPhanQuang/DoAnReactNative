import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
// import flatListData from './flatListData';
import FlatListItem from './FlatListItem';
import { getTipsFromServer } from '../../../networking/Server';

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            refreshing: false,
            tipsFromServer: [],
            // data save all in this state.
            // each data saved so render dc call lai
        });
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }

    onRefresh = () => {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        this.setState({ refreshing: true });
        getTipsFromServer().then((tips) => {
            this.setState({ tipsFromServer: tips }); // call this function after finished getTipsFromServer().
            this.setState({ refreshing: false });
        }).catch((error) => {
            this.setState({ tipsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2 }} />
                <View style={{ flex: 5, marginTop: 22 }}>
                    <FlatList
                      data={this.state.tipsFromServer}
                      renderItem={({ item, index }) =>
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                         (
                        <FlatListItem item={item} index={index} />)
                    }
                      keyExtractor={(item, index) => item.Id}
                      refreshControl={
                        <RefreshControl
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh}
                        />
                    }
                    />
                </View>
            </View>
        );
    }
}
