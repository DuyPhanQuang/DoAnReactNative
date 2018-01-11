import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
// import flatListData from './flatListData';
import TipsItem from './TipsItem';
import { getTipsFromServer } from '../../../networking/Server';
import Slide from '../Exercises/SlideExercises';

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
        }).catch(() => {
            this.setState({ tipsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
                <View style={{ flex: 2 }}>
                    <Slide />
                </View>
                <View style={{ flex: 5, marginTop: 2 }}>
                    <FlatList
                      showsVerticalScrollIndicator={false}
                      data={this.state.tipsFromServer}
                      renderItem={({ item, index }) =>
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                         (
                        <TipsItem 
                          item={item}
                          index={index + 1}
                          onShow={() => { navigate('ManHinh_TipOne'); }}
                        />
                         )
                      }
                      keyExtractor={(item, index) => item.Id}
                      showsVerticalIndicator={false}
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
