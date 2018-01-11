import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class WorkoutSchedule extends Component {
  constructor(props) {
    super(props);
    this.loadItems = this.loadItems.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderEmptyDate = this.renderEmptyDate.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.state = {
      items: {}
    };
  }
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: `Item for ${strTime}`,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      // console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach((key) => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }
  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
    );
  }
  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected="2017-11-26"
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        // markingType={'period'}
        // markedDates={{
        //    '2017-11-08': {textColor: '#666'},
        //    '2017-11-09': {textColor: '#666'},
        //    '2017-11-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-11-21': {startingDay: true, color: 'blue'},
        //    '2017-11-22': {endingDay: true, color: 'gray'},
        //    '2017-11-24': {startingDay: true, color: 'gray'},
        //    '2017-11-25': {color: 'gray'},
        //    '2017-11-26': {endingDay: true, color: 'gray'}}}
        //  monthFormat={'yyyy'}
        //  theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F66D6A',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
