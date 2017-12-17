import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import icMenu from '../../../Media/appicon/ic_menu_white.png';
import icCalendar from '../../../Media/appicon/icon-calendar-white.png';
import { APP_THEME } from '../../Constants/Color';
import { DEVICE_HEIGHT } from '../../Constants/AppConstants';

export default class Header extends Component {
  render() {
    const {
      wrapper, rowHeader, iconStyle, titleHeader
    } = styles;
    return (
      <View style={wrapper}>
        <View style={rowHeader}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this.props.onOpen}
            >
                <Image source={icMenu} style={iconStyle} />
            </TouchableOpacity>

            <Text style={titleHeader} >Fitness For Weight Loss</Text>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={this.props.onOpenCalendar}
            >
            <Image source={icCalendar} style={iconStyle} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      height: DEVICE_HEIGHT / 15,
      backgroundColor: APP_THEME,
      padding: 10,
    },
    rowHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    iconStyle: { width: 35, height: 35 },
    titleHeader: { color: '#FFF', fontSize: 25 }

});

