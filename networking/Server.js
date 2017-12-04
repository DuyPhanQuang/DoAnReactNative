import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const apiGetAllTips = 'http://10.0.137.5:3000/tips/';
async function getTipsFromServer() {
    try {
        let response = await fetch(apiGetAllTips);
        let responseJson = await response.json();
        return responseJson; //list of tips
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getTipsFromServer};
