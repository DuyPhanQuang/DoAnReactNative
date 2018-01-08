import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import FunctionBar from './FunctionBar';
import { APP_THEME } from '../../Constants/Color';
import StartComponent from './StartComponent';

export default class Fitness extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            loading: false,
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { wrapper } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: APP_THEME }}>
                {/* dat props onOpen */}
                <Header
                  onOpen={
                      () => {
                        if (this.state.loading === false) {
                            this.setState({ loading: true }, async () => {
                                setTimeout(async () => {
                                    navigate('DrawerOpen');
                                    this.setState({ loading: false });
                                }, 500);
                            });
                        }
                      }
                  }
                  onOpenCalendar={
                      () => {
                        if (this.state.loading === false) {
                            this.setState({ loading: true }, async () => {
                                setTimeout(async () => {
                                    navigate('ManHinh_WorkoutSchedule');
                                    this.setState({ loading: false });
                                }, 500);
                            });
                        }
                      }
                  }
                />
                <FunctionBar onRunTrackerPress={() => navigate('ManHinh_RunTracker')} />
                <View style={wrapper}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <StartComponent navigation={this.props.navigation} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 8,
        alignItems: 'center',
        // backgroundColor: '#F00',
        // paddingHorizontal: 10,
    }
});
