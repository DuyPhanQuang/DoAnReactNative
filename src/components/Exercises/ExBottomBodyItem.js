import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { APP_THEME } from '../Constants/AppConstants';

export default class ExBottomBodyItem extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }
    render() {
        const { item } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity 
                  activeOpacity={0.5}
                  onPress={
                      () => {
                          if (this.state.loading === false) {
                              this.setState({ loading: true }, async () => {
                                  setTimeout(async () => {
                                    await this.props.navigation.navigate(
                                        'ManHinh_DetailExercisesBottom',
                                        {
                                            title: item.Name,
                                            des: item.Description,
                                            bre: item.Breathing,
                                            urlvids: item.UrlVideo
                                        }
                                    );
                                    this.setState({ loading: false });
                                  }, 500);
                              });
                          }
                      }
                  }
                >
                <View
                  style={{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                        backgroundColor: '#FFF',
                        paddingTop: 5
                    }}
                >
                    <Image
                      source={{ uri: this.props.item.ImageUrl }}
                      style={{ width: 80, height: 80, margin: 5 }}
                    />
                    {/* <View style={{ margin: 5, width: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#F66D6A', fontSize: 25, fontWeight: '500' }}>{this.props.index}</Text>
                    </View> */}
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={styles.title}>{this.props.item.Name}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', }}>
                    <Icon name="chevron-right" size={30} color='#F66D6A' />
                    </View>

                </View>
                </TouchableOpacity>
                <View style={{ height: 2, backgroundColor: APP_THEME }} />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        color: '#3A3A3A',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
