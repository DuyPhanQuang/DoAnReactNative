import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const apiGetAllTips = 'http://192.168.1.103:3000/tips/';
const apiGetAllAboutWeightLoss = 'http://192.168.1.103:3000/aboutweightloss';
const apiGetAllTrainingDay = 'http://192.168.1.103:3000/trainingday';

async function getTipsFromServer() {
    try {
        let response = await fetch(apiGetAllTips);
        let responseJson = await response.json();
        return responseJson; //list of tips db
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};
async function getTrainingDayFromServer() {
    try {
        let response = await fetch(apiGetAllTrainingDay);
        let responseJson = await response.json();
        return responseJson; //list of trainingday db
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};

export {getTipsFromServer};
export {getTrainingDayFromServer};
