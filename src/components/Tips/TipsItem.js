import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { APP_THEME } from '../Constants/AppConstants';

export default class TipsItem extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity 
                  activeOpacity={0.5}
                  onPress={this.props.onShow}
                >
                <View
                  style={{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 === 0 ? 'mediumseagreen' : 'tomato'
                        backgroundColor: '#FFF',
                        paddingTop: 5
                    }}
                >
                    {/* <Image
                      source={{ uri: `http://${this.props.item.imageURL}` }}
                      style={{ width: 100, height: 100, margin: 5 }}
                    /> */}
                    <View style={{ margin: 5, width: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#F66D6A', fontSize: 25, fontWeight: '500' }}>{this.props.index}</Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.title}>{this.props.item.Name}</Text>
                        <Text style={styles.textContent}>{this.props.item.NoiDung}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', }}>
                    <Icon name="chevron-right" size={60} color={APP_THEME} />
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
        color: '#F66D6A',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textContent: {
        padding: 10,
        fontSize: 16,
    }
});
