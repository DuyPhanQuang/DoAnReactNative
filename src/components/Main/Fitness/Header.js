import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

import icMenu from '../../../Media/appicon/ic_menu_white.png';
import icCalendar from '../../../Media/appicon/icon-calendar-white.png';

const { height } = Dimensions.get('window');


export default class Header extends Component {
  render() {
    const { wrapper, rowHeader, iconStyle, titleHeader } = styles;
    return (
      <View style={wrapper}>
        <View style={rowHeader}>
            <TouchableOpacity
            onPress={this.props.onOpen}
            >
                <Image source={icMenu} style={iconStyle} />
            </TouchableOpacity>

            <Text style={titleHeader} >Fitness for Weight Loss</Text>

            <TouchableOpacity>
            <Image source={icCalendar} style={iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, height: height / 15, backgroundColor: '#F66D6A', padding: 10, },
    rowHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    iconStyle: { width: 35, height: 35 },
    titleHeader: { color: '#FFF', fontSize: 25 }

});

