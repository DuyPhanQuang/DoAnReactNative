import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const apiGetAllTips = 'http://192.168.1.103:3000/tips/';
const apiGetAllAboutWeightLoss = 'http://192.168.1.103:3000/aboutweightloss';
const apiGetAllTrainingData = 'http://192.168.1.103:3000/trainingdata';
const apiGetAllExFullbody = 'http://192.168.1.103:3000/exfullbody';
const apiGetAllExTopbody = 'http://192.168.1.103:3000/extopbody';
const apiGetAllExMidbody = 'http://192.168.1.103:3000/exmidbody';
const apiGetAllExBottombody = 'http://192.168.1.103:3000/exbottombody';

async function getTipsFromServer() {
    try {
        let response = await fetch(apiGetAllTips);
        let responseJson = await response.json();
        return responseJson; //list of tips db
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
};
async function getTrainingDataFromServer() {
    try {
        let response = await fetch(apiGetAllTrainingData);
        let responseJson = await response.json();
        return responseJson; //list of trainingday db
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExFullbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExFullbody);
        let responseJson = await response.json();
        return responseJson; //list of db exfullbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExTopbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExTopbody);
        let responseJson = await response.json();
        return responseJson; //list of db extopbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExMidbodyFromServer() {
    try {
        let response = await fetch(apiGetAllExMidbody);
        let responseJson = await response.json();
        return responseJson; //list of db exmidbody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
async function getExBottombodyFromServer() {
    try {
        let response = await fetch(apiGetAllExBottombody);
        let responseJson = await response.json();
        return responseJson; //list of db exbottombody
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
};
export {getTipsFromServer};
export {getTrainingDataFromServer};
export {getExFullbodyFromServer};
export {getExTopbodyFromServer};
export {getExMidbodyFromServer};
export {getExBottombodyFromServer};
