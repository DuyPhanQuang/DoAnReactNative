import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Drawer from 'react-native-drawer';
import Fitness from './Fitness/Fitness';
// import Menu from './Menu';

export default class Main extends Component {

  // closeControlPanel = () => {
  //   this.drawer.close();
  // };
  // openControlPanel = () => {
  //   this.drawer.open();
  // };

  render() {
    return (
      <Fitness />
      // <Drawer
      //   ref={(ref) => { this.drawer = ref; }}
      //   content={<Menu />}
      //   openDrawerOffset={0.4}
      //   tapToClose
      // >
      //   <Fitness open={this.openControlPanel.bind(this)} />
      // </Drawer>
    );
  }
}
