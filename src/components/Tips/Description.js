import React, { Component } from 'react';
import { View, Text, ScrollView, processColor } from 'react-native';
import HTML from 'react-native-render-html';
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../Constants/AppConstants';
import { getAboutWeightLossFromServer } from '../../../networking/Server';

const htmlContent = `
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <h1>{this.props.aboutweightloss.Name}</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class Description extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            tipOneFromServer: [],
        });
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getAboutWeightLossFromServer().then((tipone) => {
            this.setState({ tipOneFromServer: tipone });
        }).catch((error) => {
            this.setState({ tipOneFromServer: [] });
        });
    }

    render() {
        return (
            <ScrollView>
                <HTML data={this.state.tipOneFromServer} html={htmlContent} imagesMaxWidth={DEVICE_WIDTH} />
               <Text>{this.props.Name}</Text>
            </ScrollView>
        );
    }
}
