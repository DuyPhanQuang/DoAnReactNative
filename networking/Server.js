import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const apiGetAllTips = 'http://10.0.137.5:3000/tips/';
const apiGetAllAboutWeightLoss = 'http://10.0.137.5:3000/aboutweightloss';
const apiGetAllTrainingDay = 'http://10.0.137.5:3000/trainingday';

async function getTipsFromServer() {
    try {
        let response = await fetch(apiGetAllTips);
        let responseJson = await response.json();
        return responseJson; //list of tips db
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};
async function getAboutWeightLossFromServer() {
    try {
        let response = await fetch(apiGetAllAboutWeightLoss);
        let responseJson = await response.json();
        return responseJson; //list of aboutweightloss db
    } catch (error) {
        console.error(`Error is : ${error}`);; 
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
export {getAboutWeightLossFromServer};
export {getTrainingDayFromServer};
